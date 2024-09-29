// project.test.js

const assert = require('assert');
const sinon = require('sinon');
const ulaz = require('prompt-sync')();
const {
  getPocetniDepozit,
  getBrojLinija,
  zavrti,
  JeDobijeno,
  izracunajDobitak,
  matricaAparata
} = require('./project');

describe('Slot Aparat Tests', () => {
  let promptStub;

  beforeEach(() => {
    promptStub = sinon.stub(ulaz);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return valid deposit amount', () => {
    promptStub.onFirstCall().returns('100');
    const deposit = getPocetniDepozit();
    assert.strictEqual(deposit, 100);
  });

  it('should return valid number of lines', () => {
    promptStub.onFirstCall().returns('2');
    const brojLinija = getBrojLinija(100, 10);
    assert.strictEqual(brojLinija, 2);
  });

  it('should populate matricaAparata correctly', () => {
    zavrti(3);
    assert(matricaAparata[0][0] !== '');
    assert(matricaAparata[1][0] !== '');
    assert(matricaAparata[2][0] !== '');
  });

  it('should detect winning condition', () => {
    matricaAparata[0] = ['A', 'A', 'A'];
    matricaAparata[1] = ['B', 'B', 'B'];
    matricaAparata[2] = ['C', 'C', 'C'];
    assert.strictEqual(JeDobijeno(), true);
  });

  it('should calculate correct winnings', () => {
    matricaAparata[0] = ['A', 'A', 'A'];
    matricaAparata[1] = ['B', 'B', 'B'];
    matricaAparata[2] = ['C', 'C', 'C'];
    const dobitak = izracunajDobitak(10);
    assert.strictEqual(dobitak, 120); // 50 + 40 + 30
  });

  it('should return zero winnings for no matches', () => {
    matricaAparata[0] = ['A', 'B', 'C'];
    matricaAparata[1] = ['B', 'C', 'D'];
    matricaAparata[2] = ['C', 'D', 'A'];
    const dobitak = izracunajDobitak(10);
    assert.strictEqual(dobitak, 0);
  });
});