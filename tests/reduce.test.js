import reduce from '../src/reduce'

test('calculateShoppingCartPrice',()=>{
  expect(reduce([{"name":"banana","category":"fruit","price":0.2},{"name":"Sandwich","category":"Bread","price":1.2}],(sum, n) => sum + n.price, 0)).toBe(1.4);
})

test('calculateShoppingCartPriceOneItem',()=>{
    expect(reduce([{"name":"banana","category":"fruit","price":0.2}],(sum, n) => sum + n.price, 0)).toBe(0.2);
  })