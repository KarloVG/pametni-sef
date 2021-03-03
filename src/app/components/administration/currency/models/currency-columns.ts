import { TableColumn } from "@swimlane/ngx-datatable";

export const CURRENCY_CRO: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Kod valute', prop: 'name', width: 300 },
    { name: 'Omjer', prop: 'ratio', width: 250 },
    { name: 'Akcije valuta', prop: 'apoen', width: 300 },
    { name: 'Akcije', prop: 'actions', width: 20 }
];

export const CURRENCY_ENG: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Currency code', prop: 'name', width: 300 },
    { name: 'Ratio', prop: 'ratio', width: 250 },
    { name: 'Currency action', prop: 'apoen', width: 300 },
    { name: 'Actions', prop: 'actions', width: 20 }
];