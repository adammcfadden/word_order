describe("wordOrder", function() {

  it("will return a hash containing the number of instances of a single word", function() {
    expect(wordOrder("fun fun fun")).to.eql({fun: 3});
  });

  it("will return a hash containing the number of instances of multiple words", function() {
    expect(wordOrder("fun run fun run fun run bun")).to.eql({run: 3, fun: 3, bun: 1});
  });

});

describe("wordHashToString", function() {
  it("will convert the hashes returned by wordOrder to a web-friendly formatted string", function() {
    expect(wordHashToString(wordOrder("fun fun gun"))).to.equal("fun: 2. gun: 1.");
  });

  it("will reorder the string output to have words with the most occurances first", function() {
    expect(wordHashToString(wordOrder("fun gun done gun done done"))).to.equal("done: 3. gun: 2. fun: 1.");
  });

  it("will reorder the string output to have words with the most occurances first, and if occuances are the same, place the word entered first in front.", function() {
    expect(wordHashToString(wordOrder("fun gun gun done gun done done"))).to.equal("gun: 3. done: 3. fun: 1.");
  });
});
