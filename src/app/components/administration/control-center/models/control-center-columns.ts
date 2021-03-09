import { TableColumn } from "@swimlane/ngx-datatable";

export const CONTROL_CENTERS_CRO: TableColumn[] = [
  {
    name: 'Naziv kontrolnog centra',
    prop: 'name',
    draggable: false,
    resizeable: false,
    sortable: true,
    minWidth: 200,
    maxWidth: 300
  },
  {
    name: 'Mail lista za izvješća',
    prop: 'emailList',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 500,
    maxWidth: 1000
  },
  {
    name: 'Šalji dnevni izvještaj',
    prop: 'sendDailyReport',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 200,
    maxWidth: 300
  },
  {
    name: 'Akcije',
    prop: 'actions',
    draggable: false,
    sortable: false,
    resizeable: false,
    minWidth: 50,
    maxWidth: 100
  }
];

export const CONTROL_CENTERS_ENG: TableColumn[] = [
  {
    name: 'Control center name',
    prop: 'name',
    draggable: false,
    resizeable: false,
    sortable: true,
    minWidth: 200,
    maxWidth: 300
  },
  {
    name: 'Mail list for reports',
    prop: 'emailList',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 500,
    maxWidth: 1000
  },
  {
    name: 'Send daily report',
    prop: 'sendDailyReport',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 200,
    maxWidth: 300
  },
  {
    name: 'Actions',
    prop: 'actions',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 50,
    maxWidth: 100
  }
];
