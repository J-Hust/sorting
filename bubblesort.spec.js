'use strict'

let swapCount = 0;
let compareCount = 0;
let arr = [4,3,5,6,1,2];
let sorted = [1,2,3,4,5,6]
let arr1 = [1,9,5]


describe('BubbleSort', function(){

  it('testing', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  });

  it('how many times is swap being called?', function(){
    bubbleSort(arr1);
    expect(swap.calls.count()).toEqual(1)
  });

  it('Bubble Sort', function(){
    let sorted = bubbleSort(arr);
    expect(sorted).toEqual([1,2,3,4,5,6])
  });


});


// describe('Bubble Sort', function(){
//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });
// });

// describe('Bubble Sort', function(){
//   it ('handles an array of 1', function(){
//     expect( bubbleSort([3]) ).toEqual( [3] );
//   });
// });

// describe('Bubble Sort', function(){
//   it ('handles an array of 6'), function(){
//     expect(bubbleSort([4,3,5,6,1,2]).toEqual([1,2,3,4,5,6]));
//   };
// });


