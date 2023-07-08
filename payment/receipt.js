let customerName = localStorage.getItem("bookedName");
let endingDate = localStorage.getItem("edate");
let persons = localStorage.getItem("persons");
let bookedEmail = localStorage.getItem("bookedEmail");
let roomPrice = localStorage.getItem("roomPrice");
let sdate = localStorage.getItem("sdate");
let rooms = localStorage.getItem("rooms");
let bookedMobile = localStorage.getItem("bookedMobile");
let specialDiscount = localStorage.getItem("specialDiscount");
let finalPrice = localStorage.getItem("finalPrice");

document.getElementById("customerName").append(customerName);
document.getElementById("customerMobile").append(bookedMobile);
document.getElementById("customerEmail").append(bookedEmail);
document.getElementById("Checkin").append(sdate);
document.getElementById("Checkout").append(endingDate);
document.getElementById("Guest").append(persons + " Persons");
document.getElementById("mrp").append(roomPrice);
document.getElementById("discount").append(specialDiscount);
document.getElementById("lastprice").append(finalPrice);
document.getElementById("noRoom").append(rooms);
document.getElementById("receiptdate").textContent= sdate;

document.getElementById("goHome").addEventListener("click", function(){
    window.location.href = "../index.html";
});


document.getElementById("print").addEventListener("click", function(){
    window.print();
});