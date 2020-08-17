import { Injectable, Component } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export interface DocExample {
    title: string;
    component: ComponentType<any>;
}

export interface DocItem {
    id: string;
    name: string;
    examples?: DocExample[];
}

export interface DocCategory {
    id: string;
    name: string;
    items: DocItem[];
    summary?: string;
}

const DOCS: DocCategory[] = [
    {
        id: 'layout',
        name: 'Layout',
        items: [
            {
                id: 'layout-intro',
                name: 'Qué es un layout?',
                examples: []
            },
            {
                id: 'tipologias',
                name: 'Tipologías',
                examples: []
            },
            {
                id: 'navbar',
                name: 'Navbar',
                examples: []
            },
            {
                id: 'panel-principal',
                name: 'Panel principal',
                examples: []
            },
            {
                id: 'panel-lateral',
                name: 'Panel lateral',
                examples: []
            },
            {
                id: 'footer',
                name: 'Footer',
                examples: []
            },
            {
                id: 'layout-sin-footer',
                name: 'Sin footer',
                examples: []
            },
            {
                id: 'layout-responsive',
                name: 'Layout responsive',
                examples: []
            }
        ]
    },
    {
        id: 'componentes',
        name: 'Componentes',
        items: [
            {
                id: 'accordion',
                name: 'Accordion',
                examples: []
            },
            {
                id: 'bool',
                name: 'Bool',
                examples: []
            },
            {
                id: 'button',
                name: 'Button',
                examples: []
            },
            {
                id: 'component-botonera',
                name: 'Botonera',
                examples: []
            },
            {
                id: 'badge',
                name: 'Badge',
                examples: []
            },
            {
                id: 'datetime',
                name: 'Datetime',
                examples: []
            },
            {
                id: 'component-tabs',
                name: 'Tabs',
                examples: []
            },
            {
                id: 'text',
                name: 'Text',
                examples: []
            },
            {
                id: 'select',
                name: 'Select',
                examples: []
            },
            {
                id: 'float',
                name: 'Float',
                examples: []
            },
            {
                id: 'phone',
                name: 'Phone',
                examples: []
            },
            {
                id: 'icon',
                name: 'Icon',
                examples: []
            },
            {
                id: 'title',
                name: 'Title',
                examples: []
            },
            {
                id: 'plex-help',
                name: 'Help',
                examples: []
            },
            {
                id: 'plex-copy',
                name: 'Copy',
                examples: []
            },
            {
                id: 'plex-detail',
                name: 'Detail',
                examples: []
            },
            {
                id: 'plex-radio',
                name: 'Radio',
                examples: []
            },
            {
                id: 'plex-options',
                name: 'Options',
                examples: []
            },
            {
                id: 'plex-label',
                name: 'Label',
                examples: []
            },
            {
                id: 'plex-list',
                name: 'List',
                examples: []
            },
            {
                id: 'plex-visualizador',
                name: 'Visualizador',
                examples: []
            },
            {
                id: 'plex-wrapper',
                name: 'Wrapper',
                examples: []
            },
            {
                id: 'plex-grid',
                name: 'Grid',
                examples: []
            }
        ]
    },
    {
        id: 'directivas',
        name: 'Directivas',
        items: [
            {
                id: 'grow',
                name: 'Grow',
                examples: []
            },
            {
                id: 'hint',
                name: 'Hint',
                examples: []
            },
            {
                id: 'justify',
                name: 'Justify',
                examples: []
            },
            {
                id: 'responsive',
                name: 'Responsive',
                examples: []
            },
            {
                id: 'span',
                name: 'Span',
                examples: []
            },
            {
                id: 'tooltip',
                name: 'Tooltip',
                examples: []
            },
            {
                id: 'pltab',
                name: 'plTab',
                examples: []
            }
        ]
    },
    {
        id: 'templates',
        name: 'Plantillas',
        items: [
            {
                id: 'template-form',
                name: 'Formulario',
                examples: [{
                    title: 'template-form',
                    component: null // Aquì debería cargar el componente del ejemplo
                },
                ]
            },
            {
                id: 'template-form-sidebar',
                name: 'Formulario sidebar',
                examples: [{
                    title: 'template-form-sidebar',
                    component: null // Aquì debería cargar el componente del ejemplo
                },
                ]
            },
            {
                id: 'template-busqueda',
                name: 'Búsqueda',
                examples: [{
                    title: 'template-busqueda',
                    component: null // Aquì debería cargar el componente del ejemplo
                },
                ]
            },
            {
                id: 'template-listado',
                name: 'Listado',
                examples: []
            },
            {
                id: 'template-visualizacion',
                name: 'Visualización',
                examples: [{
                    title: 'template-visualizacion',
                    component: null // Aquì debería cargar el componente del ejemplo
                },
                ]
            },
        ]
    },
];

const ALL_COMPONENTS = DOCS.reduce(
    (result, category) => result.concat(category.items), []);
const ALL_DOCS = ALL_COMPONENTS;
const ALL_CATEGORIES = DOCS;
export const SECTIONS = {
    ['components']: 'Guías'
};

@Injectable()
export class DocumentationItems {
    getCategories(section: string): DocCategory[] {
        return DOCS;
    }

    getItems(section: string): DocItem[] {
        return ALL_COMPONENTS;
    }

    getItemById(id: string, section: string): DocItem {
        return ALL_DOCS.find(doc => doc.id === id);
    }

    getCategoryById(id: string): DocCategory {
        return ALL_CATEGORIES.find(c => c.id == id);
    }
}
