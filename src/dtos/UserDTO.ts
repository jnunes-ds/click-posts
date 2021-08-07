interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: string;
  name: string;
  userIame: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
}
