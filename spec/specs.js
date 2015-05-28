describe("wordOrder", function() {

  it("will return a hash containing the number of instances of a single word", function() {
    expect(wordOrder("fun fun fun")).to.eql({fun: 3});
  });

  it("will return a hash containing the number of instances of multiple words", function() {
    expect(wordOrder("fun run fun run fun run bun")).to.eql({run: 3, fun: 3, bun: 1});
  });

});
