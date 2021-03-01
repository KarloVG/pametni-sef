import { TableColumn } from "@swimlane/ngx-datatable";

export const CUMULATIVE_ORDER_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv konfiguracije zbrojnog naloga', prop: 'name', width: 300 },
  { name: 'Korisničko ime na serveru', prop: 'userName', width: 300 },
  { name: 'Naziv ili IP servera na koji se šalje zbrojni nalog', prop: 'serverIP', width: 300 },
  { name: 'Akcije', prop: 'actions', width: 75 },
];

export const CUMULATIVE_ORDER_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Name of culumative order configuration', prop: 'name', width: 300 },
  { name: 'Server username', prop: 'userName', width: 300 },
  { name: 'Name or server IP to which the order is sent', prop: 'serverIP', width: 300 },
  { name: 'Actions', prop: 'actions', width: 75 },
];
