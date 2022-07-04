/*                     Radix Sort Pseudocode

->  Define a function that accepts list of numbers. 
->  Figure out how many digits the largest number has. 
->  Loop from k = 0 upto this largest number of digits. 
->  For each iteration of the loop:
    ->  Create buckets for each digits (0 to 9)
    ->  Place each number in the corresponding buckets based on its kth digit. 
->  Replace our existing array with value in our buckets, starting with 0 and going up to 9. 
->  Return list at the end 
 */