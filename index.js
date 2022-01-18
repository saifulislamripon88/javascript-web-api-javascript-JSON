const myElement = document.getElementById("demo1");
function getLocataion(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        myElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position){
    myElement.innerHTML = "Latitude: "+position.coords.latitude+
    "<br>longitude: " +position.coords.longitude;

}



//

function myFunction(){
    const inputObj = document.getElementById("id101");
    if (!inputObj.checkValidity()) {
        document.getElementById("demo2").innerHTML = inputObj.validationMessage;
        
    }else{
        document.getElementById("demo2").innerHTML = "Input is okay!"
    }
}

//

function myFunctions(){
    let text;
    if (document.getElementById("id102").validity.rangeOverflow) {
        text="value too large" 
    } else{
        text="input is okay"
    }
    document.getElementById("demo3").innerHTML = text;
}


//

function myUderFlow(){
    let texts;
    if (document.getElementById("id103").validity.rangeUnderflow) {
        texts = "value too small";
        
    } else {
        texts = "input is okay!"
        
    }
    document.getElementById("demo4").innerHTML = texts;

}




//web storage API

localStorage.setItem("name","saiful islam");
document.getElementById("demo5").innerHTML = localStorage.getItem("name");


//


localStorage.setItem("name","jamal uddin");
document.getElementById("demo6").innerHTML = localStorage.getItem("name");



//session storage


sessionStorage.setItem("name","shirin akter");
document.getElementById("demo7").innerHTML = sessionStorage.getItem("name");





// Web Workers API start here
 
/**let w;
function startWorker(){
    if (typeof(w) == "undefined") {
        w = new Worker("demo_workers.js"); 
    }
    w.onmessage = function(event){
        document.getElementById("result").innerHTML = event.data;
    };
}

function stopWorker(){
    w.terminate();
    w = undefined;
}

 */






//javascript JSON start here


const myObj = {name:"saiful", roll:7018, year:2022, subj:"economics"};
console.log(myObj.name+" "+ myObj.subj+ " "+ myObj.year);
document.getElementById("demo8").innerHTML = myObj.name+" "+ myObj.subj+" "+myObj.roll+" "+ myObj.year;


//another way to access object

const myObjs = {name:"kamal", fname:"uddin",roll:7018};
document.getElementById("demo9").innerHTML = myObjs["name"];
myObjs.name = "jamal";
console.log(myObjs.name+" "+ myObj.roll+" "+ myObjs.fname);



//

const myob = {fname:"shirin", lname:"akter",ffname:"akters"}
console.log(myob);
console.log(myob.fname+" "+myob.lname);

myob["fname"] = "selina";
console.log(myob.fname+" "+ myob.lname);




//JSON files example


{employees:[
    {"fname":"saiful", "lname":"islam"},
    {"fname":"shirin", "lname":"akter"},
    {"fname":"jannatul", "lname":"ferdaus"},
    {"fname":"mamotaj", "lname":"begum"},
    {"fname":"siraj", "lname":"mia"}
]}






// XML Files example
//  <employees>

// <employee>
//     <firstName>kamal</firstName> <lastName>uddin</lastName>
// </employee>

// <employee>
//     <firstName>jamal</firstName> <lastName>hossain</lastName>
// </employee>

// <employee>
//     <firstName>omar</firstName> <lastName>Faruk</lastName>
// </employee> 

// <employee>
//     <firstName>mamunul</firstName> <lastName>haque</lastName>
// </employee>

// <employee> 
//     <firstName>Hasan</firstName> <lastName>jamil</lastName>
// </employee>

// <employee>
//     <firstName>Habibullah</firstName> <lastName>Mahmud kasemi</lastName>
// </employee>

// </employees>





// Json parse

// object and JSON

const text = '{"name":"saiful", "age":30, "subject":"Biology"}'
const obj = JSON.parse(text);
console.log(obj.name+" "+ obj.subject +" "+obj.age)

//

//Array and JSON

const text1 = '["shirin","Akter","Swety","Akter","Rojina","Akter"]'
const Arrays = JSON.parse(text1);
console.log(Arrays[0]+" "+ Arrays[1]+" "+Arrays[2]+" " +Arrays[4]+" "+Arrays[5])
Arrays[0] = "Mamataj";
console.log(Arrays[0])



// Parsing Dates


