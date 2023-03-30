export interface ICompanyType {
  name: string;
}
export interface IUserDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: ICompanyType;
}
