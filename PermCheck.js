//Version 01
//Create a dummy array
var arrayA=[4,1,3];
//Sort out the array
var sortedArray=arrayA.sort();
//console.log(sortedArray);
for (let index = 0; index < this.sortedArray.length; index++) {
    debugger;
    var operation=this.sortedArray[index+1];
   if (operation!=this.sortedArray[index]) 
   {
       return 0;
       //console.log(sortedArray.indexOf(sortedArray[index]));
       //break;
   }
   else
   {
    return 1;
   }
}