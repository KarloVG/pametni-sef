import { TableColumn } from "@swimlane/ngx-datatable";

export const CONTROL_CENTERS_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 25 },
  { name: 'Naziv kontrolnog centra', prop: 'name', width: 250 },
  { name: 'Mail lista za izvješća', prop: 'emailList', width: 600 },
  { name: 'Akcije', prop: 'actions', width: 50 }
];

export const CONTROL_CENTERS_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 25 },
  { name: 'Control center name', prop: 'name', width: 250 },
  { name: 'Mail list for reports', prop: 'emailList', width: 600 },
  { name: 'Actions', prop: 'actions', width: 50 }
];
