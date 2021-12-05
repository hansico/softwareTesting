import capitalize from '../src/capitalize'

//testataan, että capitalize funktio, muuttaa peiniäkirjaimia
//sisältävän merkkijonon ensimmmäisen kirjaimen isoksi.

test('testCapitalize',()=>{
  expect(capitalize('banana')).toBe('Banana');
})
