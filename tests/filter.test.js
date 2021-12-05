import filter from '../src/filter'

const foods = [
       { 'name': 'banana', 'category': 'fruit' },
       { 'name': 'sadwich',   'category': 'bread' }
     ]
    
     

     test('testFilter',()=>{
        expect(filter(foods, ({ category }) => category == 'fruit')).toStrictEqual([{'name' : 'banana', 'category': 'fruit'}]);
      })

      test('testFilteruli',()=>{
        expect(filter(foods, ({ category }) => category == 'clothes')).toStrictEqual([[]]);
      })