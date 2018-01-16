

$(document).ready(function(){
  $("form#word_form").submit(function(event){
    event.preventDefault();
    var sentences = $("#sentence").val().split(" ");
    var orderedWords = sentences.map(function(word){
      if (word.length >= 3){
        return word;
      };
    });
    orderedWords.reverse();
    var finalSentence = orderedWords.toString();
    finalSentence = finalSentence.replace(/,/g, " ");
    alert(finalSentence);
  });

});
