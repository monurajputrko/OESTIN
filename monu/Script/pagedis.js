
let amount = localStorage.getItem("price");
let dic = localStorage.getItem("Dis");

document.getElementById("price").textContent = "₹ " + amount;
document.getElementById("dicr").textContent = dic;
 
// Get the current date
let currentDate = new Date().toISOString().split("T")[0];

// Set the minimum date for the input field
let dateInput = document.getElementById("date1");
dateInput.min = currentDate;

function getRandomBoolean() {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Define the threshold for returning true (75% chance)
    const threshold = 0.5;

    // Check if the random number is below the threshold
    if (randomNum < threshold) {
        return true;
    } else {
        return false;
    }
}

// Call the function and store the result

// const result = getRandomBoolean();
const result = true;

console.log(result);

function CheckAvail() {
    let date = document.getElementById("date1").value;
    console.log(date);
    let date2 = document.getElementById("date2").value;
    console.log(date2);
    let rooms = document.getElementById("room").value;
    console.log(rooms);
    let person = document.getElementById("person").value;
    console.log(person);
    localStorage.setItem("rooms",rooms);
    localStorage.setItem("persons",person);
    localStorage.setItem("sdate",date);
    localStorage.setItem("edate",date2);
    if(date == "" || date2== "" || date == null || date2 == null){
        document.getElementById("poptext").innerText =
            "Please Select Dates!";
        const popupDiv = document.getElementById("popupDiv");
        popupDiv.style.display = "block";
        setTimeout(() => {
            popupDiv.style.display = "none";
        }, 2000);
    }else{
    if (result == true) {
        // alert("Available");
        const popupDiv = document.getElementById("popupDiv");
        popupDiv.style.display = "block";
        setTimeout(() => {
            popupDiv.style.display = "none";
        }, 2000);

        document.getElementById("booknow").style.display = "block";
    } else {
        document.getElementById("poptext").innerText =
            "Sorry This Room is Not Available";
        const popupDiv = document.getElementById("popupDiv");
        popupDiv.style.display = "block";
        setTimeout(() => {
            popupDiv.style.display = "none";
            window.location.href = "./rooms.html";
        }, 2000);
    }
}
}

function booknow() {
    window.location.href = "../../payment/payment.html";
}
