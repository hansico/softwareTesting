import capitalize from '../src/capitalize'

test('testCapitalize',()=>{
  expect(capitalize('banana')).toBe('Banana');
})