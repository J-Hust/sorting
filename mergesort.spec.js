describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4], [5,6,7,8]])
    });

    it('splits odd-numbered-length arrays correctly', function() {
        expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3], [4,5,6,7]])
    });
    it('splits an array of nine elements', function() {
        expect(split([1,2,3,4,5,6,7,8,9])).toEqual([[1,2,3,4], [5,6,7,8,9]]);
    })
    it('returns items in the correct order', function() {
        expect(mergeSort([]))
    })
  });
