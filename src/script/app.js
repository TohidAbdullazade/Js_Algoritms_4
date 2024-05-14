// Task 1. Daxil olan ədədin kök altı dəyərin hesablayan funksiya yazın əgər daxil olan ədəddən tam kök çıxmırsa bunu consola mesaj olaraq yazdırın.
const sqrt = (n) => {
    for (let i = 0; i <= n / 2; i++) {
        if (i * i == n) {
            return i;
        }
    };
    return `${n} has no root`;
};

let result = sqrt(25);
console.log(result);

// Task 2. Arqument olaraq string yazı qəbul edən funksiya yazın və həmən funksiya gələn string 
// dəyərin içində neçə samit və neçə sait olduğunu hesablasın 
// note: switch case ile yazın
// note: chatGPT-siz yazmışam tam özüm :):)

const findConsonantAndVowel = (str) => {
    let vowel = [];
    let consonant = [];
    let space = " "
    let i = 0
    if(!isNaN(str)){
        console.log(`can't type numbers and spaces... only characters`);
        return;
    }
    for (i; i <= str.length - 1; i++) {
        switch (str[i].toLowerCase()) {
            case "a":
                vowel.push(str[i]);
                break;

            case "e":
                vowel.push(str[i]);
                break;
            case "o":
                vowel.push(str[i]);
                break;

            case "i":
                vowel.push(str[i]);
                break;

            case "u":
                vowel.push(str[i]);
                break;

            default: if (str[i] !== vowel[i] && str[i] !== space) {
                consonant.push(str[i]);

            };
                break;
        }

    }
    console.log(`word: ${str} vowels: ${vowel} vowels length: ${vowel.length} `)
    console.log(`word: ${str} consonants: ${consonant}  consonant length: ${consonant.length} `)

};
findConsonantAndVowel("ToHid");

// Task 3. Arryin elementlərini string-ə çevirib birləşdirən bir funksiya yazın. 
// ex:  // output : "1test8any text"
let array = [1, "test", 8, "any text"]
const arrayToString = (arr) => {
    let string = "";
    let space = "";
    // let comma = ",";
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] !== space) {
            string += arr[i];
        };

    }
    console.log(string);

};
arrayToString(array)