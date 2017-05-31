export class Client {
  constructor() {
    this.id = null;
    this.name = 'New client';
    this.full_name = this.name;
    this.tax_number = '';
    this.description = '';
    this.active = true;
  }
}

export const State = {
  itemsList: { items: [], error: null, isFetching: false },
  activeItem: { item: null, error: null, isFetching: false },
  deletedItem: { item: null, error: null, isFetching: false}
};

export const filterActive = clients => clients.filter(t => t.active);

export const filterInactive = clients => clients.filter(t => !t.active);