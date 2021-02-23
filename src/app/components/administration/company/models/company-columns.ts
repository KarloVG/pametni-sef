import { TableColumn } from "@swimlane/ngx-datatable";

export const COMPANY_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv tvrtke', prop: 'name', width: 300 },
  { name: 'Korisnici', prop: 'userCount', width: 150 },
  { name: 'Uređaji', prop: 'deviceCount', width: 150 },
  { name: 'Akcije', prop: 'actions', width: 75 }
];

export const COMPANY_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Company name', prop: 'name', width: 300 },
  { name: 'Users', prop: 'userCount', width: 150 },
  { name: 'Actions', prop: 'actions', width: 75 }
];
