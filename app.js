let span = document.querySelector(".roman-result");
let input = document.querySelector(".input-text");
let form = document.querySelector(".form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    span.textContent = convertToRoman(input.value);
    backToDefault();
})
function backToDefault(){
    input.value = "";
}

function convertToRoman(num) {
    let romanArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let numArray = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanized ="";
    for (let i = 0; i<numArray.length; i++){
      while (num >= numArray[i]) {
        romanized += romanArray[i];
        num -= numArray[i];
      }
    }
   return romanized
  }

  