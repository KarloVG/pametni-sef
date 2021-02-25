import { TableColumn } from "@swimlane/ngx-datatable";

export const BANK_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv banke', prop: 'name', width: 250 },
  { name: 'Akcije banke', prop: 'bankActions', width: 600 },
  { name: 'Akcije', prop: 'actions', width: 75 },
];

export const BANK_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Bank name', prop: 'name', width: 250 },
  { name: 'Bank actions', prop: 'bankActions', width: 600 },
  { name: 'Actions', prop: 'actions', width: 75 },
];
