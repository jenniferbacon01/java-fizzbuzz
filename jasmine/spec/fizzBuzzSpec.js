describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should be able to tell if a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it("should be able to tell if a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  });

  it("should be able to tell if a number is divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it("should be able to tell if a number is not divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  });

  it("should be able to tell if a number is divisible by 15", function() {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  });

  it("should be able to tell if a number is not divisible by 15", function() {
    expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
  });

  describe ("when playing, says", function() {

    it("'Fizz' when a number is divisible by 3", function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it("'Buzz' when a number is divisible by 5", function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it("'FizzBuzz' when a number is divisible by 15", function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

    it("'FizzBuzz' when a number is not divisible by 3 or 5", function() {
      expect(fizzbuzz.says(1)).toEqual(1);
    });


  });



});
