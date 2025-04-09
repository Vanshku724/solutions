let arr=[
    {product:"Televison" , price:1990 },
    { product :"phone", price:700},
    { product :"Laptop", price:1900},
    { product :"Refrigerator", price:500},
];
let filterproducts= arr.filter((products) =>{
    return (products.price>1000);
});
console.log(filterproducts);



