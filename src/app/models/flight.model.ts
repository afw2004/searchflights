import { FlightConnectionModel } from './flightconnection.model';

export interface FlightModel {
    origin: FlightConnectionModel;
    destination: FlightConnectionModel;
    price: number;
}
