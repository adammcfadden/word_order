var wordOrder = function(sentence) {
  var finalHash = {};
  var words = sentence.split(" ");

  words.forEach(function(word, index) {
    if (!(word in finalHash)) {
      finalHash[word] = 1;
    } else {
      finalHash[word]++;
    }
  });
  return finalHash
}
