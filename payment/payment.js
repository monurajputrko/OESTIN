//to get OTP STARTED
let getOTP = document.getElementById("getOTPButton");

let verifyButton = document.createElement("button");
verifyButton.setAttribute("id", "verifyButton")
verifyButton.textContent = "Verify & Continue";
//to verify the details STARTED

let otp;

let startDate = localStorage.getItem("sdate");
let endDate = localStorage.getItem("edate");
let hotelLocation = localStorage.getItem("PayLocation");
let noPersons = localStorage.getItem("persons");
let noRooms = localStorage.getItem("rooms");
let roomPrice = localStorage.getItem("price");
let finalPrice = noRooms * roomPrice * 0.90;
let specialDiscount = noRooms * roomPrice * 0.10;
localStorage.setItem("roomPrice", roomPrice);
localStorage.setItem("specialDiscount", specialDiscount);
localStorage.setItem("finalPrice", finalPrice);
console.log(finalPrice);
document.getElementById("hotelRoomAddress").textContent = "";
document.getElementById("hotelRoomAddress").append(hotelLocation);
document.getElementById("startDay").textContent = "";
document.getElementById("startDay").append(startDate);
document.getElementById("endDay").textContent = "";
document.getElementById("endDay").append(endDate);
document.getElementById("noRoom").textContent = "";
document.getElementById("noRoom").append(noRooms);
document.getElementById("noPeople").textContent = "";
document.getElementById("noPeople").append(noPersons);
document.getElementById("roomPrice").textContent = "";
document.getElementById("roomPrice").append(roomPrice);
document.getElementById("finalPrice").textContent = "";
document.getElementById("finalPrice").append(finalPrice);
document.getElementById("specialDiscount").textContent = "";
document.getElementById("specialDiscount").append(specialDiscount);

//to verify the details ENDED

function changeUiAfterContinue() {
    document.getElementById("dummyPara").innerText = null;
    document.getElementById("headingDiv").innerText = "Your Details";
    document.getElementById("headingDiv").style.fontWeight = "bold";
    // let name = document.getElementById("name");
    // let email = document.getElementById("email");
    // let mobile = document.getElementById("mobile");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let nameIconSpan = document.createElement("span");
    nameIconSpan.setAttribute("id", "nameIconSpan");
    let emailIconSpan = document.createElement("span");
    emailIconSpan.setAttribute("id", "emailIconSpan");
    let mobileIconSpan = document.createElement("span");
    mobileIconSpan.setAttribute("id", "mobileIconSpan");
    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    nameDiv.appendChild(nameIconSpan);
    let emailDiv = document.createElement("div");
    emailDiv.setAttribute("id", "emailDiv");
    emailDiv.appendChild(emailIconSpan);
    
    let mobileDiv = document.createElement("div");
    mobileDiv.appendChild(mobileIconSpan);
    mobileDiv.setAttribute("id", "mobileDiv");
    nameDiv.append(name);
    emailDiv.append(email);
    mobileDiv.append(mobile);
    let showDetailsDiv = document.createElement("div");
    showDetailsDiv.setAttribute("id", "showDetailsDiv");
    showDetailsDiv.className = "showDetailsDiv";
    // let modifyButtonDiv = document.createElement("div");
    // modifyButtonDiv.setAttribute("id", "modifyButtonDiv");
    // let modifyButton = document.createElement("button");
    // modifyButton.setAttribute("id", "modifyButton");
    // modifyButton.textContent = "Modify";
    // modifyButtonDiv.append(modifyButton);
    // document.getElementById("formDiv").append(modifyButton);
    showDetailsDiv.append(nameDiv, emailDiv, mobileDiv);
    // showDetailsDiv.append(nameDiv, emailDiv, mobileDiv, modifyButtonDiv);
    document.getElementById("formDiv").innerHTML = "";
    document.getElementById("formDiv").append(showDetailsDiv);
}

getOTP.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    localStorage.setItem("bookedName", name);
    localStorage.setItem("bookedEmail", email);
    localStorage.setItem("bookedMobile", mobile);

    let emailValidity = validateEmailInput(email);
    let mobileValidity = validateMobileInput(mobile);
console.log(emailValidity, mobileValidity);
    if(emailValidity == true && mobileValidity==true) {
        otp = generateRandomOTP();
        alert(`OTP is ` + otp);
        // validateEmailInput(email);
        // validateMobileInput(mobile);
        document.getElementById("verifyButtonDiv").innerHTML = null;
        document.getElementById("verifyButtonDiv").append(verifyButton);
        validateOTP();
    }
    console.log(name + " " + email + " " + mobile);
})

function generateRandomOTP() {
  randomOTP = Math.floor(Math.random() * 9000 + 1000);
  console.log(randomOTP);
  return randomOTP;
}

