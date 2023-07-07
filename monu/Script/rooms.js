
let page=1;
let arr = [];
let filt = document.getElementById("mthan");
let filt1 = document.getElementById("lthan");
// filt.addEventListener("change", function() {
 
function mthan(){

  event.preventDefault();
  let value = filt.value;
  let res = arr.filter((ele)=>{
    return ele.rent>value;
      })
  console.log("Val= "+value)
  // Load2();
  Data(res);
}

function lthan(){

  event.preventDefault();
  let value1 = filt1.value;
  let res = arr.filter((ele)=>{
    return ele.rent<value1;
      })
  console.log("Val= "+value1)
  // Load2();
  Data(res);
}
  
// if(value==="Filter"){
//   Data(arr); 
// }else if(value==="More Than ₹ 100"){
//   let res = arr.filter((ele)=>{
//       return ele.rent>100;
//   })
//  
//   }else if(value==="More Than ₹ 1000"){
//     let res = arr.filter((ele)=>{
//         return ele.rent>1000;
//     })
//     Data(res);
//     }else if(value==="Less Than ₹ 500"){
//       let res = arr.filter((ele)=>{
//           return ele.rent<500;
//       })
//       Data(res);
//       }else if(value==="Less Than ₹ 1000"){
//         let res = arr.filter((ele)=>{
//             return ele.rent<1000;
//         })
//         Data(res);
//         }
// });


  // var selectedOption = filt.options[filt.selectedIndex].value;
  // console.log(selectedOption);
  // if (selectedOption === "Low to High") {
  //   lth();
  //   console.log("hii")
  // }else if(selectedOption==="High to Low"){
  //   htl();
  // }else if(selectedOption==="A to Z"){
  //   atz();
  // }else if(selectedOption==="Z to A"){
  //   zta();
  // }





let sortOp = document.getElementById("sort");

sortOp.addEventListener("change", function() {
  var selectedOption1 = sortOp.options[sortOp.selectedIndex].value;
  if (selectedOption1 === "Low to High") {
    lth();
    console.log("hii")
  }else if(selectedOption1==="High to Low"){
    htl();
  }else if(selectedOption1==="A to Z"){
    atz();
  }else if(selectedOption1==="Z to A"){
    zta();
  }
});

// if(selected==="Low to High"){
//   lth();
//   console.log("hii")
// }


async function lth(){
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms?_sort=rent&_order=asc`
    );
    let data = await response.json();
    Data(data);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}

async function htl(){
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms?_sort=rent&_order=desc`
    );
    let data = await response.json();
    Data(data);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}

async function zta(){
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms?_sort=roomtype&_order=desc`
    );
    let data = await response.json();
    Data(data);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}

async function atz(){
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms?_sort=roomtype&_order=asc`
    );
    let data = await response.json();
    Data(data);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}







function nav(){
  window.location.href = "./PageDis.html";
}

async function fun1(){
let li1 = document.getElementById("li1")
page=1;
try {
  let response = await fetch(
    `https://weak-bandanna-fox.cyclic.app/rooms?_page=1&_limit=9`
  );
  let data = await response.json();
  Data(data);
  console.log(data);
  // Process the received data here
} catch (error) {
  console.log(error);
}
}

async function fun2(){
let li2 = document.getElementById("li2")
page=2;
try {
  let response = await fetch(
    `https://weak-bandanna-fox.cyclic.app/rooms?_page=2&_limit=9`
  );
  let data = await response.json();
  Data(data);
  console.log(data);
  // Process the received data here
} catch (error) {
  console.log(error);
}
}

async function fun3(){
let li3 = document.getElementById("li3")
page=3;
try {
  let response = await fetch(
    `https://weak-bandanna-fox.cyclic.app/rooms?_page=3&_limit=9`
  );
  let data = await response.json();
  Data(data);
  console.log(data);
  // Process the received data here
} catch (error) {
  console.log(error);
}
}



function Data(data) {
    
  let main = document.querySelector("#mainM");
  main.innerHTML = "";
  data.forEach((el) => {
    let mainDiv1 = document.createElement("div");
    mainDiv1.classList.add("col-lg-4", "col-sm-6", "col-12");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "single-room");
    let imgm = document.createElement("img");
    imgm.setAttribute("class", "fit-image");
    let Room = document.createElement("div");
    Room.classList.add("room-hover", "text-center");
    // Room.setAttribute("class", "room-hover");
    // Room.setAttribute("class","text-center");
    let RoomHover = document.createElement("div");
    RoomHover.setAttribute("class", "hover-text");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    let RoomAmount = document.createElement("div");
    RoomAmount.setAttribute("class", "p-amount");
    let Span = document.createElement("span");
    let Span2 = document.createElement("span");
    Span2.setAttribute("class", "count");
    let p = document.createElement("p");
    let RoomDetail = document.createElement("div");
    RoomDetail.setAttribute("class", "room-btn");
    let a2 = document.createElement("a");
    a2.setAttribute("class", "default-btn");

    imgm.src = el.image;

    a.textContent = el.roomtype;

    Span.textContent ="₹ " + el.rent;

    Span2.textContent = " Per Night";

    p.textContent = el.smallDis;

    a2.textContent = "DETAILS";

    // h3.addEventListener("click", function () {
    //     nav();
    // });
    RoomDetail.addEventListener("click", function () {
      localStorage.setItem("PayLocation",el.address);
    localStorage.setItem("Dis",el.dis);
    localStorage.setItem("price",el.rent);
      nav();
    });

    RoomAmount.append(Span, Span2);
    RoomDetail.append(a2);
    h3.append(a);
    RoomHover.append(h3, RoomAmount, p, RoomDetail);
    Room.append(RoomHover);
    mainDiv.append(imgm, Room);
    mainDiv1.append(mainDiv);
    main.append(mainDiv1)
  });
}

Load();
async function Load() {
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms?_page=${page}&_limit=18`
    );
    arr = await response.json();
    
    Data(arr);
    console.log(arr);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}

async function Load2() {
  try {
    let response = await fetch(
      `https://weak-bandanna-fox.cyclic.app/rooms`
    );
    arr = await response.json();
    
    Data(arr);
    console.log(arr);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}