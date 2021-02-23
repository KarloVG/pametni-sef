import { TableColumn } from "@swimlane/ngx-datatable";

export const CONTROL_CENTERS_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv kontrolnog centra', prop: 'name', width: 150 },
  { name: 'Mail lista za izvješća', prop: 'mailList', width: 500 }
];

export const CONTROL_CENTERS_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Control center name', prop: 'name', width: 150 },
  { name: 'Mail list for reports', prop: 'mailList', width: 500 }
];
