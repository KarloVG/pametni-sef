export interface ICompanyResponse {
  id: number;
  name: string;
  address: string;
  headquarters: string;
  userCount: number;
  deviceCount: number;
  identificationNumber?: string;
  isAdmin: boolean;
  jointOrderFilename: string;
}
