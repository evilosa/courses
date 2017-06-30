export class Course {
  constructor() {
    this.id = null;
    this.title = 'New course';
    this.full_name = this.title;
    this.description = '';
    this.logo = '/img/no_image.png';
    this.client = null;
    this.client_id = null;
    this.active = true;
  }
}

export const State = {
  list: { items: [], errors: null, loading: false },
  activeItem: { item: new Course(), errors: null, edit: false, deleted: false, loading: false }
};

export const filterActive = items => items.filter(t => t.active);

export const filterInactive = items => items.filter(t => !t.active);