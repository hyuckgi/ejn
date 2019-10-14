const assert = require('assert');
const pikachuCalc = require('../solution');

describe('pikachuCalc', function () {
    it('test case1: success', function () {
        const isValid = pikachuCalc(1, 12);
        assert.equal(isValid, 500);
    });

    it('test case2: success', function () {
        const isValid = pikachuCalc(13, 144);
        assert.equal(isValid, 6500);
    });

    it('test case3: success', function () {
        const isValid = pikachuCalc(10, 63);
        assert.equal(isValid, 3000);
    });

    it('test case4: success', function () {
        const isValid = pikachuCalc(1, 63);
        assert.equal(isValid, 500);
    });

    it('test case5: success', function () {
        const isValid = pikachuCalc(63, 1);
        assert.equal(isValid, 2500);
    });

    it('test case6: success', function () {
        const isValid = pikachuCalc(0, 0);
        assert.equal(isValid, 0);
    });

    it('test case7: success', function () {
        const isValid = pikachuCalc(3, 9);
        assert.equal(isValid, 0);
    });

    it('test case8: success', function () {
        const isValid = pikachuCalc(4, 9);
        assert.equal(isValid, 500);
    });
});
