export interface IUser {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  social: {
    feacebook: string;
    twitter: string;
    github: string;
    website: string;
  };
}
