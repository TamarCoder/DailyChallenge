const inbox = [
    { from: 'alice@coffee.com', to: 'bob@code.com', subject: 'Urgent Meeting Required', body: 'We need to discuss the project milestones.' },
    { from: 'carol@tech.com', to: 'dan@developer.com', subject: 'System Update Report', body: 'Please fix this critical bug ASAP.' },
    { from: 'eve@company.com', to: 'frank@client.com', subject: 'Project Deadline Approaching', body: 'Please review the project timeline.' },
    { from: 'grace@management.com', to: 'coffee@project.com', subject: 'Quick Sync', body: 'We are out of supplies, please restock!' },
    { from: 'ivan@development.com', to: 'judy@bugs.com', subject: 'Code Review', body: 'Let’s ensure our code is clean and maintainable.' },
    { from: 'kyle@support.com', to: 'laura@customer.com', subject: 'Update on Support Ticket', body: 'Your issue will be resolved before the deadline.' },
    { from: 'mallory@company.com', to: 'neil@company.com', subject: 'Team Outing', body: 'Let’s all meet for coffee next week.' },
    { from: 'oscar@finance.com', to: 'deadlines@hr.com', subject: 'Budget Review', body: 'We need to adjust our financial projections.' },
    { from: 'quinn@sales.com', to: 'ron@marketing.com', subject: 'Marketing Campaign Adjustments', body: 'These changes need to be made urgently due to the upcoming deadline.' },
    { from: 'steve@client.com', to: 'trudy@support.com', subject: 'Bug in the Product', body: 'We found an issue in the latest version you sent.' },
    { from: 'misha@novatori.ge', to: 'elonmusk@yahoo.com', subject: 'she bato shena', body: 'ilon, dzmobas gapiceb rato gadamagde? ra vkna exla me? masesxe ra erti 100 lari ra gchirs ))))))' },
    { from: 'ursula@office.com', to: 'alan@sales.com', subject: 'More Coffee Needed', body: 'Could you please order more supplies?' },
    { from: 'walt@design.com', to: 'xander@strategy.com', subject: 'New Design Meeting', body: 'Let’s discuss over coffee tomorrow morning.' },
    { from: 'deadline@research.com', to: 'zach@analysis.com', subject: 'Findings on New Data', body: 'The results are intriguing and require further investigation.' },
    { from: 'admin@tech.com', to: 'helpdesk@operations.com', subject: 'New System Implementation', body: 'The new system has been deployed successfully.' },
    { from: 'brad@domain.com', to: 'clara@operations.com', subject: 'Operational Review', body: 'Please prepare all the documents for the review session.' },
    { from: 'bugs@finance.com', to: 'elmo@accounting.com', subject: 'Quarterly Financials', body: 'Our financial performance has been strong this quarter.' },
    { from: 'fiona@management.com', to: 'garry@planning.com', subject: 'Next Quarter Goals', body: 'We need to set clear objectives for the next quarter.' },
    { from: 'harvey@client.com', to: 'irene@support.com', subject: 'Query Regarding Order', body: 'Could you check the status of our last order?' },
    { from: 'jessica@development.com', to: 'kevin@software.com', subject: 'Development Process', body: 'Our development process needs to be more agile and responsive.' },
    { from: 'leo@hr.com', to: 'monica@hr.com', subject: 'HR Meeting', body: 'We have several new policies to discuss in our next meeting.' }
];

const blockedWords = ['coffee', 'bug', 'deadline'];
function markSpamEmails(emails, blockedWords) {
    //ციკლს ყველა იმეილისთვის
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];  // თითოეული მეილი
        // ყველა სტრინგს ვაქცევ ერთ სტრინგა  და  პატარა რეგისტრში გადაგჰვყავს
        const text = (`${email.from} ${email.to} ${email.subject} ${email.body}`).toLowerCase();
        let isSpam = false;  // დეფაულტათ არის ფოლსი
        // გადავურბენ  blockedWords-ში თითოეულ სიტყვას
        for (let j = 0; j < blockedWords.length; j++) {
            const word = blockedWords[j].toLowerCase();  //  ვინცობა ბლოკირებულ სიტყვებში  რომელიმე დაიწყოს მაღალი რეგსტრიტ
            //  თუ ტექტსში არსებული სიტყვა დაემთხვევა ვორდს მაშინ ვაბურებ თრუს და ვწყვეტ ძებნას
            if (text.includes(word)) {
                isSpam = true;
                break;
            }
        }
        // თუ სპამია, ვამატებ თითო ელემენტში;
        if (isSpam) {
            emails[i].spam = true;
        }
    }
    return emails;
}
const result = markSpamEmails(inbox, blockedWords);
console.log(result);