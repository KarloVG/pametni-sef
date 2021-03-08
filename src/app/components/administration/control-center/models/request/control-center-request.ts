export interface IControlCenterRequest {
  id: number;
  name: string;
  emailList: string[] | string;
  sendDailyReport: boolean;
  sendTime: {
    hour: number | null;
    minute: number | null;
  };
}
