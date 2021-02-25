import { TableColumn } from "@swimlane/ngx-datatable";

export const IBAN_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Kratki opis', prop: 'description', width: 100 },
  { name: 'Broj IBAN-a', prop: 'iban', width: 300 },
  { name: 'Tvrtka', prop: 'companyName', width: 200 },
  { name: 'Akcije', prop: 'actions', width: 50 }
];

export const IBAN_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Short description', prop: 'description', width: 100 },
  { name: 'IBAN number', prop: 'iban', width: 300 },
  { name: 'Company', prop: 'companyName', width: 200 },
  { name: 'Actions', prop: 'actions', width: 50 }
];
