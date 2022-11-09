michaelFact = document.getElementById("michaelFact");
cakeFact = document.getElementById("cakeFact");
sisterFact = document.getElementById("sisterFact");
SNLFact = document.getElementById("SNLFact");
FBFact = document.getElementById("FBFact");
weenFact = document.getElementById("weenFact");

michaelFact.style.display = "none";
cakeFact.style.display = "none";
sisterFact.style.display = "none";
SNLFact.style.display = "none";
FBFact.style.display = "none";
weenFact.style.display = "none";


function displayMichaelFact() {
    michaelFact.style.display = "block";
    cakeFact.style.display = "none";
    sisterFact.style.display = "none";
    SNLFact.style.display = "none";
    FBFact.style.display = "none";
    weenFact.style.display = "none";
}

function displayCakeFact() {
    cakeFact.style.display = "block";
    michaelFact.style.display = "none";
    sisterFact.style.display = "none";
    SNLFact.style.display = "none";
    FBFact.style.display = "none";
    weenFact.style.display = "none";
}

function displaySisterFact() {
    sisterFact.style.display = "block";
    michaelFact.style.display = "none";
    cakeFact.style.display = "none";
    SNLFact.style.display = "none";
    FBFact.style.display = "none";
    weenFact.style.display = "none";
}

function displaySNLFact() {
    SNLFact.style.display = "block";
    michaelFact.style.display = "none";
    cakeFact.style.display = "none";
    sisterFact.style.display = "none";
    FBFact.style.display = "none";
    weenFact.style.display = "none";
}

function displayFBFact() {
    michaelFact.style.display = "none";
    cakeFact.style.display = "none";
    sisterFact.style.display = "none";
    SNLFact.style.display = "none";
    FBFact.style.display = "block";
    weenFact.style.display = "none";
}

function displayWeenFact() {
    michaelFact.style.display = "none";
    cakeFact.style.display = "none";
    sisterFact.style.display = "none";
    SNLFact.style.display = "none";
    FBFact.style.display = "none";
    weenFact.style.display = "block";    
}