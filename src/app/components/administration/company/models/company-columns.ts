import { TableColumn } from "@swimlane/ngx-datatable";

export const COMPANY_CRO: TableColumn[] = [
  {
    name: '#',
    prop: 'id',
    draggable: false,
    resizeable: false,
    minWidth: 25,
    maxWidth: 50
  },
  {
    name: 'Naziv tvrtke',
    prop: 'name',
    draggable: false,
    resizeable: false,
    minWidth: 600,
    maxWidth: 1200
  },
  {
    name: 'Korisnici',
    prop: 'userCount',
    draggable: false,
    resizeable: false,
    minWidth: 100,
    maxWidth: 200
  },
  {
    name: 'Uređaji',
    prop: 'deviceCount',
    draggable: false,
    resizeable: false,
    minWidth: 100,
    maxWidth: 200
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

export const COMPANY_ENG: TableColumn[] = [
  {
    name: '#',
    prop: 'id',
    draggable: false,
    resizeable: false,
    minWidth: 25,
    maxWidth: 50
  },
  {
    name: 'Company name',
    prop: 'name',
    draggable: false,
    resizeable: false,
    minWidth: 600,
    maxWidth: 1200
  },
  {
    name: 'Users',
    prop: 'userCount',
    draggable: false,
    resizeable: false,
    minWidth: 100,
    maxWidth: 200
  },
  {
    name: 'Devices',
    prop: 'deviceCount',
    draggable: false,
    resizeable: false,
    minWidth: 100,
    maxWidth: 200
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
