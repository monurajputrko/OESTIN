//to get OTP STARTED

let getOTP = document.getElementById("getOTPButton");

let verifyButton = document.createElement("button");
verifyButton.setAttribute("id", "verifyButton")
verifyButton.textContent = "Verify & Continue";
//to verify the details STARTED

verifyButton.addEventListener("click", function() {
    let enteredOTP = document.getElementById("otp").value;
    if(enteredOTP === "0000") {
        alert("success");
        changeUiAfterContinue();
        payment();
    }
    else {
        alert("Wrong OTP. Use 0000");
    }
})
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
    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    let emailDiv = document.createElement("div");
    emailDiv.setAttribute("id", "emailDiv");
    
    let mobileDiv = document.createElement("div");
    mobileDiv.setAttribute("id", "mobileDiv");
    nameDiv.append(name);
    emailDiv.append(email);
    mobileDiv.append(mobile);
    let showDetailsDiv = document.createElement("div");
    showDetailsDiv.setAttribute("id", "showDetailsDiv");
    let modifyButtonDiv = document.createElement("div");
    modifyButtonDiv.setAttribute("id", "modifyButtonDiv");
    let modifyButton = document.createElement("button");
    modifyButton.setAttribute("id", "modifyButton");
    modifyButton.textContent = "Modify";
    modifyButtonDiv.append(modifyButton);
    // document.getElementById("formDiv").append(modifyButton);
    showDetailsDiv.append(nameDiv, emailDiv, mobileDiv, modifyButtonDiv);
    document.getElementById("formDiv").innerHTML = "";
    document.getElementById("formDiv").append(showDetailsDiv);
}

getOTP.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let emailValidity = validateEmailInput(email);
    let mobileValidity = validateMobileInput(mobile);
console.log(emailValidity, mobileValidity);
    if(emailValidity == true && mobileValidity==true) {
        alert("OTP is 0000");
        validateEmailInput(email);
        validateMobileInput(mobile);
        document.getElementById("verifyButtonDiv").innerHTML = null;
        document.getElementById("verifyButtonDiv").append(verifyButton);
        validateOTP();
    }
    console.log(name + " " + email + " " + mobile);
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

    // let paymentHeading = document.createElement("h3");
    // paymentHeading.setAttribute("id", "paymentHeading");
    // paymentHeading.textContent = "Choose payment method to pay";

    let securityInfoDiv = document.createElement("div");
    securityInfoDiv.setAttribute("id", "securityInfoDiv");

    let securityInfo = document.createElement("p");
    securityInfo.textContent = "100% safe and secure payments";

    let paymentTypesDiv = document.createElement("div");
    paymentTypesDiv.setAttribute("id", "paymentTypesDiv");

    let paymentTypesButtonsDiv = document.createElement("div");
    paymentTypesButtonsDiv.setAttribute("id", "paymentTypesButtonsDiv");

    let paymentInfoDiv = document.createElement("div");
    paymentInfoDiv.setAttribute("id", "paymentInfobtn");

    let payNowbtn = document.createElement("button");
    payNowbtn.textContent = "Pay Now";
    payNowbtn.addEventListener("click", paymentGateway());
    
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

        payAtHotelDiv.append(text, subtext, bookNowbtn);
        paymentInfoDiv.append(payAtHotelDiv);
    })


    // paymentHeadingDiv.appendChild(paymentHeading);
    paymentTypesDiv.append(paymentTypesButtonsDiv, paymentInfoDiv);
    paymentTypesButtonsDiv.append(payNowbtn, payAtHotelbtn);
    securityInfoDiv.append(securityInfo);
    paymentDiv.append(paymentHeadingDiv, securityInfoDiv, paymentTypesDiv)
    document.getElementById("personalDetailsDivParent").append(paymentDiv);
}

//to accept payment ENDED

function paymentGateway() {

    // document.getElementById("subtext").innerHTML = null;
}