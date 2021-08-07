interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserModels {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
}
