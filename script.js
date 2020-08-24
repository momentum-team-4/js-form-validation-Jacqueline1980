

const form = document.querySelector("#parking-form")

form.addEventListener('submit', function(event){
    event.preventDefault()

    const days = document.querySelector("#days").value

    const cost = (days * 5)
    cost.innerHTML = cost

    console.log(cost);
    })