verifyButton.addEventListener("click", function() {
  let enteredOTP = document.getElementById("otp").value;
  if(enteredOTP == otp) {
      // alert("success");
      changeUiAfterContinue();
      payment();
  }
  else {
    // alert(enteredOTP + "  " + otp)
      alert("Wrong OTP. Use "+ otp);
  }
})

function validateEmailInput(email) {
    let emails = document.getElementById("email");
    
    if (emails.checkValidity()) {
      return true;
    } else {
      alert('Your Email Address is invalid!');
      return false;
    }
  }

function validateMobileInput(mobile) {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobiles = document.getElementById("mobile");
    
    if (mobiles.checkValidity() && mobiles.value.length === 10) {
      return true;
    } else {
      alert('Your Mobile Number is invalid!');
      return false;
    }
  }

function validateOTP() {
    let enterOTP = document.createElement("input");
    let otpLabel = document.createElement("label");
    let lineBreak = document.createElement("br");
    otpLabel.textContent = "Enter OTP";
    otpLabel.style.fontWeight = "bold";
    enterOTP.type = "number";
    enterOTP.setAttribute("id", "otp");
    document.getElementById("otpDiv").innerText = null;
    document.getElementById("otpDiv").append(otpLabel, lineBreak, enterOTP);
}

//to get OTP FINISHED

//to accept paymetn STARTED

function payment() {
  
    
    let paymentDiv = document.createElement("div");
    paymentDiv.setAttribute("id", "paymentDiv");

    let paymentHeadingDiv = document.createElement("div");
    paymentHeadingDiv.setAttribute("id", "paymentHeadingDiv");
    paymentHeadingDiv.textContent = "Choose payment method to pay";
    paymentHeadingDiv.style.fontWeight = "bold";


    let securityInfoDiv = document.createElement("div");
    securityInfoDiv.setAttribute("id", "securityInfoDiv");

    let securityInfo = document.createElement("p");
    securityInfo.textContent = "100% safe and secure payments";

    let paymentTypesDiv = document.createElement("div");
    paymentTypesDiv.setAttribute("id", "paymentTypesDiv");

    let paymentTypesButtonsDiv = document.createElement("div");
    paymentTypesButtonsDiv.setAttribute("id", "paymentTypesButtonsDiv");

    let paymentInfoDiv = document.createElement("div");
    paymentInfoDiv.setAttribute("id", "paymentInfobtnDiv");

    let payNowbtn = document.createElement("button");
    payNowbtn.textContent = "Pay Now";
    payNowbtn.setAttribute("id", "payNowbutton");
    payNowbtn.addEventListener("click", function() {
      document.getElementById("paymentInfobtnDiv").innerHTML = "";
      paymentGateway();
    });
    
    
    
    let payAtHotelDiv = document.createElement("div");
    payAtHotelDiv.setAttribute("id", "payAtHotelDiv");

    let payAtHotelbtn = document.createElement("button");
    payAtHotelbtn.textContent = "Pay At Hotel";
    payAtHotelbtn.addEventListener("click", function() {
        payAtHotelDiv.innerHTML = null;
        let text = document.createElement("h5");
        text.textContent = "No Payment Needed Today";

        let subtext = document.createElement("p");
        subtext.textContent = "We will confirm your stay without any charge. Pay directly at the hotel during your stay.";
        
        let bookNowbtn = document.createElement("button");
        bookNowbtn.textContent = "Book Now";
        bookNowbtn.setAttribute("id", "bookNowbtn");
        let booknowdiv = document.createElement("div");
        booknowdiv.setAttribute("id", "booknowdiv");
        booknowdiv.append(bookNowbtn)
        payAtHotelDiv.append(text, subtext, booknowdiv);
        paymentInfoDiv.append(payAtHotelDiv);
        
    })

    paymentTypesDiv.append(paymentTypesButtonsDiv, paymentInfoDiv);
    paymentTypesButtonsDiv.append(payNowbtn, payAtHotelbtn);
    securityInfoDiv.append(securityInfo);
    paymentDiv.append(paymentHeadingDiv, securityInfoDiv, paymentTypesDiv)
    document.getElementById("personalDetailsDivParent").append(paymentDiv);
}

function paymentGateway() {
  let checkout = localStorage.getItem("finalPrice") * 100;
  console.log(checkout);
  var options = {
    key: "rzp_test_UM3NWIQ3rEh0JA", // Enter the Key ID generated from the Dashboard
    amount: checkout, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Oestin Hotels",
    description: "Test Payment",
    image:
      "https://blog.playo.co/wp-content/uploads/2018/04/Playo-dp-gradient4-1.png",
    // "order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
    // "account_id": "acc_Ef7ArAsdU5t0XL",
    handler: function (response) {
      console.log(response);
      window.location.href = "./receipt.html";

      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
  };
  var rzp1 = new Razorpay(options);

  rzp1.open();
  event.preventDefault();
}