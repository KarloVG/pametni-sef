export interface IControlCenterRequest {
  id: number;
  name: string;
  emailList: string[] | string;
  sendDailyReport: boolean;
  sendTime: string;
}
