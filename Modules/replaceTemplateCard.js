module.exports =(temp,product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output=output.replace(/{%IMAGE%}/g,product.image);
    output=output.replace(/{%QUANTITY%}/g,product.quantity);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%nutrients%}/g,product.nutrients);
    output=output.replace(/{%From%}/g,product.from);
    output=output.replace(/{%Description%}/g,product.description);
    output=output.replace(/{%ID%}/g,product.id);
    if(!product.organic) output=output.replace(/{%notorganic%}/g,'not-organic');
    return output;
    }
    