export class Client {
  constructor() {
    this.id = null;
    this.title = 'New client';
    this.full_name = this.title;
    this.tax_number = '';
    this.description = '';
    this.logo = '/img/no_image.png';
    this.active = true;
  }
}

export const State = {
  list: { items: [], errors: null, loading: false },
  activeItem: { item: new Client(), errors: null, edit: false, deleted: false, loading: false }
};

export const filterActive = clients => clients.filter(t => t.active);

export const filterInactive = clients => clients.filter(t => !t.active);