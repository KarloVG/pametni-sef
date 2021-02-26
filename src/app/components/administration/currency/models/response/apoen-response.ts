import { ICurrencyTypeResponse } from "./currency-type-response";

export interface IApoenResponse{
    id: number;
    name: string;
    value: number;
    type: ICurrencyTypeResponse;
}