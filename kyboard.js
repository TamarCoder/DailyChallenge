// თქვენი დავალებაა შექმნათ ფუნქცია:


// პირველი: qwertyuiop
// მეორე: asdfghjkl
// მესამე: zxcvbnm


const word = 'dad';

function keyboardRow(word) {

    const firstLine  = "qwertyuiop";
    const secondLine = "asdfghjkl";
    const thirdLine  = "zxcvbnm";

    const isLowerWord = word.toLowerCase();
    let isTrueRow = '';

    const firstChar = isLowerWord[0];

    if (firstLine.includes(firstChar)) {
        isTrueRow = firstLine;
    } else if (secondLine.includes(firstChar)) {
        isTrueRow = secondLine;
    } else if (thirdLine.includes(firstChar)) {
        isTrueRow = thirdLine;
    } else {
        return false;  
    }

    for (let i = 1; i < isLowerWord.length; i++) {
        if (!isTrueRow.includes(isLowerWord[i])) {
            return false; // თუ სხვა row-დან არის ასო
        }
    }return true;  
}

console.log(keyboardRow(word));


