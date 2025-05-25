// მოცემული გვაქვს მომხმარებლების სია და რამდენიმე ფილტრი. საჭიროა 
    // მხოლოდ იმ ჩანაწერების amoReba , რომლებიც აკმაყოფილებენ ფილტრის პირობებს; 

	// 1.  გვაქვს filters ობიექტი, რომელიც განსაზღვრავს მომხმარებლის მოთხოვნებს:
	// 	   ......search — ტექსტი, რომლითაც უნდა ამოვიღო  მომხმარებლის რომელიმე მონაცემში (მაგ. სახელი, გვარი, ელ-ფოსტა და ა.შ.).
	//     ......active — ბულოვანი მნიშვნელობა, რომელიც აჩვენებს, მხოლოდ აქტიური მომხმარებლები გვსურს თუ არა.

	// 2.   search ველი  :
	//      ......ჩანაწერის შერჩევა უნდა მოხდეს, იმის მიხედვით თუ მომხამრებლის რომელ ველშია ეს ინფო : მაგ. name, email და ა.შ.)
	//      ...... ეჯ ქეისში უნდა გავითვალისწინო რომ შეიძლება ჩამაწოდონ მაღალი რეგისტრის სიმბოლოთი დაწყებული წინადადება

	// 3.	Action  -  ველი
	//      ......მხოლოდ ისეთი მომხამრებლები უნდა ავარჩიო ვისაც  active მნიშვნელობა ისეთი, როგორიც არის ფილტრებში მითითებული.
	//              თუ  filters.active არის true, მაშინ უნდა დარჩნენ მხოლოდ active: true მომხმარებლები

	// 4.   საბოლოო სია უნდა შეიცავდეს მხოლოდ იმ მომხმარებლებს რომლებიც :
    // ............... შეიცავენ search ტექსტს მონაცემების რომელიმე ველში და
	// ............... აქვს შესაბამისი active სტატუსი.
 const users = [
    { firstName: 'Giorgi', lastName: 'Gelashvili', phone: '555000000', age: 30, email: 'contact@novatori.com', job: 'Novatori', active: false },
    { firstName: 'Anna', lastName: 'Vardosanidze', phone: '593000111', age: 35, email: 'anna@vardosanidze.ge', job: 'Google', active: true },
    { firstName: 'Nika', lastName: 'Tatishvili', phone: '577000222', age: 28, email: 'hello@outlook.com', job: 'Microsoft', active: false },
    { firstName: 'Mariam', lastName: 'Bregvadze', phone: '593000333', age: 32, email: 'info@social.com', job: 'Facebook', active: true },
    { firstName: 'Davit', lastName: 'Guramishvili', phone: '555000444', age: 45, email: 'davit@live.com', job: 'Self-employed', active: false },
    { firstName: 'Sophie', lastName: 'Dolidze', phone: '577000555', age: 26, email: 'admin@startuplife.com', job: 'Startup', active: true },
    { firstName: 'Irakli', lastName: 'Kobakhidze', phone: '555000666', age: 38, email: 'irakli@kobakhidze.ge', job: 'Amazon', active: false },
    { firstName: 'Luka', lastName: 'Nanobashvili', phone: '593000777', age: 29, email: 'support@techgear.com', job: 'Novatori', active: true },
    { firstName: 'Elena', lastName: 'Tsiklauri', phone: '555000888', age: 31, email: 'elena@tsiklauri.com', job: 'Adobe', active: true },
    { firstName: 'Giorgi', lastName: 'Chanturia', phone: '593000999', age: 40, email: 'user@webmail.com', job: 'Twitter', active: true },
    { firstName: 'Tamar', lastName: 'Mikeladze', phone: '555001000', age: 33, email: 'contact@linkedinprofile.com', job: 'LinkedIn', active: true },
    { firstName: 'Zura', lastName: 'Javakhishvili', phone: '593001011', age: 27, email: 'zura@javakhishvili.com', job: 'Startup', active: true },
    { firstName: 'Maka', lastName: 'Asatiani', phone: '577001022', age: 29, email: 'service@photoapp.com', job: 'Instagram', active: false },
    { firstName: 'Levan', lastName: 'Gvasalia', phone: '555001033', age: 37, email: 'levan@spaceexplorer.com', job: 'SpaceX', active: true },
    { firstName: 'Salome', lastName: 'Tsulukidze', phone: '593001044', age: 42, email: 'research@nasaspace.com', job: 'NASA', active: false },
    { firstName: 'Irina', lastName: 'Shervashidze', phone: '577001055', age: 25, email: 'broadcast@videoplatform.com', job: 'YouTube', active: true },
    { firstName: 'Otari', lastName: 'Kandelaki', phone: '555001066', age: 34, email: 'otari@teslaupdates.com', job: 'Tesla', active: true },
    { firstName: 'Shorena', lastName: 'Tabatadze', phone: '593001077', age: 30, email: 'shorena@tabatadze.ge', job: 'Apple', active: false },
    { firstName: 'Gela', lastName: 'Beridze', phone: '577001088', age: 36, email: 'client@software-solutions.com', job: 'Microsoft', active: true },
    { firstName: 'Nino', lastName: 'Kochlamazashvili', phone: '555001099', age: 41, email: 'office@ibmtech.com', job: 'IBM', active: true }
];


const filters = {
  active: true,

};


const filtered = users.filter(user => {
   let userActive = true;
   if (typeof filters.active === 'boolean') {
      userActive = user.active === filters.active;
   }

   const isSearch = filters.search?.toLowerCase().trim() || "";

   const userSearch =
       user.firstName?.toLowerCase().includes(isSearch) ||
       user.lastName?.toLowerCase().includes(isSearch) ||
       user.email?.toLowerCase().includes(isSearch) ||
       user.job?.toLowerCase().includes(isSearch);

   return userActive && userSearch;
});

console.log(filtered);