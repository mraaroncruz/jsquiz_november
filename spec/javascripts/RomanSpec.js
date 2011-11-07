describe("Roman", function() {
  var roman;
  beforeEach(function() {
    roman = new Roman();
  });
  describe("#numberize", function() {
    it("should convert I into 1", function() {
      var result = roman.numberize("I");
      expect(result).toEqual(1);
    });

    it("should convert III into 3", function() {
      var result = roman.numberize("III");
      expect(result).toEqual(3);
    });
    describe("first letter lower value", function() {
      it("should subtract the amount", function() {
        var result = roman.numberize("IV");
        expect(result).toEqual(4);
      });

      it("should subtract amount in all circumstances", function() {
        var result = roman.numberize("MCMXIV");
        expect(result).toEqual(1914);     
      });
    });    
  });

  describe('#romanize', function() {
    it("should convert 1 to I", function () {
        var result = roman.romanize(1);
        expect(result).toEqual("I");           
    });
  });

});