export class Client {
  constructor() {
    this.id = null;
    this.title = 'New client';
    this.full_name = this.title;
    this.tax_number = '';
    this.description = '';
    this.active = true;
  }
}

export const State = {
  list: { items: [], loading: false },
  currentItem: { item: null, loading: false },
  error: null
};

export const filterActive = clients => clients.filter(t => t.active);

export const filterInactive = clients => clients.filter(t => !t.active);