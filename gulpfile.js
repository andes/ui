var gulp = require('gulp');
var rename = require("gulp-rename");
const through2 = require('through2');
const util = require('gulp-util');
const hljs = require('highlight.js');
const path = require('path');
var del = require('del');
var replace = require('gulp-string-replace');

// Folders
const source = '../plex/src/demo/app/templates';
const destination = 'src/assets/documents/examples/sourcecode';
/**
 * Hightlights files
 */
let gulpHighlightFiles = function() {
    // Write default options
    let options = {
        language: null,
        languageMap: { ts: 'typescript' },
        hljsConfig: {},
        ignoreSyntax: true,
    };

    // Configure hljs with the specified options
    hljs.configure(options.hljsConfig);

    return through2.obj(function(file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new util.PluginError('gulp-highlight-files', 'Streaming is not supported'));
            return cb();
        }

        let language = detectLanguage(file.path);
        let contents = file.contents.toString();

        try {
            file.contents = new Buffer(runHightlightJs(contents, language), options.buffer);
        } catch (err) {
            this.emit('error', new util.PluginError('gulp-highlight-files', err));
        }

        this.push(file);
        cb();
    });

    /** Runs highlightjs against a given type. */
    function runHightlightJs(content, language) {
        return hljs.highlight(language || 'html', content, options.ignoreSyntax).value;
    }

    /** Detects the hljs language name of a file. */
    function detectLanguage(fileName) {
        if (options.language) {
            return options.language;
        }
        let language = path.extname(fileName).slice(1);
        return options.languageMap[language] || language;
    }
};

gulp.task('default', function() {
    // Vaciar directorio
    del(destination + '/**');

    // Crear archivos
    gulp.src(source + '/**/*.{html,ts,scss}')
        .pipe(replace(new RegExp('import { Plex } from \'../../../lib/core/service\';', 'g'), 'import { Plex, SelectEvent } from \'@andes/plex\';', { logs: { enabled: false } }))
        .pipe(replace(new RegExp('import { SelectEvent } from \'./../../../lib/select/select-event.interface\';', 'g'), '', { logs: { enabled: false } }))
        .pipe(gulpHighlightFiles())
        .pipe(rename(function(path) {
            console.log(`Creando ejemplo para: ${path.basename}${path.extname}`);
            path.dirname = '';
            path.extname += ".html";
        }))
        .pipe(gulp.dest(destination));
});