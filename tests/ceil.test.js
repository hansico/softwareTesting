import ceil from '../src/ceil'

//testataan, että funktio ceil pyöristää luvun 
//seuraavaan suurempaan kokonaislukuun, kun sille
//ei anneta tarkentavaa määrettä kuinka monen desimaalin
//tarkkuudella sen pitäisi luku pyöristää 

test('testCeilSimple',()=>{
  expect(ceil(3.0008)).toBe(4);
})

//tarkistetaan, että funktio pyöristää luvun halutun
//desimaalin tarkkuudella

test('testCeilWithPositivePrecision',()=>{
    expect(ceil(3.0008, 2)).toBe(3.01);
  })

//testataan, että funktio pyöristää oikein myös silloin
//kun luku sisältää vähemmän desimaaleja kuin haluttaisiin

test('testCeilWithLesserPrecision',()=>{
    expect(ceil(30.1, 2)).toBe(30.10);
  })