const text = "Привет иногда бывает грустно но не всегда конечно".toLowerCase();

class FizzBuzzDetector {
  constructor(article) {
    this.article = article;
  }

  getOverlappings() {
    //Converting to an symbol array
    let convertToSymbolArray = this.article.split("");

    for (let i = 3; i < convertToSymbolArray.length-1 ; i +=3) {
      if (convertToSymbolArray[i] == " " ) {
        convertToSymbolArray[i] = "+";
      } else {
        convertToSymbolArray[i] = "FIZZ";
      }
    }

    console.log(convertToSymbolArray);    

    //Converting to string
    let convertToString = convertToSymbolArray.join("");

    //Converting to word array
    let convertToWordArray = convertToString.split(" ");

    for (let i = 5 - 1; i < convertToWordArray.length - 1; i += 5) {
      convertToWordArray[i] = "BUZZ";
    }
    return convertToWordArray.join(" ");
  }
}
  
const filterArticle = new FizzBuzzDetector(text);

// console.log(filterArticle.getOverlappings());


class ReverseString{
  constructor(letter){
    this.letter = letter;
  }
  revers(){
    if(this.letter == '' || this.letter == ' '){
      console.log("Error:String is empty");
    }else if(!isNaN(this.letter)){
      console.log("Error");
    }
    else{
      let reverseLetter = this.letter.split("");
      const reverse = reverseLetter.reverse();
      console.log(reverse.join(''));
    }
  }
}

const newString = new ReverseString(text);

// console.log(filterArticle.revers());