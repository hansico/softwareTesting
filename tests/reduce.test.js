import reduce from '../src/reduce'

//annetaan reduce funktiolle pari satunnaista objektia ja tarkistetaan, että se laskee näiden objektien 
//hinnat oikein yhteen

test('calculateShoppingCartPrice',()=>{
  expect(reduce([{"name":"banana","category":"fruit","price":0.2},{"name":"Sandwich","category":"Bread","price":1.2}],(sum, n) => sum + n.price, 0)).toBe(1.4);
})

//tarkistetaan, että yhteen lasku toimii oikein myös silloin kun reduce funktiolle annettu lista sisältää 
//vain yhden arvon

test('calculateShoppingCartPriceOneItem',()=>{
    expect(reduce([{"name":"banana","category":"fruit","price":0.2}],(sum, n) => sum + n.price, 0)).toBe(0.2);
  })