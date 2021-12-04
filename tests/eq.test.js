import eq from '../src/eq.js'

test("testEqOneSelf",()=>{
  const object = {'foo':'bar'};
  expect(eq(object, object)).toBe(true)
})

test("testEqStringAndNumber",()=>{
  expect(eq(2.31,"2.31")).toBe(false)
})

test("testEqDifferentVarSameValue",()=>{
  const a = "foo"
  const b = "foo"
  expect(eq(a,b)).toBe(true)
})

test("testEqDifferentObjectSameValues",()=>{
  const a = {'foo':1}
  const b = {'foo':1}
  expect(eq(a,b)).toBe(false)
})

test("testEqStringAndObject",()=>{
  expect(eq('a', Object('a'))).toBe(false)
})