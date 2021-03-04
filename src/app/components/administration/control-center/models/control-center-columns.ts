import { TableColumn } from "@swimlane/ngx-datatable";

export const CONTROL_CENTERS_CRO: TableColumn[] = [
  {
    name: '#',
    prop: 'id',
    draggable: false,
    resizeable: false,
    minWidth: 25,
    maxWidth: 50
  },
  {
    name: 'Naziv kontrolnog centra',
    prop: 'name',
    draggable: false,
    resizeable: false,
    minWidth: 200,
    maxWidth: 400
  },
  {
    name: 'Mail lista za izvješća',
    prop: 'emailList',
    draggable: false,
    resizeable: false,
    minWidth: 500,
    maxWidth: 1000
  },
  {
    name: 'Akcije',
    prop: 'actions',
    draggable: false,
    resizeable: false,
    minWidth: 50,
    maxWidth: 100
  }
];

export const CONTROL_CENTERS_ENG: TableColumn[] = [
  {
    name: '#',
    prop: 'id',
    draggable: false,
    resizeable: false,
    minWidth: 25,
    maxWidth: 50
  },
  {
    name: 'Control center name',
    prop: 'name',
    draggable: false,
    resizeable: false,
    minWidth: 200,
    maxWidth: 400
  },
  {
    name: 'Mail list for reports',
    prop: 'emailList',
    draggable: false,
    resizeable: false,
    minWidth: 500,
    maxWidth: 1000
  },
  {
    name: 'Actions',
    prop: 'actions',
    draggable: false,
    resizeable: false,
    minWidth: 50,
    maxWidth: 100
  }
];
