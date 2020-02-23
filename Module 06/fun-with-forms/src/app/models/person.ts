import { Address } from './address';
export interface Person {
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    creditCard: string;
    email: string;
    address: Address;
    aliases: string[];
}