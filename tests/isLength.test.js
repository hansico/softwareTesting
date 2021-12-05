import isLength from '../src/isLength.js'

test("testIsLengthValidBasic",()=>{
  expect(isLength(2)).toBe(true)
})

test("testIsLengthNegativeInt",()=>{
  expect(isLength(-2)).toBe(false)
})

test("testIsLengthFloat",()=>{
  expect(isLength(2.1)).toBe(false)
})
