let swapCount = 0;
let compareCount = 0;
let arr = [4,3,5,6,1,2];
let sorted = [1,2,3,4,5,6]

beforeAll(function(){
  spyOn(swap).and.callThrough();
});

it('how many times is swap being called?', function(){
  swap();
  expect(swap.calls.count()) <= (bubbleSort.length**2);
});

it('Bubble Sort', function(){
  bubbleSort([4,3,5,6,1,2]);
  expect(arr).toBe([1,2,3,4,5,6])
})

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it ('handles an array of 1', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });
});

describe('Bubble Sort', function(){
  it ('handles an array of 6'), function(){
    expect(bubbleSort([4,3,5,6,1,2]).toEqual([1,2,3,4,5,6]));
  };
});


