import { TableColumn } from "@swimlane/ngx-datatable";

export const BANK_CRO: TableColumn[] = [
  {
    name: 'Naziv banke',
    prop: 'name',
    draggable: false,
    resizeable: false,
    sortable: true,
    minWidth: 300,
    maxWidth: 600
  },
  {
    name: 'Akcije banke',
    prop: 'bankActions',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 600,
    maxWidth: 1200
  },
  {
    name: 'Akcije',
    prop: 'actions',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 100,
    maxWidth: 150
  },
];

export const BANK_ENG: TableColumn[] = [
  {
    name: 'Bank name',
    prop: 'name',
    draggable: false,
    resizeable: false,
    sortable: true,
    minWidth: 300,
    maxWidth: 600
  },
  {
    name: 'Bank actions',
    prop: 'bankActions',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 600,
    maxWidth: 1200
  },
  {
    name: 'Actions',
    prop: 'actions',
    draggable: false,
    resizeable: false,
    sortable: false,
    minWidth: 100,
    maxWidth: 150
  },
];
