// 
let books = [
{
    name: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    price: 200.65,
    origin: "UK"
},
{
    name: "Legend",
    author: "Marie Lu",
    price: 39.99,
    origin: "USA"
},
{
    name: "Prodigy",
    author: "Marie Lu",
    price: 19.99,
    origin: "USA"
},
{
    name: "Champion",
    author: "Marie Lu",
    price: 29.99,
    origin: "USA"
},
{
    name: "Rebel",
    author: "Marie Lu",
    price: 54.99,
    origin: "USA"
},
{
    name: "Warcross",
    author: "Marie Lu",
    price: 59.88,
    origin: "USA"
},
{
    name: "Wildcard",
    author: "Marie Lu",
    price: 39.99,
    origin: "USA"
},
{
    name: "Young Elites",
    author: "Marie Lu",
    price: 79.99,
    origin: "USA"
},
{
    name: "The Rose Society",
    author: "Marie Lu",
    price: 12.99,
    origin: "USA"
},
{
    name: "The Midnight Star",
    author: "Marie Lu",
    price: 43.99,
    origin: "USA"
},
{
    name: "Red Pyramid",
    author: "Rick Riordan",
    price: 100.78,
    origin: "USA"
},
{
    name: "The Handmaid's Tale",
    author:"Margaret Atwood",
    price: 150.40,
    origin: "Canada"
},
{
    name: "The Giver",
    author: "Lois Lowry",
    price: 540.98,
    origin: "USA"
},
{
    name: "Silence",
    author: "Shusaku Endo",
    price: 309.99,
    origin: "Japan"
},
{
    name: "Lord of The Flies",
    author: "William Golding",
    price: 299.99,
    origin: "UK"
},
{
    name: "The Book Thief",
    author: "Markus Zusak",
    price: 146.99,
    origin: "Austrailia"
},
{
    name: "Skyhunter",
    author: "Marie Lu",
    price: 100.99,
    origin: "USA"
},
{
    name: "Everything, Everything",
    author: "Nicola Yoon",
    price: 150.47,
    origin: "USA"
},
{
    name: "Homegoing",
    author: "Yaa Gyasi",
    price: 49.98,
    origin: "USA"
},
{
    name: "The Wall",
    author: "John Lanchaster",
    price: 102.09,
    origin: "UK"
}
]

function getDiscountedPrices(){
    books.forEach(function(book){
        let salesPrice = 0;
        salesPrice += book.price - book.price * getDiscount(book.origin);
        book.salesPrice = salesPrice;
        console.log(book.price);
        console.log('Book name: '+ book.name + ' Author: ' + book.author + ' Price: '+ book.price + ' Sales price: '+ Math.round(book.salesPrice));
    });
}

function getDiscount(origin){
    if(origin === "USA"){
         return 0.10;
    }
    else if(origin === "UK"){
        return 0.05;
    }
    else if(origin === "Canada"){
        return 0.12;
    }
    else if (origin){
        return 0.15;
    }
}
getDiscountedPrices();