const cl = (s) => console.log(s);
class BigInteger {
  constructor() {
  }
  // convert number to BigInteger array
  static get(n) { return n.toString().split('').map(Number);}
  static put(a) { return a.join(''); }

  static factorial(n) {
    let op1 = (Array.isArray(n)) ? n : BigInteger.get(n);
    let result = [1];
    for(let i = 2; i <= n; i++ ) {
      result = BigInteger.multBigInt(result,BigInteger.get(i));
    }
    return BigInteger.put(result);
  }
  static multiply(n,m) {
    let op1 = (Array.isArray(n)) ? n : BigInteger.get(n);
    let op2 = (Array.isArray(m)) ? m : BigInteger.get(m);
    let result = [];
    result = BigInteger.multBigInt(op1, op2);
    return BigInteger.put(result);
  }

  static multOneInt(n,m,c) {
    let carry = 0;
    let res = n * m + c;
    carry = Math.floor(res / 10);
    res = res % 10;
    return [carry, res];
  }

  static addOneInt(n,m,c) {
    let carry = 0;
    let res = n + m +c;
    if(res > 9) {
      carry = 1;
      res -= 10;
    }
    return [carry, res];
  }

  static orZero(i) {
    if(typeof i === "undefined") {return 0;}
    else {return i;}
  }
  static multBigInt(nO,mO) {
    let n = nO, m = mO;
    let result = new Array(n.length + m.length).fill(0);
    let carryM = 0;
    for(let i = n.length-1; i >= 0; i--) {
      let len = m.length - i;
      let ary = [];
      // compute one intermediate result
      for(let j = m.length-1; j >= 0; j--) {
        let res = [];
        res = BigInteger.multOneInt(BigInteger.orZero(n[i]),m[j],carryM);
        carryM = res[0];
        ary.unshift(res[1]%10);
      }
      if(carryM !== 0) {
        ary.unshift(carryM);
        carryM = 0;
      }
      // add the required number of zeros to shift the intermediate result
      for(let z = 0; z < n.length -1 - i; z++) {
        ary.push(0);
      }
      let carryA = 0, resA = [];
      // now add the ary[] to the previous result
      let pos = BigInteger.orZero(result.length);
      for(let k = ary.length-1; k >= 0; k--) {
        pos--;
        let resA = BigInteger.addOneInt(BigInteger.orZero(result[pos]), ary[k], carryA);
        carryA = resA[0];
        result[pos] = resA[1];
      }
      if(carryA !== 0) { result[result.length - ary.length -1]  += 1; }
    }
    // now remove any leading zeros from the result
    while(result[0] === 0) { result.shift(); }
    if(carryM !== 0) { result.unshift(carryM);}
    return result;
  }

  static addWithCarry(n, m, carry) {
    let res = n + m + carry;
    if(res > 9) { carry = 1; }
    else {carry = 0;}
    return [res, carry];
  }
};

module.exports = BigInteger;
