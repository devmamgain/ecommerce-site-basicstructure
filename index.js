import { Productsdb } from "./DB/Productsdb.js";
let main = document.getElementById("products")
for (let prod of Productsdb)
{
    const container = document.createElement("div")
    container.classList.add("card","card-vertical","d-flex","direction-column","relative","shadow")
    const containerimg = document.createElement("div")
    containerimg.classList.add("card-image-container")
    const img = document.createElement("img")
    img.classList.add("card-image")
    img.setAttribute("src", prod.img)
    img.setAttribute("alt", prod.name)
    const collection = document.createElement("div")
    collection.classList.add("card-details")
    const title = document.createElement("div")
    title.classList.add("card-title")
    title.innerText=prod.collection
    const description = document.createElement("div")
    description.classList.add("card-description")
    const para = document.createElement("p")
    para.classList.add("card-des")
    const para1 = document.createElement("p")
    para1.classList.add("card-price")
    para.innerText = prod.name
    para1.innerText = prod.price
    const addto = document.createElement("div")
    addto.classList.add("cta-btn")
    const addtocart = document.createElement("button")
    addtocart.classList.add("button","btn-primary","btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap","cursor","btn-margin")
    addtocart.innerText="Add to Cart"
    addto.appendChild(addtocart)
    description.appendChild(para)
    description.appendChild(para1)
    containerimg.appendChild(img)
    collection.appendChild(title)
    collection.appendChild(description)
    collection.appendChild(addtocart)
    container.appendChild(containerimg)
    container.appendChild(collection)

    main.appendChild(container)


}