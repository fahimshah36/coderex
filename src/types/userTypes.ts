export interface ICompanyType {
  name: string;
}
export interface IUserDataType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: ICompanyType;
}

export interface IUserType {
  body: string;
  title: string;
  reactions: number;
}
