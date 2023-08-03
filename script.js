// Write your JavaScript code here!

window.addEventListener("load", function() {

    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";


let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

    if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            list.style.visibility = "hidden";
            alert("All fields are required!");
            event.preventDefault();
    }
    if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number" || validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
        list.style.visibility = "hidden";
        alert ("Make sure to enter valid information for each field!")
        event.preventDefault();
    }
        event.preventDefault();
})

let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    
    let pickedPlanet = pickPlanet(listedPlanets);
// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   
    addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
})

   
});