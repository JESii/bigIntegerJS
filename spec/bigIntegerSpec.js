const BigInteger = require('../app/bigInteger.js')

describe("bigInteger", () => {
  describe("multOne", () => {
    it("0 * 0 & 0", () => {
      expect(BigInteger.multOneInt(0,0,0)).toEqual([0,0]);
    })
    it("0 * 0 & 1", () => {
      expect(BigInteger.multOneInt(0,0,1)).toEqual([0,1]);
    })
    it("9 * 1 & 1", () => {
      expect(BigInteger.multOneInt(9,1,1)).toEqual([1,0]);
    })
    it("9 * 9 & 1", () => {
      expect(BigInteger.multOneInt(9,9,1)).toEqual([8,2]);
    })
  })
  describe("addOne", () => {
    it("0+0 c0", () => {
      expect(BigInteger.addOneInt(0,0,0)).toEqual([0,0]);
    })
    it("9+9 c0", () => {
      expect(BigInteger.addOneInt(9,9,0)).toEqual([1,8]);
    })
  })
  describe("get", () => {
    it("works for 1 digit #", () => {
      let tn = BigInteger.get(1);
      expect(tn).toEqual([1]);
    });
    it("works for many digits", () => {
      let tn = BigInteger.get(31542);
      expect(tn).toEqual([3,1,5,4,2]);
    });
  });
  describe('put', () => {
    it('works for 1 digit', () => {
      let tn = BigInteger.put([1]);
      expect(tn).toEqual('1');
    })
    it('works for n digits', () => {
      let tn = BigInteger.put([1,2,3]);
      expect(tn).toEqual('123');
    })
  })
  describe("multiplies internally", () => {
    it('[1]*[1]', () => {
      let mult = BigInteger.multBigInt([1],[1]);
      expect(mult).toEqual([1]);
    });
    it('[9]*[2]', () => {
      let mult = BigInteger.multBigInt([9],[2]);
      expect(mult).toEqual([1,8]);
    });
    it("[1,1]*[1]", () => {
      let mult = BigInteger.multBigInt([1,1], [1]);
      expect(mult).toEqual([1,1]);
    });
    it("[1]*[1,1]", () => {
      // this one works
      let mult = BigInteger.multBigInt([1], [1,1]);
      expect(mult).toEqual([1,1]);
    });
    it('2 multi-digit no carry', () => {
      expect(BigInteger.multBigInt([1,1],[1,1])).toEqual([1,2,1]); 
    });
  });
  describe('multiplies externally', () => {
    it('1*1', () => {
      let r = BigInteger.multiply([1],[1]);
      expect(r).toEqual('1');
    })
    it('9*9', () => {
      let r = BigInteger.multiply('9','9');
      expect(r).toEqual('81');
    })
    it('11*11', () => {
      let r = BigInteger.multiply('11','11');
      expect(r).toEqual('121');
    })
    it('25*25', () => {
      let r = BigInteger.multiply('25','25');
      expect(r).toEqual('625');
    })
    it('65*[6,5]', () => {
      let r = BigInteger.multiply('65',[6,5]);
      expect(r).toEqual('4225');
    })
    it('95*95', () => {
      let r = BigInteger.multiply('95',[9,5]);
      expect(r).toEqual('9025');
    })
  })
  describe('factorials', () => {
    it('5!', () => {
      let f = BigInteger.factorial(5);
      expect(f).toEqual('120');
    })
    it('10!', () => {
      let f = BigInteger.factorial(10);
      expect(f).toEqual('3628800');
    })
    it('12!', () => {
      let f = BigInteger.factorial(12);
      expect(f).toEqual('479001600');
    })
    it('13!', () => {
      let f = BigInteger.factorial(13);
      expect(f).toEqual('6227020800');
    })
    it('15!', () => {
      let f = BigInteger.factorial(15);
      expect(f).toEqual('1307674368000');
    })
    it('25!', () => {
      let f = BigInteger.factorial(25);
      expect(f).toEqual('15511210043330985984000000');
    })
  })
});
