//  თასქის მიზანი  : 
      // 1. დამიბრუნოს შესაბამისი გვერდი და  შესაბამისი  რაოდენობის ინფორმაცია.
// რა არის ამ დავალების    inputi -  users -  მომხარებლების მასივის. 
                                     //page -   რომელ გვერძე იმყოფება მომხმარებელი. 
                                    // limit - თითო გერძე  ინფორმაციის ლიმიტი. 
// რა არის ამ დავალების output -  ფუნქციამ უნდა დამიბრუნოს   ის გვერდი რომელზეც ვიმყოფები , 
//                ამ გვერზე არსებული ინფორმაცია იმ ლიმიტის მიხედვით რომელიც მითითებულია ცვლაებდში
//მოცემული გვაქვს მომხმარებლების სია ცვლადში:
const users = [
    {id: 1, firstName: 'Terry', lastName: 'Medhurst', age: 50, email: 'atuny0@sohu.com', phone: '+63 791 675 8914', username: 'atuny0'},
    {id: 2, firstName: 'Sheldon', lastName: 'Quigley', age: 28, email: 'hbingley1@plala.or.jp', phone: '+7 813 117 7139', username: 'hbingley1'},
    {id: 3, firstName: 'Terrill', lastName: 'Hills', age: 38, email: 'rshawe2@51.la', phone: '+63 739 292 7942', username: 'rshawe2'},
    {id: 4, firstName: 'Miles', lastName: 'Cummerata', age: 49, email: 'yraigatt3@nature.com', phone: '+86 461 145 4186', username: 'yraigatt3'},
    {id: 5, firstName: 'Mavis', lastName: 'Schultz', age: 38, email: 'kmeus4@upenn.edu', phone: '+372 285 771 1911', username: 'kmeus4'},
    {id: 6, firstName: 'Alison', lastName: 'Reichert', age: 21, email: 'jtreleven5@nhs.uk', phone: '+351 527 735 3642', username: 'jtreleven5'},
    {id: 7, firstName: 'Oleta', lastName: 'Abbott', age: 31, email: 'dpettegre6@columbia.edu', phone: '+62 640 802 7111', username: 'dpettegre6'},
    {id: 8, firstName: 'Ewell', lastName: 'Mueller', age: 29, email: 'ggude7@chron.com', phone: '+86 946 297 2275', username: 'ggude7'},
    {id: 9, firstName: 'Demetrius', lastName: 'Corkery', age: 22, email: 'nloiterton8@aol.com', phone: '+86 356 590 9727', username: 'nloiterton8'},
    {id: 10, firstName: 'Eleanora', lastName: 'Price', age: 37, email: 'umc'}
]

const page = 1; // მომხმარებელი იმყოფება  გვერდზე
const limit = 2; // თითოეულ გვერდზე სურს რომ გამოჩნდეს 10 ჩანაწერი

function paginate(users, page, limit) {
    const start = (page - 1) * limit;
    const end =  start + limit;

    const newUsers = [];

    for (let i = start; i < end && i < users.length; i ++) {
        newUsers.push(users[i]);
        
    }
    return newUsers; 
}

 console.log(paginate(users, page , limit));
 
 
 
 