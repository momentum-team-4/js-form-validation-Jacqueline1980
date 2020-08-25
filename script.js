

const form = document.querySelector("#parking-form");

form.addEventListener('submit', function(event){
    event.preventDefault()
    const days = document.querySelector("#days").value
    const tripCost = document.querySelector("#total");
    const cost = (days * 5);
    tripCost.innerText = "$" + cost ;

    let pricing = []
    const startDateString = document.querySelector("#start-date").value
    const startDate = new Date (startDateString)
    startDate
    
    for (const i = 0; i < days; i++) {
       
    }

})
    
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let weekends = ["Sunday", "Saturday"]
let pricing = []
for (let day of daysOfWeek){
    if (day === daysOfWeek[1,2,3,4,5]){
        tripCost = (days * 5) 
    } else if (day === daysOfWeek[0,6]){
        tripCost = (days *7)
    } return

    //This seemed workable after getting the date to help us determine days of week, which I haven't worked out yet,
    //but you would also want to add both 'tripCost' values, in which case they cannot be the same constant name?
    
}
//Find the date; 
//Determine the day of the week for the date; 
//determine cost for that day, then each day following based on $5 or $7 price;
//How many weekdays = x    How many weekend days = y
//Calculate the cost of the amount of days [($5 * x) + ($7 * y)] = TotalCost




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

const ccNumber = document.querySelector("#credit-card").value
const ccValue = document.querySelector("#credit-card")
    ccValue.addEventListener (function)
    if (ccValue.length !== 16) {
        ccValue.setCustomValidity("Credit card must be 16 digits")
    }
    else 
        ccValue.setCustomValidity("")
    }