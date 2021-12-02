import toNumber from '../src/toNumber'

test('testToNumberNAN',()=>{
  expect(toNumber('abc')).toBe(NaN);
})

test('testToNumberStringWithWhitespaces',()=>{
  expect(toNumber(' 12.3 ')).toBe(12.3);
})