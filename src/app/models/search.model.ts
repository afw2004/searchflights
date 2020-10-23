export interface SearchModel {
    departureFrom: string;
    departureDateStart: Date;
    departureDateFinish: Date;
    arrivalTo: string;
    maxConnections: number;
    minConnectionGap: number;
    maxConnectionGap: number;
    allowConnections: boolean;
    maxPrice: number;
}
