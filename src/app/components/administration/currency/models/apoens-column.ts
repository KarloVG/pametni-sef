import { TableColumn } from "@swimlane/ngx-datatable";

export const APOENS_CRO: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Valuta', prop: 'name', width: 350 },
    { name: 'Vrijednost', prop: 'value', width: 350 },
    { name: 'Tip', prop: 'type.name', width: 350 },
    { name: 'Akcije', prop: 'actions', width: 50 }
];

export const APOENS_ENG: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Currency', prop: 'name', width: 350 },
    { name: 'Value', prop: 'value', width: 350 },
    { name: 'Type', prop: 'type.name', width: 350 },
    { name: 'Actions', prop: 'actions', width: 50 }
];