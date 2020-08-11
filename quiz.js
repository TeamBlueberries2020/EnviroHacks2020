
var questionAnswers = new Array(); /*DEFAULT VALUES*/
var numPeople = 0;
var haveLawn = "";
var lawnSize = 0;
var haveCar = "";
var whatFood = new Array();
var gallonsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0];
var totalGallons = 0;
var household = 0;

var showerString = "";
var bathingString = "";
var toiletString = "";
var dishesString = "";
var laundryString = "";
var lawnString = "";
var gasolineString = "";
var carWashString="";
var electricityString = "";
var shoppingString = "";
var foodString = "";

function lowerHigherWater(){
  if(totalGallons>(2220*household)){
		//MAKE TEXT APPEAR TO REDUCE SPENIDNG
    document.getElementById("announcement").style.backgroundColor = "red";
		document.getElementById("resultAnnouncement").innerHTML = "Try to decrease your water footprint";
  }else{
    //MAKE TEXT APPEAR TO SHOW YOU ARE ON TRACK
		document.getElementById("resultAnnouncement").innerHTML = "Your household's water usage is below average! Keep up your conservation habits!";
    document.getElementById("announcement").style.backgroundColor = "aquamarine";
  }
}

function addTips(){
//  shower, bath, toilet, machine dishes, hand dishes, machine laundry, hand laundry, lawn, car gasoline, car wash, electricity, shop, food
  

   showerString = (gallonsArray[0] > 5 * household) ? "The average shower time is 5 minutes. Try limiting the time you spend in the shower. \n  Also, switching to a newer shower head will also help you save water.": "";
   bathingString = (Math.round(gallonsArray[1]) > 50/7*household) ? "The average water used in a bath is 35 to 50 gallons. Showers use way less water than baths, so consider showering, or don't fill your bathtub to the max.": "";
   toiletString = (Math.round(gallonsArray[2]) > 28 * household) ? "The average person uses the toilet 7 to 8 times in a 24 hour period. Also, if your toilet is made before 1980, your toilet is using 5 gallons of water per flush, whereas modern toilets use only 1.6 gallons of water per flush.": "";
   dishesString = (Math.round(gallonsArray[3] + gallonsArray[4]) > 1) ? "The average person uses 6 gallons per cycle for every cycle with a dishwasher, and 8 gallons per cycle per cycle for handwashing dishes. Consider switching to a energy-star rated dishwasher as it will save you on average 2 gallons of water every cycle. Also, only run the dishwasher when it is full.": "";
   laundryString = (Math.round(gallonsArray[5] + gallonsArray[6]) > 10) ? "The average washing machine uses 40 gallons of water per load. To save water while washing clothes, always put full loads into your washing machine, and switching to a newer energy-star rated washing machine will save you lots of water and money in the long run.": "";
   lawnString = (Math.round(gallonsArray[7]) > 2) ? "Lots of water is used to maintain your lawn. Sprinklers use up lots of water, and if you water your lawn with a hose, that takes up even more water. You can save water by installing more efficient sprinklers and to turn off your sprinklers when it is raining often.": "";
   gasolineString = (gallonsArray[8] > 200) ? "Even though driving your car does not account into your personal water usage nor go on your utility bill, the production of gasoline takes lots of water, so much that every mile you drive, the gasoline you used to drive that mile of distance took 3/4 gallons of water to make! That is a lot of water used every day when you factor in driving to work or school every day! ": "";
   carWashString = (Math.round(gallonsArray[9]) > 1) ? "Believe it or not, but at-home car washes uses the most water, falling at more than 100 gallons of water per 10 minute at home car wash. Professional car washes will actually save you water with their high-tech machinery that is focused on washing more of the car with less water. If you must wash your car at home, remember to attach a good hose head to use less water.": "";
   electricityString = (Math.round(gallonsArray[10]) > 300 * household) ? "If you get your electricity from your local electricity utility, there is lots of water involved in the production proccess. A good alternative to save on both your electicity and water bill would be to install solar panels to get your own electricity. Even though the cost upfront may be a bit expensive, it will pay off in your utility bill savings!": "";
   shoppingString = (gallonsArray[11] > (583 * household)) ? "Lots of water is dealt with in the background when you go shopping. There are a lot of factors that use water, like the transportation of your goods and for the manufacturers to produce your goods. (for example, it takes over 1,230 gallons of water to make a single pound of cotton!) If you are starting to feel self-conscious about your water usage while shopping, recycling and reusing your old goods helps to save water. ": "";
   foodString = (gallonsArray[12] > (1000 * household)) ? "As tasty as meat is, meat uses a ton of water because you need water for both the animals and their food. Try cutting back on meat in your diet by going a day without meat and/or eating meat alternatives.": ""; 

}


