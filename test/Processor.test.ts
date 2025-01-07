//Lesson 6
import {User} from "../src/user";
import {Processor} from "../src/Processor";

describe("Processor test", () => {
    let user1: User;
    let userUnder18: User; //added for homework 6
    let userOver18: User; //added for homework 6

    beforeEach(() => {
        user1 = new User("John", "Smith", "345345453", "Devil area", 25, undefined);
        userUnder18 = new User("Nikola", "Malvinski", "15464569", "Parnu", 17, undefined); //added for homework 6
        userOver18 = new User("Johny", "Sins", "666661", "Tartu", 18, undefined); //added for homework 6
    });

    test("TC1:Default state undefined", () => { //corrected test case name for better understanding
        expect(user1.consentGiven).toBeUndefined();
    });

    test("TC2: Consent can be given", () => { //corrected test case name for better understanding
        Processor.giveConsent(user1);
        expect(user1.consentGiven).toBe(true);
    });

    test("TC3: Consent can be verified", () => { //corrected test case name for better understanding
        Processor.giveConsent(user1);
        expect(Processor.verifyConsent(user1)).toBeTruthy();
    });

    test.skip("TC4: Consent should not be verified if not given", () => { //corrected test case name for better understanding & added .skip
        expect(Processor.verifyConsent(user1)).toBeFalsy();
    });

    //Homework 6

    test("TC5: User under 18 (checkConsentEligibility returns false)", () => {
        expect(Processor.checkConsentEligibility(userUnder18)).toBe(false);
    });

    test("TC6: User 18 or older (checkConsentEligibility returns true)", () => {
        expect(Processor.checkConsentEligibility(userOver18)).toBe(true);
    });

    test("TC7: Revoke consent", () => {
        Processor.giveConsent(userOver18);
        expect(userOver18.consentGiven).toBe(true);

        Processor.revokeConsent(userOver18);
        expect(userOver18.consentGiven).toBe(false);
    });
});