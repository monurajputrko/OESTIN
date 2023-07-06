
let page=1;


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

    Span.textContent ="$" + el.rent;

    Span2.textContent = " Per Night";

    p.textContent = el.smallDis;

    a2.textContent = "DETAILS";

    // h3.addEventListener("click", function () {
    //     nav();
    // });
    RoomDetail.addEventListener("click", function () {
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
      `https://weak-bandanna-fox.cyclic.app/rooms?_page=${page}&_limit=9`
    );
    let data = await response.json();
    Data(data);
    console.log(data);
    // Process the received data here
  } catch (error) {
    console.log(error);
  }
}