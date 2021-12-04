import filter from '../src/filter'

const users = [
       { 'name': 'banana', 'category': 'fruit' },
       { 'name': 'sadwich',   'category': 'bread' }
     ]
    
     

     test('testFilter',()=>{
        expect(filter(users, ({ category }) => category == 'fruit')).toStrictEqual([{'name' : 'banana', 'category': 'fruit'}]);
      })

      test('testFilteruli',()=>{
        expect(filter(users, ({ category }) => category == 'clothes')).toStrictEqual([[]]);
      })