function showerUsage(){
  console.log("ShowerString: "+showerString);

	document.getElementById("showerWater").innerHTML = "Your household uses " + (Math.round(gallonsArray[0])).toString().bold()+ " gallons for showering. " + showerString;
}
function bathUsage(){
	document.getElementById("bathWater").innerHTML = "Your household uses " + (Math.round(gallonsArray[1])).toString().bold() + " gallons for bathing. " + bathingString;
}
function toiletUsage(){
	document.getElementById("toiletWater").innerHTML = "Your household uses " + (Math.round(gallonsArray[2])).toString().bold() + " gallons for using the toilet. " + toiletString;
}
function dishesUsage(){
	document.getElementById("dishWater").innerHTML = "Your household uses " + Math.round(gallonsArray[3] + gallonsArray[4]).toString().bold() + " gallons for washing dishes. " + dishesString;
}
function clothesUsage(){
	document.getElementById("clothesWater").innerHTML = "Your household uses " + Math.round(gallonsArray[5]+gallonsArray[6]).toString().bold() + " gallons for washing clothes. " + laundryString;
}
function lawnUsage(){
	document.getElementById("lawnWater").innerHTML = "Your household uses " + Math.round(gallonsArray[7]).toString().bold() + " gallons for maintaining your lawn. " + lawnString;
}
function gasolineUsage(){
	document.getElementById("gasolineWater").innerHTML = "Your household uses " + Math.round(gallonsArray[8]).toString().bold() + " gallons indirectly for making your car's gasoline. " + gasolineString;
}
function carWashUsage(){
	document.getElementById("carWashWater").innerHTML = "Your household uses " + Math.round(gallonsArray[9]).toString().bold() + " gallons for car washes. " + carWashString;
}
function electricityUsage(){
	document.getElementById("electricityWater").innerHTML = "Your household uses " + Math.round(gallonsArray[10]).toString().bold() + " gallons for electricity. " + electricityString;
}
function shoppingUsage(){
	document.getElementById("shoppingWater").innerHTML = "Your household uses " + Math.round(gallonsArray[11]).toString().bold()+ " gallons for shopping. " + shoppingString;
}
function foodUsage(){
	document.getElementById("foodWater").innerHTML = "Your household uses " + Math.round(gallonsArray[12]).toString().bold() + " gallons for making the food you eat. " + foodString;
}

function lawnRemove(){
  questionAnswers[10] = "";
}

function carRemove(){
  questionAnswers[12] = 0;
  questionAnswers[13] = "";
  questionAnswers[14] = "";
}

function buttonSelected(val,id,id2,id3,id4,indexOf){
  let myElement = document.getElementById(id.toString());
  let myElement2 = document.getElementById(id2.toString());
  let myElement3 = document.getElementById(id3.toString());
  let myElement4 = document.getElementById(id4.toString());   

  if(questionAnswers[indexOf]==(myElement2.value)){
    myElement2.classList.remove("selectButton");
    myElement.classList.add("selectButton");
    console.log("2");
  } else if(questionAnswers[indexOf]==(myElement3.value)){
    myElement3.classList.remove("selectButton");
    myElement.classList.add("selectButton");
    console.log("3");
  } else if(questionAnswers[indexOf]==(myElement4.value)){
    myElement4.classList.remove("selectButton");
    myElement.classList.add("selectButton");
    console.log("4");
  } else{
    myElement.classList.add("selectButton");
    console.log("passed");
    console.log(questionAnswers[indexOf]);
    console.log(myElement2.value);
    console.log(myElement3.value);
    console.log(myElement4.value);
  }
  
}

function updateText() {
    document.getElementById("totalGallons").innerHTML = "Your household of "+household.toString().bold()+" uses " + Math.round(totalGallons).toString().bold() +" gallons of water a day.";
    document.getElementById("averageAmerican").innerHTML = "The average American household of "+household.toString().bold()+" uses on average "+(2220*household).toString().bold()+" gallons of water a day at home. See how you compare!";
    console.log(questionAnswers);
    console.log(gallonsArray);
    console.log(totalGallons)
}
function getPeople(value) {
    numPeople = value;
}

