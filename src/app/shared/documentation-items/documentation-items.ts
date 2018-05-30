import { Injectable } from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

const COMPONENTS = 'components';
export const SECTIONS = {
  [COMPONENTS]: 'Components'
};


const DOCS: { [key: string]: DocCategory[] } = {
  [COMPONENTS]: [
    {
      id: 'forms',
      name: 'Form Controls',
      items: [
        {
          id: 'autocomplete',
          name: 'Autocomplete',
          examples: [
            'autocomplete-overview',
            'autocomplete-optgroup',
          ]
        },
      ]
    }
  ]
};

for (let category of DOCS[COMPONENTS]) {
  for (let doc of category.items) {
    doc.packageName = 'material';
  }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
  (result, category) => result.concat(category.items), []);
const ALL_DOCS = ALL_COMPONENTS;
const ALL_CATEGORIES = DOCS[COMPONENTS];

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS[section];
  }

  getItems(section: string): DocItem[] {
    if (section === COMPONENTS) {
      return ALL_COMPONENTS;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem {
    return ALL_DOCS.find(doc => doc.id === id);
  }

  getCategoryById(id: string): DocCategory {
    return ALL_CATEGORIES.find(c => c.id == id);
  }
}
