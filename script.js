"use strict";

//element
const userInputEL = document.getElementById("user-input");
const btnTranslate = document.getElementById("btn-translate");
const outPutInput = document.getElementById("output-input");

//Global variables
const url = `https://api.funtranslations.com/translate/dothraki.json?text=`;
//function
const showOutPut = (str) => {
  outPutInput.innerText = str;
};

const getTranslatedTest = (input) => {
  //try catch block
  try {
    fetch(url + input)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.contents.translated);
        showOutPut(data.contents.translated);
      });
  } catch (err) {
    console.log(err);
    alert("there is an error");
  }
};

//eventlistener
btnTranslate.addEventListener("click", function () {
  const userInput = userInputEL.value;
  console.log(userInput);
  if (userInput.trim()) {
    getTranslatedTest(userInput);
  } else {
    alert("input is mandatory");
  }
  userInputEL.value = null;
});

//intel
