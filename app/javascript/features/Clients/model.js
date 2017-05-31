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
  items: [],
  error: null,
  isFetching: false,
  activeItem: null,
  deletedItem: null
};

export const filterActive = clients => clients.filter(t => t.active);

export const filterInactive = clients => clients.filter(t => !t.active);