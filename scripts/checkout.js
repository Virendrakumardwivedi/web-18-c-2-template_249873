function getdata(e){
    e.preventDefault();

    let name=form.name.value;
    let num=form.number.value;
    let add = form.address.value;

    let p1= new(name,num,add)
    Promise(0).then(function(response){
        setTimeout(function(){
            alert("Your order is accepted ")
        },response)
        return Promise(3000)
    })
    .then(function(response){
        setTimeout(function(){
            alert("Your order is being Prepared")
        },response)
        return Promise(8000)
    })
    .then(function(response){
        setTimeout(function(){
            alert("Your order is being packed  ")
        },response)
        return Promise(10000)
    })
    .then(function(response){
        setTimeout(function(){
            alert("Your order is out for delivery ")
        },response)
        return Promise(12000)
    })
}
function Promise(interval){
    return new Promise(function(resolve,reject){
        resolve(interval)
    })
}