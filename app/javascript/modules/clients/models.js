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
  list: { items: [], error: null, loading: false },
  activeItem: { item: null, error: null, edit: false, deleted: false, loading: false }
};

export const filterActive = clients => clients.filter(t => t.active);

export const filterInactive = clients => clients.filter(t => !t.active);