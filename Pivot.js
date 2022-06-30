                    Pivot Pseducode

-> It will help to accept three arguments: an Array, a start index, and end index. (these can be default to 0 and the array length minus 1, respectively)

-> Grab the pivot point from the start of the array

-> Store the current pivot index in a variable (This will keep track of where the pivot should end up)

-> Loop througn the array from start until the end
    
    -> If the pivot is greater than the current element, increment the pivot index variable and then swaap the current element with the element at the pivot index.

-> Swap the starting element( i.e the pivot) with the pivot index. 

-> Return the pivot index.
