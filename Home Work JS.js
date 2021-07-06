

 const text = "Lorem Ipsum is simply  it to make a type specimen book".toLowerCase();


 class FizzBuzzDetector {
  constructor(article) {
    this.article = article;
  }

  getOverlappings() {
    //Converting to word array
    let convertToWordArray = this.article.split(" ");

    for (let i = 0; i < convertToWordArray.length; i++) { // itteration word
      if (i > 0 && i % 5 === 0) { // replace every fifth word
        convertToWordArray[i] = "BUZZ";
        continue; // next itteration
      }
      var convertToSymbolArray = convertToWordArray[i].split(''); // share into the symbol
      for (let i = 2; i < convertToSymbolArray.length; i += 3) {
          convertToSymbolArray[i] = "FIZZ"; // replace every third letter
      }
      convertToWordArray[i] = convertToSymbolArray.join(''); 
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
  getReversLetter(){
    if(this.letter == '' || this.letter == ' '){// check on empty
      console.log("Error:String is empty");
    }else if(!isNaN(this.letter)){// check on number
      console.log("Error");
    }
    else{
      let convertToArray = this.letter.split("");
      let reversToLetter = convertToArray.reverse();
      return reversToLetter.join('');
    }
  }
}

const newString = new ReverseString(text);

// console.log(newString.getReversLetter());



