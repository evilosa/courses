export class User {
  constructor() {
    this.id = null;
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
    this.created_at = '';
    this.updated_at = '';
  }
}

export const State = {
  signedIn: false,
  loading: false,
  user: null,
  token: null
};