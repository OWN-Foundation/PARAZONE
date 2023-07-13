import * as Yup from "yup";

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    NON_CONFORMING = 'NON_CONFORMING',
    PERSONAL = 'PERSONAL',
    EUNUCH = 'EUNUCH',
    UNKNOWN = 'UNKNOWN',

}

export enum Bank {
    TBC = 'TBC',
    GEOBANK = 'GEOBANk'

}


export interface UsersInterface {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    gender?: Gender;
    birthDate?: Date;
}


export interface CreateEmployee {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    privateNumber: string;
    gender: string;
    birthDate: string
    position: string
    branch: string
}


export interface UserRegistrationInterface {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    gender: string;
    birthDate: string;
    password: string;
    confirmPassword: string;
}

export interface LegalUserInterface {
    llc: string,
    privateNumber: string,
    companyName: string,
    identificationNumber: string,
    address: string,
    postalCode: string,
    bank: string,
    bankAccount: string,
    website: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    birthDate: string,
    email: string,
    password: string,
    confirmPassword: string,

}