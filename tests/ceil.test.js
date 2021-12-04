import ceil from '../src/ceil'

test('testCeilSimple',()=>{
  expect(ceil(3.0008)).toBe(4);
})


test('testCeilWithPositivePrecision',()=>{
    expect(ceil(3.0008, 2)).toBe(3.01);
  })

test('testCeilWithLesserPrecision',()=>{
    expect(ceil(30.1, 2)).toBe(30.10);
  })