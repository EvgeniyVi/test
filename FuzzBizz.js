
//
const text = "Соображения высшего порядка, а также курс на социально ориентированный национальный проект обеспечивает актуальность экономической целесообразности принимаемых решений. Не следует, однако, забывать о том, что курс на социально ориентированный национальный проект влечет за собой процесс внедрения и модернизации ключевых компонентов планируемого обновления? Значимость этих проблем настолько очевидна, что реализация намеченного плана развития требует от нас анализа форм воздействия!".toLowerCase();

class FizzBuzzDetector {
  constructor(article) {
    this.article = article;
  }

  getOverlappings() {
    //Converting to an symbol array
    let convertToSymbolArray = this.article.split("");
    for (var i = 3 - 1; i < convertToSymbolArray.length - 1; i += 3) {
      if (convertToSymbolArray[i] === " ") {
        convertToSymbolArray[i] = " ";
      } else {
        convertToSymbolArray[i] = "FIZZ";
      }
    }
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
