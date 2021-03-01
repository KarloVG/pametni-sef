export interface ICumulativeOrderResponse {
  id: number;
  name: string;
  userName: string;
  serverIP: string;
  port: number;
  serverPath: string;
  privateKeyPassword: string;
  isSFTPAuthorization: boolean;
  serverPassword;
  fileSigningCertificate: string;
  authorityCertificate: string;
  signingMethod: string;
  orderFilePath: string;
  timeFrom: string;
  timeTo: string;
}
