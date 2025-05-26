
// მოცემული მაქვს მომხმარებლის კალათა, ჩემი დავალება გადვურბინო ამ კალათას და დავაჯამო თუ რამდენი უნდა გადიხადოს მომხმარებელმა;
// ეჯ ქეისები :  1. არ უნდა გაიყიდოს იმაზე მეტი პროდუქცია ვიდრე მაღაზიაში არის.

const cart = [
    { quantity: 3, product: { title: 'Apple Watch', price: 1500, salePrice: 1300,  stock: 10} }, //   ყიდულობს 3 ცალს , 3 * 1300;  მაღაზიაში 10 ცალია
    { quantity: 1, product: { title: 'Samsung Galaxy S25', price: 3000, stock: 1}},  // ყიდულობს 1 ცალს , ფასი 3000 ლარია. მაღაზიაში ზუსტად ერთიცალია;
    { quantity: 3, product: { title: 'Apple Airpods 2', price: 400, stock: 4}},       // ყიდულობს  3 ცალს, 3 * 400; მარაზიაში სულ 4 ცალია;
    { quantity: 3, product: { title: 'Apple Airpods 3', price: 600, salePrice: 550, stock: 2}}, // უნდა სამიცალის ყიდვა,  2 * 550;   მაგრამ მაღაზიაში მხოლოდ 2 ,
    { quantity: 10, product:{ title: 'Wireless Charger', price: 30, salePrice: 20, stock: 0}}, // ვერ იყიდის რადგან მაღაზიაში არ არის;
    { quantity: 10, product:{ title: 'Type-C USB Cable', price: 15, stock: 3}},   // უნდა 3 ცალის ყიდვა ,  3 * 15; რადგან მაღაზიაში მხოლოდ 3 ცალია;
];



    let cartTotal = 0;
    for (let i = 0; i < cart.length; i ++){
        let isQuanity = cart[i].quantity;
        let isProduct = cart[i].product;
        let isStock = isProduct.stock;
        let priceToUse;

        if (isStock <= 0) {
           continue
        }
        priceToUse = isProduct.salePrice ? isProduct.salePrice : isProduct.price;

        let quantityToSell = isQuanity > isStock ? isStock : isQuanity;
        cartTotal += quantityToSell * priceToUse;

    }
console.log(cartTotal)

// isCustomCart()