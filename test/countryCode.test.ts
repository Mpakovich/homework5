import { estoniaCode, latviaCode, lithuaniaCode } from "../src/countryCode";

describe("Country code generators", () => {
    test("estoniaCode should return a code starting with 'EST-' and a 4-digit number", () => {
        const code = estoniaCode();
        expect(code.startsWith("EST-")).toBe(true); //checking country prefix
        expect(code.length).toBe(8); //checking of length 8 ( country code: "EST-" + 4 random numbers
        expect(/EST-\d{4}/.test(code)).toBe(true); //checking country prefix and  random 4 digits.
    });

    test("latviaCode should return a code starting with 'LVA-' and a 4-digit number", () => {
        const code = latviaCode();
        expect(code.startsWith("LVA-")).toBe(true); //checking country prefix
        expect(code.length).toBe(8); //checking of length 8 ( country code: "LVA-" + 4 random numbers
        expect(/LVA-\d{4}/.test(code)).toBe(true); //checking country prefix and  random 4 digits.
    });

    test("lithuaniaCode should return a code starting with 'LTU-' and a 4-digit number", () => {
        const code = lithuaniaCode();
        expect(code.startsWith("LTU-")).toBe(true); //checking country prefix
        expect(code.length).toBe(8); //checking of length 8 ( country code: "LTU-" + 4 random numbers
        expect(/LTU-\d{4}/.test(code)).toBe(true); //checking country prefix and  random 4 digits.
    });
});