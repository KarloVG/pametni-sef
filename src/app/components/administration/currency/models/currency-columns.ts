import { TableColumn } from "@swimlane/ngx-datatable";

export const CURRENCY_CRO: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Kod valute', prop: 'name', width: 150 },
    { name: 'Omjer', prop: 'ratio', width: 500 }
];

export const CURRENCY_ENG: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Currency code', prop: 'name', width: 150 },
    { name: 'Ratio', prop: 'ratio', width: 500 }
];