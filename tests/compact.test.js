import compact from '../src/compact'

test('testcompact',()=>{
  var a = compact([0, 1, false, 2, '', 3])
  console.log(a)
  expect(compact([0, 1, false, 2, '', 3])).toBe([1, 2, 3]);
})