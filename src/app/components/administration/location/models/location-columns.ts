import { TableColumn } from "@swimlane/ngx-datatable";

export const LOCATION_CRO: TableColumn[] = [
  { name: 'Naziv', prop: 'name', sortable: true, width: 400 },
  { name: 'Adresa', prop: 'address', sortable: true, width: 200 },
  { name: 'Naziv tvrtke', prop: 'companyName', sortable: true, width: 150 },
  { name: 'Akcije', prop: 'actions', sortable: false, width: 75 }
];

export const LOCATION_ENG: TableColumn[] = [
  { name: 'Name', prop: 'name', sortable: true, width: 400 },
  { name: 'Address', prop: 'address', sortable: true, width: 200 },
  { name: 'Company name', prop: 'companyName', sortable: true, width: 150 },
  { name: 'Actions', prop: 'actions', sortable: false, width: 75 }
];
