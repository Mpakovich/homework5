export function estoniaCode(): string {
    const prefix = "EST-"; //country
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-numbers of value
    return prefix + randomNumber; //country + numbers
}

export function latviaCode(): string {
    const prefix = "LVA-"; // country
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-numbers of value
    return prefix + randomNumber; //country + numbers
}

export function lithuaniaCode(): string {
    const prefix = "LTU-"; // country
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-numbers of value
    return prefix + randomNumber; //country + numbers
}