//to get OTP STARTED

let getOTP = document.getElementById("getOTPButton");

let verifyButton = document.createElement("button");
verifyButton.setAttribute("id", "verifyButton")
verifyButton.textContent = "Verify & Continue";
//to verify the details STARTED

verifyButton.addEventListener("click", function() {
    let enteredOTP = document.getElementById("otp").value;
    if(enteredOTP === "0000") {
        // alert("success");
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
    payNowbtn.setAttribute("id", "payNowbutton");
    payNowbtn.addEventListener("click", function() {
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

        payAtHotelDiv.append(text, subtext, bookNowbtn);
        paymentInfoDiv.append(payAtHotelDiv);
        
    })

    paymentTypesDiv.append(paymentTypesButtonsDiv, paymentInfoDiv);
    paymentTypesButtonsDiv.append(payNowbtn, payAtHotelbtn);
    securityInfoDiv.append(securityInfo);
    paymentDiv.append(paymentHeadingDiv, securityInfoDiv, paymentTypesDiv)
    document.getElementById("personalDetailsDivParent").append(paymentDiv);
}



function paymentGateway() {
  let checkout = 11000 * 100;
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
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
  };
  var rzp1 = new Razorpay(options);

  rzp1.open();
  e.preventDefault();
}