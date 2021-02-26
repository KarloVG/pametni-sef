import { TableColumn } from "@swimlane/ngx-datatable";

export const CURRENCY_CRO: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Kod valute', prop: 'name', width: 300 },
    { name: 'Omjer', prop: 'ratio', width: 500 },
    { name: 'Apoenska struktura', prop: 'apoen', width: 100 },
    { name: 'Akcije', prop: 'actions', width: 20 }
];

export const CURRENCY_ENG: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Currency code', prop: 'name', width: 300 },
    { name: 'Ratio', prop: 'ratio', width: 500 },
    { name: 'Apoen structure', prop: 'apoen', width: 100 },
    { name: 'Actions', prop: 'actions', width: 20 }
];