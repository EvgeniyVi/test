const text = "Соображения высшего порядка, а также курс на социально-ориентированный национальный проект обеспечивает актуальность экономической целесообразности принимаемых решений. Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации ключевых компонентов планируемого обновления? Значимость этих проблем настолько очевидна, что реализация намеченного плана развития требует от нас анализа форм воздействия!".toLowerCase();

class FizzBuzzDetector {
    constructor(article){
        this.article = article;
    }
  getOverlappings() {
    //Converting to an array
    let  convertToArray = this.article.split(" ");
    for (let i = 0; i < convertToArray.length; i++) {
      if (i % 5 == 0) {
        convertToArray.splice(i-1, 5, "FUZZ");
      }
    }
    return convertToArray.join(" ");
  }
}

const filterArticle  = new FizzBuzzDetector(text);

console.log(filterArticle.getOverlappings());

