// sort function, where from, to and limit are optional

let example = [
  { duration: "44", description: "Working out legs", date: "2010-10-24" },
  { duration: "22", description: "working out arms", date: "2010-10-22" }
];

const sortLog = (arr, from, to, limit) => {
    
   if (arr !== undefined && from !== undefined && to !== undefined && limit !== undefined) {
       console.log("args present");
   } 

   else {
       console.log(arr);
   }
  
   let workoutsSortedbyDate = [];

  // arr.forEach(e =>  d.push(e.split('-')));
  // dates.sort((a,b) => b[0] - a[0]);
};