function hideAll() {
    document.getElementById("allQuestions").classList.add("ghost");
    /*var myElement = document.querySelector("#stats");*/
    document.getElementById("stats").classList.remove("ghost");
    document.getElementById("backButton").classList.remove("ghost");
    document.getElementById("announcement").classList.remove("ghost");
}
function returnAll() {
    document.getElementById("allQuestions").classList.remove("ghost");
    document.getElementById("stats").classList.add("ghost");
    document.getElementById("announcement").classList.add("ghost");
    gallonsArray.length = 0;
    totalGallons = 0;
}

function printArr() {
    console.log(questionAnswers);
}

function storeVar(value, questionNumber) {
    questionAnswers[questionNumber] = value;
    console.log(value);
    console.log(questionNumber);
    console.log(questionAnswers);
}

function handWashing(value) {
    questionAnswers[8] = value * 8;
}
function dishWashing(value) {
    questionAnswers[7] = value * 6;
}

function lawn(value) {
    haveLawn = value;
    if (haveLawn == "Yes") {
        let myElement = document.querySelector("#superman");
        myElement.classList.remove("ghost");

    } else {
        let myElement = document.querySelector("#superman");
        myElement.classList.add("ghost");
    }
    storeVar(value, 9);
}


function hasCar(value) {
    haveCar = value;
    if (haveCar == "Yes") {
        let myElement = document.querySelector("#superman2");
        myElement.classList.remove("ghost");
        let myElement2 = document.querySelector("#superman3");
        myElement2.classList.remove("ghost");
        let myElement3 = document.querySelector("#superman4");
        myElement3.classList.remove("ghost");
        let myElement4 = document.querySelector("#superman5");
        myElement4.classList.remove("ghost");

    } else {
        let myElement = document.querySelector("#superman2");
        myElement.classList.add("ghost");
        let myElement2 = document.querySelector("#superman3");
        myElement2.classList.add("ghost");
        let myElement3 = document.querySelector("#superman4");
        myElement3.classList.add("ghost");
        let myElement4 = document.querySelector("#superman5");
        myElement4.classList.add("ghost");
    }
    storeVar(haveCar, 11);
}

function storeFood(value, foodNumber,id) {
  let myElement = document.getElementById(id.toString());
  if(whatFood[foodNumber] != value){
    whatFood[foodNumber] = value;
    myElement.classList.add("borderBig");
  } else {
    whatFood[foodNumber] = "";
    myElement.classList.remove("borderBig");
  }
}

function findFood() {
    var waterprint = 0;
    var i = 0;
    for (i = 0; i < whatFood.length; i++) {
        if (whatFood[i] == "steak") {
            waterprint += 850;
        } else if (whatFood[i] == "chicken") {
            waterprint += 133;
        } else if (whatFood[i] == "egg") {
            waterprint += 94;
        } else if (whatFood[i] == "pork") {
            waterprint += 330;
        } else if (whatFood[i] == "lentils") {
            waterprint += 570;
        } else if (whatFood[i] == "MeatlessPatty") {
            waterprint += 7;
        } else if (whatFood[i] == "spaghetti") {
            waterprint += 100;
        } else if (whatFood[i] == "potato") {
            waterprint += 18;
        } else if (whatFood[i] == "rice") {
            waterprint += 100;
        } else if (whatFood[i] == "blueberries") {
            waterprint += 45;
        } else if (whatFood[i] == "banana") {
            waterprint += 48;
        } else if (whatFood[i] == "apple") {
            waterprint += 27;
        } else if (whatFood[i] == "grapes") {
            waterprint += 25;
        } else if (whatFood[i] == "tomato") {
            waterprint += 8;
        } else{
          waterprint +=0;
        }
    }
    questionAnswers[17] = waterprint;
}

