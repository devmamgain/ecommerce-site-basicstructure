function uuid  (){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(param) {
     let number =  Math.random()*16 | 0;
     let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8)
     return randomNumber.toString(16)
 })}

export const Productsdb = [
   
     {
        id:uuid(),
        name:"Sneakers",
        price:2000,
        offer:30,
        collection:"premium collection",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/t/9/p/l-xyswtsrt02-xyxx-original-imagjpydex2tgdp5.jpeg?q=70"
     
     },
    
    {
        id:uuid(), 
        name:"Sneakers1",
        price:20002,
        offer:40,
        collection:"collection",
        img:"https://rukminim2.flixcart.com/image/832/832/kwtkxow0/sweatshirt/o/z/k/xl-hlss000512-highlander-original-imag9epsg63yaspv.jpeg?q=70"

    }
       
]