import { Injectable, Component } from '@angular/core';
import { AutocompleteOverviewExample } from '../examples/autocomplete-overview/autocomplete-overview-example';
import { AutocompleteOptgroupExample } from '../examples/autocomplete-optgroup/autocomplete-optgroup-example';
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
        id: 'tipologias',
        name: 'Tipologías',
        examples: [
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
  {
    id: 'componentes',
    name: 'Componentes',
    items: [
      {
        id: 'bool',
        name: 'Bool',
        examples: [
        //   {
        //     title: 'autocomplete-overview',
        //     component: AutocompleteOverviewExample
        //   },
        //   {
        //     title: 'autocomplete-optgroup',
        //     component: AutocompleteOptgroupExample
        //   }
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
