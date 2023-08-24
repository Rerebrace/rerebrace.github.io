let titleP = document.getElementById("titlePreview");
let articleP = document.getElementById("articlePreview");
let input1 = document.getElementById("titleText");
let input2 = document.getElementById("articleText");


function previewText(inputType) {
  let previewType = document.getElementById(inputType);
  
  if(inputType == "titlePreview") {
    previewType.innerHTML = titleText.value;
  }

  if(inputType == "articlePreview") {
    previewType.innerHTML = articleText.value;
  }
}

function enterText() {

}

