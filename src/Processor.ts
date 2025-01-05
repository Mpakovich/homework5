import { User } from "./user";

export class Processor {
    static giveConsent(user: User): void {
        user.consentGiven = true;
    }

    static verifyConsent(user: User): boolean {
        return user.consentGiven === true;
    }

    //Added for homework 6
    static checkConsentEligibility(user: User): boolean { //checks if the user can give consent
        if (user.age >= 18) {
            return true;
        } else {
            return false;
        }
    }

    static revokeConsent(user: User): void {
        user.consentGiven = false;
    }
}