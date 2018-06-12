import { Injectable, Component } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { AutocompleteOverviewExample } from '../examples/autocomplete-overview/autocomplete-overview-example';
import { AutocompleteOptgroupExample } from '../examples/autocomplete-optgroup/autocomplete-optgroup-example';
import { LayoutOverviewExample } from '../examples/layout-overview/layout-overview-example';
import { LayoutOptgroupExample } from '../examples/layout-optgroup/layout-optgroup-example';
import { TipologiasOverviewExample } from '../examples/tipologias-overview/tipologias-overview-example';
import { TipologiasOptgroupExample } from '../examples/tipologias-optgroup/tipologias-optgroup-example';
// import { BoolOverviewExample } from '../examples/bool-overview/bool-overview-example';
import { BoolOptgroupExample } from '../examples/bool-optgroup/bool-optgroup-example';

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
        examples: [
          // {
          //   title: 'tipologias-overview',
          //   component: TipologiasOptgroupExample
          // },
          // {
          //   title: 'tipologias-optgroup',
          //   component: TipologiasOptgroupExample
          // }
        ]
      },
      {
        id: 'tipologias',
        name: 'Tipologías',
        examples: [
          // {
          //   title: 'layout-overview',
          //   component: LayoutOverviewExample
          // },
          // {
          //   title: 'layout-optgroup',
          //   component: LayoutOptgroupExample
          // }
        ]
      },
      {
        id: 'navbar',
        name: 'Navbar',
        examples: [
        ]
      },
      {
        id: 'panel-principal',
        name: 'Panel principal',
        examples: [
        ]
      },
      {
        id: 'panel-lateral',
        name: 'Panel lateral',
        examples: [
        ]
      },
      {
        id: 'footer',
        name: 'Footer',
        examples: [
        ]
      },
    ]
  },
  // {
  //   id: 'button',
  //   name: 'Plex-button',
  //   items: [
  //     {
  //       id: 'plex-button',
  //       name: 'Botones',
  //       examples: [
  //       ]
  //     },
  //   ]
  // },
  {
    id: 'componentes',
    name: 'Componentes',
    items: [
      {
        id: 'bool',
        name: 'Bool',
        examples: [
          // {
          //   title: 'bool-overview',
          //   component: BoolOverviewExample
          // },
          // {
          //   title: 'bool-optgroup',
          //   component: BoolOptgroupExample
          // }
        ]
      },
      {
        id: 'accordion',
        name: 'Accordion',
        examples: []
      },
      {
        id: 'button',
        name: 'Button',
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
        id: 'text',
        name: 'Text',
        examples: []
      }
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
