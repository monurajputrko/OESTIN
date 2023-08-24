
// searchLocation();
let inputTag = document.getElementById("search");
async function searchLocation(){
  //Getting the value again

  var search_value = inputTag.value;
 

  if(search_value.length < 1 || search_value == ""){
      return false;
  }


  let response = await fetch("https://drab-tan-sawfish-kit.cyclic.cloud/rooms");
  let data = await response.json();
  // console.log(data);
   
  //Writing Function for filter data based on search results

  let filterData = data.filter((el)=>{
      let regex = new RegExp(`^${search_value}`, "gi" );
      return el.city.match(regex);
  })

  console.log(filterData);
  Dis(filterData);
//  apprndData(filterData)
}

inputTag.addEventListener("keypress", async ()=>{
  debouncingFunction(fetchFunction,500); 
})


// function debounce()

let id;

//Creating Debouncing Function
function debouncingFunction(fetchFunction , delay){

// if(inputTag.value.length == 0){
//     // document.querySelector("#show-results-div").style.visibility='hidden'
// }

if(id){
clearTimeout(id);
}

id = setTimeout(()=>{
fetchFunction()

}, delay)

}

//Creating fetch Function
async function fetchFunction(){


searchLocation();

}




//Append Data Function 
function Dis(data){

document.querySelector("#show-results-div").innerHTML = "";

if(data.length >= 1){
//Map Data
data.map((el)=>{

document.querySelector("#show-results-div").style.visibility='visible'

//Creating Elements
let mainDiv = document.createElement("div");
mainDiv.setAttribute("id","mainDiv");

let imgDiv = document.createElement("div");
imgDiv.setAttribute("id","imgDiv");

let smainDiv = document.createElement("div");
smainDiv.setAttribute("id","smainDiv");

let priceDiv = document.createElement("div");
priceDiv.setAttribute("id","priceDiv");

let nameDiv = document.createElement("div");
nameDiv.setAttribute("id","nameDiv");

let addDiv = document.createElement("div");
addDiv.setAttribute("id","addDiv");

let mainimg = document.createElement("img");
mainimg.setAttribute("id","mainimg");

let span1 = document.createElement("span");
let span2 = document.createElement("span");
let span3 = document.createElement("h3");


mainimg.src=el.image;
span1.textContent=el.address;
span2.textContent= `  ₹`+el.rent;
span3.textContent=el.roomtype;

//Append data
imgDiv.append(mainimg);
addDiv.append(span1); 
priceDiv.append(span2);
nameDiv.append(span3);
smainDiv.append(nameDiv,addDiv,priceDiv);
mainDiv.append(imgDiv,smainDiv);
document.querySelector("#show-results-div").append(mainDiv);

mainDiv.addEventListener("click", ()=>{
  localStorage.setItem("Dis",el.dis);
localStorage.setItem("price",el.rent);
    window.location.href = "./monu/PageDis.html";
})

})

}   }
