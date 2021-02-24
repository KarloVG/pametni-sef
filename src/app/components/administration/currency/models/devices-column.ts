import { TableColumn } from "@swimlane/ngx-datatable";

export const DEVICES_CRO: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Transakcijski ID', prop: 'transactionId', width: 150 },
    { name: 'Naziv uređaja', prop: 'name', width: 150 },
    { name: 'Lokacija', prop: 'locationName', width: 150 },
    { name: 'Tvrtka', prop: 'companyName', width: 150 },
    { name: 'Status', prop: 'status', width: 150 },
    { name: 'Tip', prop: 'type', width: 150 },
    { name: 'Valute', prop: 'currency', width: 150 }
];

export const DEVICES_ENG: TableColumn[] = [
    { name: '#', prop: 'id', width: 50 },
    { name: 'Transaction ID', prop: 'transactionId', width: 150 },
    { name: 'Device name', prop: 'name', width: 150 },
    { name: 'Location', prop: 'locationName', width: 150 },
    { name: 'Company', prop: 'companyName', width: 150 },
    { name: 'Status', prop: 'status', width: 150 },
    { name: 'Type', prop: 'type', width: 150 },
    { name: 'Currency', prop: 'currency', width: 150 }
];