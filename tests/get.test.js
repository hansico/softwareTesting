import get from '../src/get.js'

test("testGetComplex",()=>{
  const object =  {'foo': [{'a':[ {'u': 0}], 'b': [{ 'i' : 2}] } ] }
  expect(get(object,['foo', 0, 'b', 0, 'i'])).toBe(2)
})

test("testGetReturnDefault",()=>{
  const object =  {'foo': [{'a':[ {'u': 0}], 'b': [{ 'i' : 2}] } ] }
  expect(get(object,['bar', 0, 'b', 0, 'i'], 'notfound')).toBe('notfound')
})

test("testgetUndefined",()=>{
  const object =  {'foo': [{'a':[ {'u': 0}], 'b': [{ 'i' : 2}] } ] }
  expect(get(object,['bar', 0, 'b', 0, 'i'])).toBe(undefined)
})