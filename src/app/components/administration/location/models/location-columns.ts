import { TableColumn } from "@swimlane/ngx-datatable";

export const LOCATION_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 25 },
  { name: 'Opis', prop: 'description', width: 400 },
  { name: 'Adresa', prop: 'address', width: 200 },
  { name: 'Naziv tvrtke', prop: 'companyName', width: 150 },
  { name: 'Akcije', prop: 'actions', width: 75 }
];

export const LOCATION_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 25 },
  { name: 'Description', prop: 'description', width: 400 },
  { name: 'Address', prop: 'address', width: 200 },
  { name: 'Company name', prop: 'companyName', width: 150 },
  { name: 'Actions', prop: 'actions', width: 75 }
];
