var wordOrder = function(sentence) {
  var wordHash = {};
  var words = sentence.split(" ");

  words.forEach(function(word, index) {
    if (!(word in wordHash)) {
      wordHash[word] = 1;
    } else {
      wordHash[word]++;
    }
  });
  return wordHash
}

var wordHashToString = function(wordHash) {
  var highCount = 0;
  for(key in wordHash) {
    if(wordHash[key] > highCount) {
      highCount = wordHash[key];
    }
  }
  var outputString = "";

  while(highCount > 0) {
    for(var key in wordHash) {
      if(wordHash[key] === highCount) {
        outputString = outputString.concat(key + ": " + wordHash[key] + ". ");
      }
    }
    highCount--;
  }
  outputString = outputString.trim();
  return outputString;
}

$(document).ready(function() {
  $("#romannumerals").submit(function(event) {
    var input = ($("input#input-string").val());
    var translatedInput = wordOrder(input);
    var finalOutput = wordHashToString(translatedInput)
    $(".output").text(finalOutput);
    $("#result").slideToggle("slow");
    $(".panel").fadeIn("slow");
    event.preventDefault();
  });

});
