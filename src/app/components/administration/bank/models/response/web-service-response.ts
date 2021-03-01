export interface IWebServiceResponse {
  id: number;
  name: string;
  address: string;
  class: string;
  isSOAPMessageActive: boolean;
  keystorePath?: string;
  privateKeyAlias?: string;
  keystorePassword?: string;
  isSendMailActive: boolean;
  isUserCreateActive: boolean;
  timeFrom: {
    hour: number;
    minute: number;
  };
  timeTo: {
    hour: number;
    minute: number;
  };
}
