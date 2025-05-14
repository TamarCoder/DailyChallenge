//რომელიც არგუმენტად მიიღებს რიცხვს, მაგალითად 197-ს და 
// დააბრუნებს შემდეგ array-ს : [197, 971, 719]


//1.რა არის ჩემი  ფუნქციის მიზანი ?? -  ფუნქციამ უნდა იმუშავოს ისე რომ , როდესაც ციფრი შევიყვანთ 
            // მისი ყვეალა შეტრიალებული ვერსია წარმომიდგინოს;
// 2. რა არის ამ დავალებაში input ??  - რიცვხვი (number)
// 3. რა არის output ?? -  დაბრუნებული მასივის რომელიც შედგება გადაცემული რიცხვის შებრუნებულ ვარიანტებს.
// 4.   ამ დავალების edge case  : 1. თუ ჩაწოდებული რიცხვი მხოლოდ ერთნიშნა(3) ან თუ 0 იან შეიცავს რიცხვი ან უარყოფითი რიცხვია. 


function numberRotation(number) {
    // ეჯ ქეისი: თუ რიცხვი ერთნიშნა ან ნული
    if (number < 10 || number === 0) {
        return 'The number provided is invalid.';
    }
    let isString = number.toString(); // number  გადავიყვანე სტრინგში 
    let isArrayString = isString.split(''); // სტრინგის გადავაქციე მასივად
    let rotations = [number]; // ახალი მასივის შესახად , number - შემაქვს იმიტომ რომ პირველი ციფრი არ უნდა შეიცვალოს.

    for (let i = 0; i < isArrayString.length - 1; i++) {
       //isArrayString.push(isArrayString.shift());
       //პირველი ელემენტი  გადამაქვს  ბოლო პოზიციაზე, ხოლო დანარჩენი ელემენტები დარჩება თავის ადგილას 
        let rotated = isArrayString.slice(1).concat(isArrayString[0]);  
        let isJoin = rotated.join(''); // მიხებულ დანაწევრებულ ციფრებს ვაერთებ ჯოინით
        let isNumber = parseInt(isJoin); // ვაქცევთ რიცხვად
        rotations.push(isNumber); // როტაციები შევინახავთ
        isArrayString = rotated; // ბოლო ელემენტამდე
    }
    return rotations; // საბოლოო მასივი
}
const number = 197; // input
console.log(numberRotation(number)); 