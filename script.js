let userFlavors = prompt(
"Enter Your Order",
"vanilla,strawberry,chocolate"
);


let flavorsArray = userFlavors.split(',');


    const order = {
        vanilla: 0,
        strawberry: 0,
        chocolate: 0,
    }
   
    for(let i = 0; i < flavorsArray.length; i++){
        if(flavorsArray[i] === "vanilla"){
            order.vanilla++;
        }   
        if(flavorsArray[i] === "strawberry"){
            order.strawberry++;
        }   
        if(flavorsArray[i] === "chocolate"){
            order.chocolate++;
        }   
}

console.table(order);