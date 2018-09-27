x=4
y='4'
//Return true because both variables has the same value, with the difference that once is type string and the other is integer
var comparisonAboutValue = x==y;
//Return false since the variables x & y are of different data types
var comparisonAboutTypeOfData = x===y; 
//The most recomemdable practice is use ALWAYS the triple equal

var me ={
    name: 'Enrique'
}

var otherMe = {
    name: 'Enrique'
}
//comparison of objects
var comparison = me == otherMe
//or
var hardComparison = me===otherMe
/*The latest comparisons returns false because javascript only compares with the values that the local memory it's referenced.
The only way that javascript give us a true value is when both objects are referenced to the same block in the local memory 

For example
*/

//trueObjectComparison
var newMe = me;

var trueComparison= newMe == me 
var trueHardComparison = me===otherMe
/*For the value to become The first comparison is true because both point to the same sector of local memory, but the second one is
false becuase the only way that the value of comparison becomes true is when in the comparison are the EXACTLY the
same variable*/
