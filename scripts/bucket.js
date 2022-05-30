// On clicking remove button the item should be removed from DOM as well as localstorage.

let items = JSON.parse(localStorage.getItem("coffee"))
console.log(items)
let item= JSON.parse(localStorage.getItem("items"))
function sum(data1){
    let total =0
    for(let i=0; i<data1.length;i++){
        total=total+(data1[i].price)
    }
    document.querySelector("#total_amount").innerText=total
}

function printitem(data1){
    const box1= document.querySelector("#bucket")
    data1.forEach((el ,index)=>{

        const div = document.createElement("div")

        const img =document.createElement("img")
        img.src=el.image

        const name = document.createElement("h4")
        name.innerText= el.title
        
        const price = document.createElement("h5")
        price.innerText=el.price

        const btnrem = document.createElement("button")
        btnrem.innerText= "REMOVE"
        btnrem.setAttribute("id", "remove_coffee")
        btnrem.addEventListener("click", function(){
            items.splice(index,1)
            localStorage.setItem("items",JSON.stringify(items))
            localStorage.getItem("coffee",JSON.stringify(data1))
            window.location.reload();
        });
        


        div.append(img,name,price,btnrem)
        box1.append(div)
    })
}
printitem(items)
sum(items)