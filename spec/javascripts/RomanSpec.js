describe("Roman", function() {
  var roman;

  beforeEach(function() {
    roman = new Roman();
  });

  it("should convert I into 1", function() {
    var result = roman.numberize("I")
    expect(result).toEqual(1);
  });
});