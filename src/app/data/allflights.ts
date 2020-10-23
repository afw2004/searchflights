import { FlightModel } from '@models/flight.model';

export const ALL_FLIGHTS: FlightModel[] = [
    {
        origin: { country: 'United Kingdom', date: new Date('12/1/2020 9:30') },
        destination: { country: 'Russia', date: new Date('12/1/2020 15:30') },
        price: 400
    },

    {
        origin: { country: 'United Kingdom', date: new Date('12/1/2020 9:30') },
        destination: { country: 'France', date: new Date('12/2/2020 15:30') },
        price: 350
    },

    {
        origin: { country: 'United Kingdom', date: new Date('12/2/2020 9:30') },
        destination: { country: 'Italy', date: new Date('12/2/2020 16:30') },
        price: 360
    },

    {
        origin: { country: 'France', date: new Date('12/2/2020 9:30') },
        destination: { country: 'Ukraine', date: new Date('12/2/2020 15:30') },
        price: 200
    },

    {
        origin: { country: 'France', date: new Date('12/2/2020 20:30') },
        destination: { country: 'Ukraine', date: new Date('12/3/2020 1:30') },
        price: 210
    },

    {
        origin: { country: 'France', date: new Date('12/2/2020 19:30') },
        destination: { country: 'Russia', date: new Date('12/3/2020 2:30') },
        price: 400
    },

    {
        origin: { country: 'Italy', date: new Date('12/3/2020 9:30') },
        destination: { country: 'Ukraine', date: new Date('12/3/2020 15:30') },
        price: 320
    },

    {
        origin: { country: 'Ukraine', date: new Date('12/4/2020 9:30') },
        destination: { country: 'Russia', date: new Date('12/4/2020 15:30') },
        price: 800
    }
];

