

const form = document.querySelector("#parking-form")

form.addEventListener('submit', function(event){
    event.preventDefault()
    const total = document.querySelector("#total").value
    const days = document.querySelector("#days").value

    const priceList = document.querySelector("#priceList")
    const priceTotal = total * days 
    priceList.innerHTML += priceTotal
})

console.log(priceTotal);