
export class User {
    name: string;
    lastName: string;
    phoneNumber: string;
    adress: string;
    age: number; //added for homework 6
    consentGiven: boolean | undefined;


    constructor(name:string, lastName: string, phoneNumber: string, adress: string, age:number, consentGiven: undefined) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.adress = adress
        this.age = age //added for homework 6
        this.consentGiven = consentGiven
    }
}