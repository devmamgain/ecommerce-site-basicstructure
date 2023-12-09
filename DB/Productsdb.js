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
        price:"Rs. "+2000,
        offer:30,
        collection:"premium collection",
        img:"https://uilight.netlify.app/assets/shoes.jpg"
     
     },
    
    {
        id:uuid(), 
        name:"Sneakers1",
        price:"Rs. "+20002,
        offer:40,
        collection:"collection",
        img:"https://uilight.netlify.app/assets/shoes.jpg"

    }
       
]