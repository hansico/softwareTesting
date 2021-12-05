import compact from '../src/compact'

//testataan, että funktio compact poistaa listasta kaikki tyhjät arvot

test('testCompactMultifalsey',()=>{
  var a = compact([0, 1, false, 2, '', 3])
  expect(compact([0, 1, false, 2, null, 3, "",4, undefined, 5, NaN, 6])).toBe([1, 2, 3, 4, 5, 6]);
})