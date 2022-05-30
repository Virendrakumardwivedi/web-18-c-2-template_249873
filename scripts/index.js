// Add the coffee to local storage with key "coffee"
let items=JSON.parse(localStorage.getItem("coffee"))||[]

let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

let container =document.getElementById("menu")

fetch(url)
.then(function(res){
  return  res.json();
})
.then(function(res){
   // console.log(res)
   appendData(res.menu.data)
})
.catch(function(err){
    console.log(err)
})



function appendData(data){
    console.log(data)
    data.forEach(function(el){
       // console.log(el)
        var box = document.createElement("div")

        var img =document.createElement("img")
        img.src=el.image

        var name = document.createElement("h4")
        name.innerText= el.title
        
        var price = document.createElement("h5")
        price.innerText=el.price

        var btn = document.createElement("button")
        btn.innerText= "Add to Buket"
        btn.addEventListener("click", function(){
         addTocart(el)
         noOFItemsincart(items)
        });

        box.append(img,name,price,btn)
        container.append(box)
    })
}
function addTocart(el){
    function Item(image,name, price){
        (this.image=image),
        (this.name=name),
        (this.price=price)
    }
    let item = new Item(el.image, el.name, el.price)
    items.push(item)
    localStorage.setItem("coffee",JSON.stringify(items))
}
function noOFItemsincart(items){
    let item_count=document.querySelector("#coffee_count")
   item_count.innerText=items.length
   console.log(items)
}
noOFItemsincart(items)