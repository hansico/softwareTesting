import add from '../src/add'

//testataan add funktiota antamalla sille kaksi numero arvoa 1 ja 3 
//ja tarkistetaan, että se antaa oikean ulsotulon 4.

test('testAdd',()=>{
  expect(add(1, 3)).toBe(4);
})

//lähes sama testi kuin yllä, mutta testataan add funktion toimivuutta 
//negatiivisella luvulla

test('testAddWithNegativeValue',()=>{
    expect(add(-1, 3)).toBe(2);
  })

//annetaan add funktiolle syötteenä sekä merkkijono, että luku 
//ja odotetaan, että funktio heittäisi jonkin virheilmoituksen

test('testAddTryWithString',()=>{
    expect(add("a", 3)).toThrow();
  })
  