export class Course {
  constructor() {
    this.id = null;
    this.title = 'New client';
    this.full_name = this.title;
    this.description = '';
    this.logo = '';
    this.active = true;
  }
}

export const State = {
  list: { items: [], error: null, loading: false },
  activeItem: { item: new Course(), error: null, edit: false, deleted: false, loading: false }
};

export const filterActive = courses => courses.filter(t => t.active);

export const filterInactive = courses => courses.filter(t => !t.active);