// array questionAnswers
// array gallonsArray
function submit() {

    var showerGallons = 0;
    var gasolineGallons = 0;
    for (var i = 0; i < 19; i++) {
        var answer = questionAnswers[i];
        // fixed undef problem
        if (isNaN(gallonsArray[i])) {
            gallonsArray[i] = 0;
        }
        if (typeof answer === 'undefined') {
            gallonsArray[i] = 0;
            continue;
        }
        // if (questionAnswers.indexOf(undefined)){
        //   gallonsArray[i] = 0;
        //   continue;
        // } 
        if (i == 0) {
            household = answer;
        }
        else if (i == 1) {
            // shower
            if (answer == "5 minutes or less") {
                showerGallons = 5;
            } else if (answer == "5-10 minutes") {
                showerGallons = 10;
            }
            else if (answer == "10-20 minutes!") {
                showerGallons = 15;
            }
            else if (answer == "Over 20 minutes") {
                showerGallons = 20;
            }
            else {
                showerGallons = 0;
            }
        }
        else if (i == 2) {
            // shower
            if (answer == "Weekly") {
                showerGallons /= 7;
            }
            else if (answer == "Monthly") {
                showerGallons /= 31;
            }
            gallonsArray[0] = showerGallons * household;
        }
        else if (i == 3) {
            // bath
            if (answer == "Everyday!") {
                gallonsArray[1] = 50*household;
            }
            else if (answer == "Weekly") {
                gallonsArray[1] = (50/7)*household;
            }
            else if (answer == "Monthly") {
                gallonsArray[1] = (50/7)*household;
            }
            else if (answer == "Never") {
                gallonsArray[1] = 0;
            }
            else {
                gallonsArray[1] = 0;
            }

        }
        else if (i == 4) {
            // toilet
            // mabye add question if toilet is old or new
            gallonsArray[2] = answer * 4 * household;

        }
        else if (i == 5) {
            // machine dishWashing
            gallonsArray[3] = answer / 7 * 6;
        } else if (i == 6) {
            //hand washing dishes
            gallonsArray[4] = answer / 7 * 20;
        } else if (i == 7) {
            //machine wash clothes
            gallonsArray[5] = answer / 7 * 40;
        } else if (i == 8) {
            // hand wash clothes
            gallonsArray[6] = answer / 7 * 25;
        } else if (i == 9) {
            //I honestly don't know why I stored this
            // if has lawn
        } else if (i == 10) {
            if (answer == "0-100 square feet") {
              gallonsArray[7] = 2;
          }
            else if (answer == "100-500 square feet") {
              gallonsArray[7] = 13;
          }
            else if (answer == "500-1000 square feet") {
              gallonsArray[7] = 56;
          }
            else if (answer == "> 1000 square feet"){
              gallonsArray[7] = 138;
          } else {
            gallonsArray[7] = 0;
          }
        } else if(i==11){
          //don't do anything
        } else if (i == 12) {
            gasolineGallons = answer * .75;
        } else if (i == 13) {
            if (answer == "Weekly") {
                gallonsArray[8] = gasolineGallons / 7;
            }
            else if (answer == "Monthly") {
                gallonsArray[8] = gasolineGallons / 30;
            }
						else if (answer == "Daily"){
              gallonsArray[8] = gasolineGallons;
						}
            else {
                gallonsArray[8] = 0;
            }
        } else if (i == 14) {
            // car wash
            if (answer == "At a self-serve car wash") {
                gallonsArray[9] = 15;
            }
            else if (answer == "Using a drive through car wash") {
                gallonsArray[9] = 30;
            }
            else if (answer == "At Home") {
                gallonsArray[9] = 100;
            }
            else {
                gallonsArray[9] = 0;
            }
        } else if (i == 15) {
            // electricity
            if (answer == "Solar Panels!") {
                gallonsArray[10] = 0;
            }
            else if (answer == "From the electricity utility") {
                gallonsArray[10] = 300 * household;
            }
            else {
                gallonsArray[10] = 0;
            }
        } else if (i == 16) {
            //shopping
            if (answer == "Not a lot") {
                gallonsArray[11] = 300*household;
            } else if (answer == "A normal amount") {
                gallonsArray[11] = 583*household;
            } else if (answer == "Way too much") {
                gallonsArray[11] = 700*household;
            } else {
                gallonsArray[11] = 0;
            }
        } else if (i == 17) {
            // food
            gallonsArray[12] = answer * household;
            console.log(answer);
            
      
        } else if(i ==18){
          if(questionAnswers[i]=="Daily"){

          } else if(questionAnswers[i]=="Weekly"){
            gallonsArray[9] /= 7;
          } else if(questionAnswers[i]=="Biweekly"){
            gallonsArray[9] /= 14;
          } else if(questionAnswers[i]=="Monthly"){
            gallonsArray[9] /= 30;
          }
        }
     console.log(gallonsArray);
    }
    // adds everything to totalGallons variable
    for (var j = 0; j < gallonsArray.length; j++) {
        totalGallons += gallonsArray[j];
    }
}
