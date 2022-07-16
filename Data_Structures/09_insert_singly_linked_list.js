/*                             Insert Pseudocode

->  If the index is less than zero and greater than the length, return false 
->  If index is same as the length, push ajnew node to the end of the list 
->  If the index is 0, unshift a new node to the start of the list 
->  Otherwise, using the get method, access the node at the (index - 1)
->  Set the next property on that node to be the new node 
->  Set the next property on the new node tobe the previous next. 
->  Increment the length. 
->  Return true 

 */