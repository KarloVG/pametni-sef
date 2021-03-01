import { TableColumn } from "@swimlane/ngx-datatable";

export const WEB_SERVICE_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv Web Servisa', prop: 'name', width: 400 },
  { name: 'Adresa Web Servisa', prop: 'address', width: 400 },
  { name: 'Akcije', prop: 'actions', width: 60 }
];

export const WEB_SERVICE_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv Web Servisa', prop: 'name', width: 400 },
  { name: 'Adresa Web Servisa', prop: 'address', width: 400 },
  { name: 'Akcije', prop: 'actions', width: 60 }
];
