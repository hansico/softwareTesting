import add from '../src/add'

test('testAdd',()=>{
  expect(add(1, 3)).toBe(4);
})

test('testAddWithNegativeValue',()=>{
    expect(add(-1, 3)).toBe(2);
  })

  