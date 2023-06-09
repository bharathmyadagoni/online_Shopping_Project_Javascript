let count = 0
let btnEl = document.getElementById('button1')
let btnE2 = document.getElementById('button2')
let btnE3 = document.getElementById('button3')
let ulEl = document.getElementById('cart');
let removeE = document.getElementById("remove")
let btnel = document.createElement("button")
let btne2 = document.createElement("button")
let btne3 = document.createElement("button")
let liEl = document.createElement('li')
let liE2 = document.createElement('li')
let liE3 = document.createElement('li')
let imgEl = document.createElement("img")
let imgEl1 = document.createElement("img")
let imgE2 = document.createElement("img")
let removeEll = document.getElementById("cartRemove")

let cartButton = document.createElement("button")
let cartButton1 = document.createElement("button")
let cartButton2 = document.createElement("button")

let value = 0
let value1 = 0
let value2 = 0

document.getElementById("button1").onclick = function () {
    removeEll.appendChild(ulEl)
    count += 1
    document.getElementById("click").innerHTML = count
    // let liEl=document.createElement('li')
    liEl.innerText = btnEl.value
    ulEl.appendChild(liEl)
    // let imgEl =document.createElement("img")
    imgEl.setAttribute("src", '5e90a856c7c8f9000434dd97.png')
    imgEl.classList.add("cart-image")
    ulEl.appendChild(imgEl)
    // let btnel = document.createElement("button")
    btnel.setAttribute("id", "remove")
    btnel.textContent = "Remove Cart"
    ulEl.appendChild(btnel)

    // cartButton.setAttribute("id","cou")
    value +=1 
    cartButton.textContent = value
    ulEl.appendChild(cartButton)

}
btnel.onclick = function () {
    if (value == 0){
    ulEl.removeChild(liEl)
    ulEl.removeChild(imgEl)
    ulEl.removeChild(btnel)
    ulEl.removeChild(cartButton)
    } else {
    console.log("ulEl")
    count -= 1
    document.getElementById("click").innerHTML = count
    
    value -=1 
    cartButton.textContent = value
    }  
}
document.getElementById("button2").onclick = function () {
    count += 1
    document.getElementById("click").innerHTML = count
    liE2.innerText = btnE2.value
    ulEl.appendChild(liE2)
    imgEl1.setAttribute("src", "png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png")
    imgEl1.classList.add("cart-image")
    ulEl.appendChild(imgEl1)
    btne2.setAttribute("id", "remove1")
    btne2.textContent = "Remove Cart"
    ulEl.appendChild(btne2)

    value1 +=1 
    cartButton1.textContent = value1
    ulEl.appendChild(cartButton1)


}
// btne2.onclick = function () {
//     ulEl.removeChild(liE2)
//     ulEl.removeChild(imgEl1)
//     ulEl.removeChild(btne2)
//     console.log("ulEl")
//     count -= 1
//     document.getElementById("click").innerHTML = count
// }
btne2.onclick = function () {
    if (value1 == 0){
    ulEl.removeChild(liE2)
    ulEl.removeChild(imgEl1)
    ulEl.removeChild(btne2)
    ulEl.removeChild(cartButton1)
    } else {
    count -= 1
    document.getElementById("click").innerHTML = count
    
    value1 -=1 
    cartButton.textContent = value
    }  
}
document.getElementById("button3").onclick = function () {
    count += 1
    document.getElementById("click").innerHTML = count
    liE3.innerText = btnE3.value
    ulEl.appendChild(liE3)
    imgE2.setAttribute("src", "Long-Sleeve-Shirt-PNG.png")
    imgE2.classList.add("cart-image")
    ulEl.appendChild(imgE2)
    btne3.setAttribute("id", "remove1")
    btne3.textContent = "Remove Cart"
    ulEl.appendChild(btne3)

    value2 +=1 
    cartButton2.textContent = value2
    ulEl.appendChild(cartButton2)
}
// btne3.onclick = function () {
//     ulEl.removeChild(liE3)
//     ulEl.removeChild(imgE2)
//     ulEl.removeChild(btne3)
//     console.log("ulEl")
//     count -= 1
//     document.getElementById("click").innerHTML = count
// }
btne3.onclick = function () {
    if (value2 == 0){
    ulEl.removeChild(liE3)
    ulEl.removeChild(imgE2)
    ulEl.removeChild(btne3)
    ulEl.removeChild(cartButton2)
    } else {
    count -= 1
    document.getElementById("click").innerHTML = count
    
    value2 -=1 
    cartButton2.textContent = value2
    }  
}

document.getElementById("rest").onclick = function () {
    count = 0
    document.getElementById("click").innerHTML = count
    value =0 
    cartButton.textContent = value
    value1 =0
    cartButton1.textContent = value1
    value2 =0 
    cartButton2.textContent = value2


    removeEll.removeChild(ulEl)
}
document.getElementById("card-button").onclick= function(){
   /*  removeEll.style.display="inline" */
let prodPage = document.getElementById("products-page")
let cartRemove = document.getElementById("cartRemove")
console.log(prodPage)
console.log(prodPage,'prodPage')
if(!prodPage.style.display||prodPage.style.display === "block")
{
    prodPage.style.display = "none"
    cartRemove.style.display ="block"

}else{
    prodPage.style.display = "block"
    cartRemove.style.display ="none"
}
 /*  oggleButton.addEventListener('clcik', function() {
    if (removeEll.style.display === 'none'){
       removeEll.style.display = 'block';
   } else {
       removeEll.style.display = "none"
    }  */
  
}
// let toggleButton = document.getElementById("card-button")

// toggleButton.addEventListener('clcik', function() {
//     if (removeEll.style.display === 'none'){
//         removeEll.style.display = 'block';
//     } else {
//         removeEll.style.display = "none"
//     }
// })
