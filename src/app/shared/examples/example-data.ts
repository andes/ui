/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
export class ExampleData {

  /** Description of the example. */
  description: string;

  /** Path to the example. This is based on the structure of the material.angular.io repo. */
  examplePath: string;

  /** List of files that are part of this example. */
  exampleFiles: string[];

  /** Selector name of the example component. */
  selectorName: string;

  /** Name of the file that contains the example component. */
  indexFilename: string;

  /**
   * Name of the example component. For examples with multiple components, this property will
   * include multiple components that are comma separated (e.g. dialog-overview)
   */
  componentName: string;

  constructor(example: string) {
    // TODO(tinayuangao): Do not hard-code extensions
    this.exampleFiles = ['html', 'ts', 'css'].map(extension => `${example}-example.${extension}`);
    this.examplePath = `/assets/documents/examples/${example}/`;
    this.selectorName = this.indexFilename = `${example}-example`;
    const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
    this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
    this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
  }
}
