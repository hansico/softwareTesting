import filter from '../src/filter'

//luodaan apu objekti satunnaisista elintarvikkeista.
//objektia käytetään hyödyksi alla olevissa testeissä.

const foods = [
       { 'name': 'banana', 'category': 'fruit' },
       { 'name': 'sadwich',   'category': 'bread' }
     ]
    
//testataan, että filter funktiolla löydetään listassa olevien objektien joukosta
//ne objektit, jotka kuuluvat haluttuun kategoriaan.

test('testFilterCategories',()=>{
  expect(filter(foods, ({ category }) => category == 'fruit')).toStrictEqual([{'name' : 'banana', 'category': 'fruit'}]);
})

//testataan, että funktio palauttaa tyhjän listan, kun yritetään etsiä sellaisella kategorialla,
//jota ei ole olemassa

test('testFilterCategoriesWithNoneExistingCategory',()=>{
  expect(filter(foods, ({ category }) => category == 'clothes')).toStrictEqual([[]]);
})