const textt = '{"name":"Saiful islam","birth":"03-02-2001", "city":"Dhaka"}'
const myObjc = JSON.parse(textt);
myObjc.birthday = new Date(myObjc.birth);
document.getElementById("demo10").innerHTML = myObjc.name+", " +myObjc.birthday;



//JSON stringify

const objesc = {name:"mamunul",lname:"haque","age":48, nationality:"Bangladeshi"};
const myStringify = JSON.stringify(objesc);
console.log(myStringify)






//Stringify a JavaScript Array

const myArray = ["habibullah","mahmud","kasemi","mamunul","haque"]
const arrayStringify = JSON.stringify(myArray);
console.log(arrayStringify);






// Store and retrieve data from local storage.
//store data
const myObj1 = {name:"salahuddin",location:"chaattagram",village:"Noakhali"};
const mymyJSONj1 = JSON.stringify(myObj1);
localStorage.setItem("testJSON",mymyJSONj1);


// Retrieving data:
let testCs = localStorage.getItem("testJSON");
let testObj = JSON.parse(testCs);
console.log(testObj.name+" "+testObj.location+" "+testObj.village)





//
// JSON.stringify() converts date objects into strings.

const dates = {name:"khurshid",fname:"alam",lname:"kashemi",Today:new Date()};
const datess = JSON.stringify(dates)
console.log(datess)


//
// Creating an Object Parsing JSON

const myjson = '{"name":"messi","fname":"de paul","lname":"Lo Celso"}';
const myjsons = JSON.parse(myjson);
console.log(myjsons.name +", "+ myjsons.lname+", "+myjsons.fname);


//



// const myJSON = '{"names":"kallu", "fnames":"sallu", "lNames":"lallu"}'
// const myjsc = JSON.parse(myJSON);

// let textss ="";

// for(const xx in myjsc ){
//     textss += xx +" ,";
// }

// document.getElementById("demo11").innerHTML = textss;



//Looping JavaScript Object Values


const myJSON = '{"names":"kallu", "fnames":"sallu", "lNames":"lallu"}'
const myjsc = JSON.parse(myJSON);

let textss ="";

for(const xx in myjsc ){
    textss += myjsc[xx] +" ,";
}

document.getElementById("demo11").innerHTML = textss;




//
// javascript arrays

const myArr = ["kalam","jamal","kashem","abul","siddique","malaun"];
document.getElementById("demo12").innerHTML = myArr;
// document.getElementById("demo12").innerHTML = myArr[0]+" "+myArr[2];



// JSON array

const myJArray = '["nazmul","Fazu","javed","sujon","masud","kakon"]';
const myJarrays = JSON.parse(myJArray);
document.getElementById("demo13").innerHTML = myJArray;
document.getElementById("demo14").innerHTML = myJarrays;







//Arrays in object

const jsonMy= '{"name":"saiful", "age":40, "city":"Dhaka","village":"Lakshmipur", "car":["prado","lamborghini","texus"]}'
console.log(jsonMy);
const jsonmys = JSON.parse(jsonMy);
console.log(jsonmys)
console.log(jsonmys.name+" "+jsonmys.village+" "+jsonmys.car);
console.log(jsonmys.car[1]+" "+jsonmys.car[0]+" "+jsonmys.car[2]);







//
/**const jsons = '{"names":"Umme", "names2":"salma", "name2":"labiba", "cars":["beauty","nature","pink"]}'
const jsonss = JSON.parse(jsons);
console.log(jsonss)
let yy = "";

for(let mm in jsonss.cars){
    namesp += jsonss.cars[mm]+", ";
}
document.getElementById("demo16").innerHTML = yy;
console.log(yy)

*/

//

//for loop apply 

const jsonsArea = '{"names":"Umme", "names2":"salma", "name3":"labiba", "cars":["beauty","nature","pink"]}'
const jsonssArea = JSON.parse(jsonsArea);
console.log(jsonssArea)

let aa = "";
for (let i = 0; i < jsonssArea.cars.length; i++) {
    aa += jsonssArea.cars[i] + ", "+"<br>";
  }
  
document.getElementById("demo16").innerHTML = aa;




// json server 

// const myoBJ = {name:"saiful", age:30, from:"Bangladesh"};
// const myoBJS = JSON.stringify(myoBJ);
// console.log(myoBJ);

// window.location = "demo_json.php?x" + myoBJS;










































