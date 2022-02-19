// Workspace
let box = document.getElementById("box");
let code = document.getElementById("code");
let liveAlertBtn = document.getElementById("liveAlertBtn");
let boxContainer = document.getElementById('boxContainer');

// Accordion Size
// Input Width
let rangeWidth = document.getElementById("rangeWidth");
let textWidth = document.getElementById("textWidth");
// Input Height
let rangeHeight = document.getElementById("rangeHeight");
let textHeight = document.getElementById("textHeight");

// Accordion Background-Color (RGB)
let rText = document.getElementById('rText');
let gText = document.getElementById('gText');
let bText = document.getElementById('bText');
let rgbText = "rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ")";

// Accordion Box Shadow 
// Input Horizontal Length
let rangeHorizontal = document.getElementById('rangeHorizontal');
let textHorizontal = document.getElementById('textHorizontal');
// Input Vertical Length
let rangeVertical = document.getElementById('rangeVertical');
let textVertical = document.getElementById('textVertical')
// Inpur Blur Radius
let rangeBlur = document.getElementById('rangeBlur');
let textBlur = document.getElementById('textBlur');
// Input Spread Radius
let rangeSpread = document.getElementById('rangeSpread');
let textSpread = document.getElementById('textSpread');
// Input Color
let textColor = document.getElementById('textColor');

// Accordion Border Radius
// Input Top Left
let rangeTl = document.getElementById('rangeTl');
let textTl = document.getElementById('textTl');
// Input Top Right
let rangeTr = document.getElementById('rangeTr');
let textTr = document.getElementById('textTr');
// Input Bottom Right
let rangeBr = document.getElementById('rangeBr');
let textBr = document.getElementById('textBr');
// Input Bottom Left
let rangeBl = document.getElementById('rangeBl');
let textBl = document.getElementById('textBl');
// Input ColorTextShadow
let textColorShadow = document.getElementById('textColorShadow');

// Accordion Text-color
// Input Box color
let boxContainerColor = document.getElementById('boxContainerColor');
// Input Box border
let rangeSizeBorder = document.getElementById('rangeSizeBorder');

// Function rangeWidth
rangeWidth.oninput = function () {
   box.style.width = rangeWidth.value + "px";
   textWidth.value = rangeWidth.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function textWidth
textWidth.oninput = function () {
   box.style.width = rangeWidth.value + "px";
   rangeWidth.value = textWidth.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function rangeHeight
rangeHeight.oninput = function () {
   box.style.height = rangeHeight.value + "px";
   textHeight.value = rangeHeight.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function textHeight
textHeight.oninput = function () {
   box.style.height = rangeHeight.value + "px"
   rangeHeight.value = textHeight.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function rgb
rText.oninput = gText.oninput = bText.oninput = function () {
   box.style.backgroundColor = "rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ")";
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function Box Shadow range
rangeHorizontal.oninput = rangeVertical.oninput = rangeBlur.oninput = rangeSpread.oninput = textColor.oninput = function () {
   box.style.boxShadow = `${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value}`;
   textHorizontal.value = rangeHorizontal.value;
   textVertical.value = rangeVertical.value;
   textBlur.value = rangeBlur.value;
   textSpread.value = rangeSpread.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function Box Shadow text
textHorizontal.oninput = textVertical.oninput = textBlur.oninput = textSpread.oninput = function () {
   box.style.boxShadow = `${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value}`;
   rangeHorizontal.value = textHorizontal.value;
   rangeVertical.value = textVertical.value;
   rangeBlur.value = textBlur.value;
   rangeSpread.value = textSpread.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};
//===========================
// Function Border radius range
rangeTl.oninput = rangeTr.oninput = rangeBr.oninput = rangeBl.oninput = textColorShadow.oninput = function () {
   box.style.borderRadius = `${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px`;
   textTl.value = rangeTl.value;
   textTr.value = rangeTr.value;
   textBr.value = rangeBr.value;
   textBl.value = rangeBl.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};

// Function Border radius text
textTl.oninput = textTr.oninput = textBr.oninput = textBl.oninput = textColorShadow.oninput = function () {
   box.style.borderRadius = `${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px`;
   rangeTl.value = textTl.value;
   rangeTr.value = textTr.value;
   rangeBr.value = textBr.value;
   rangeBl.value = textBl.value;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};
//Function Border radius color
textColorShadow.oninput = function () {
   box.style.borderColor = `${textColorShadow.value}`
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
}
//Function Border Size range
rangeSizeBorder.oninput = function () {
   box.style.border = `${rangeSizeBorder.value}px solid`
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
}
//Function boxContainer color
boxContainerColor.oninput = function () {
   boxContainer.style.backgroundColor = `${boxContainerColor.value}`;
   code.innerText = `width: ${rangeWidth.value}px;
   height: ${rangeHeight.value}px;
   background-color : ${"rgb(" + rText.value + ", " + gText.value + ", " + bText.value + ");"}
   box-shadow: ${rangeHorizontal.value}px ${rangeVertical.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${textColor.value};
   border: ${rangeSizeBorder.value}px solid;
   border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;
   border-color: ${textColorShadow.value};
   background-color: ${boxContainerColor.value}; // for box-container`;
};
//=================================================================
function rand() {
   return Math.random().toString(36).substr(2); // remove `0.`
};

function token() {
   return rand() + rand(); // to make it longer
};

liveAlertBtn.onclick = () => {
   navigator.clipboard.writeText(code.innerText)
};

let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type, id = token()) {
   let wrapper = document.createElement('div')
   wrapper.innerHTML = '<div class="alert alert-token' + id + ' alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><img src ="./sticker.gif" style="max-width:170px;"></div>'

   alertPlaceholder.append(wrapper)
   setTimeout(function () {
      $('.alert-token' + id).slideUp('normal', function () {
         $(this).remove();
      })
   }, 4000)
}

if (alertTrigger) {
   alertTrigger.addEventListener('click', function () {
      alert('Code successfully copied', 'primary')
   })
}