

const form = document.querySelector("#parking-form");

form.addEventListener('submit', function(event){
    event.preventDefault()
    const days = document.querySelector("#days").value
    const tripCost = document.querySelector("#total");
    const cost = (days * 5);
    tripCost.innerText = "$" + cost ;
})
    

//The requirements have changed for calculating cost. The new cost is $5 per weekday, 
//and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating 
//the total cost, as will [the JavaScript Date object]
//(https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/).



function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}