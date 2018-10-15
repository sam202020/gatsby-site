function sum_pairs(ints, s){
    let newArr = [];
    //     let indexArr=[];
        let min = undefined;
         for (let i=0;i<ints.length;i++){
           if (min && i >= min - 1) break; 
             for(let j=i+1;j<ints.length;j++){
               if (ints[i]+ints[j]===s) {
                 newArr.push([ints[i], ints[j]]);
    //              indexArr.push(j);
                 if (!min) {
                    console.log(j)
                    min = j;
                    console.log(min)
                 }
                 else {
                   if (j < min) min = j;
                 }
                 break;
                }
              }
          }
          console.log(newArr);
          console.log(min)
          if (!min) return undefined;
    //       const minNum = Math.min(...indexArr)
    //       const index = indexArr.indexOf(minNum);
          return newArr[min];
  }
console.log(sum_pairs([1,4,8,7,3,15], 8));