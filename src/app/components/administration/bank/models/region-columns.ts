import { TableColumn } from "@swimlane/ngx-datatable";

export const REGION_CRO: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Naziv regije', prop: 'name', width: 600 },
  { name: 'Akcije', prop: 'actions', width: 90 }
];

export const REGION_ENG: TableColumn[] = [
  { name: '#', prop: 'id', width: 50 },
  { name: 'Region name', prop: 'name', width: 600 },
  { name: 'Actions', prop: 'actions', width: 90 }
];
