describe("Roman", function() {
  var roman;

  beforeEach(function() {
    roman = new Roman();
  });

  it("should convert I into 1", function() {
    var result = roman.numberize("I");
    expect(result).toEqual(1);
  });

  it("should convert III into 3", function() {
    var result = roman.numberize("III");
    expect(result).toEqual(3);
  });
});