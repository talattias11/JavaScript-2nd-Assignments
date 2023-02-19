//1
var students = ["Bob","Brad","Neil","Trey","Cory"] ;
console.log(students);

//2
var cols = []

for (var index_r = 1; index_r < 11; index_r++) {
    var rows = []
    for (var index_c = 1; index_c < 11; index_c++) {
        cols.push(index_r * index_c)
        var b_spot1 = cols.indexOf(50)
        var b_spot2 = cols.indexOf(72)
        var b_spot3 = cols.indexOf(100)
        if(cols.length == 10){
            rows.push(rows)
        }
    }
}
cols[b_spot1]='50';
cols[b_spot2]='72';
cols[b_spot3]='100';
console.log(cols);

    
// //3
// var answer = prompt('Please type a number');
//   console.log(answer);
  
//   //4
//   var stop_Q = prompt("Type a word");
//   console.log(stop_Q);
//   while (stop_Q != "stop") {
//       stop_Q = prompt("Type a word");
//       console.log(stop_Q);
//     }
    
// //5   
// var until = prompt('Please type a number');
// while(isNaN(until)){
//     var until = prompt('Please type a correct number');
// }
// var array = [];
// for (var index = 0; index <= until; index++) {
//     array.push(index);
// }
// console.log(array);

// // 6
// var student_search = prompt("Please Type Student's Name(First letter in Caps)");
//     for (let index = 0; index < students.length; index++) {
//         if (student_search === students[index]) {
//             console.log('Exist');
//         } 
//     }

//7
var square = []
for (var i = 0; i < 5; i++) {
    square.push('*')
}
for (var p = 0; p < 5; p++) {
    console.log(square);
}

// //8
// var square2 = prompt('Please type the length of the square');
// var sq_length = []
// for (var i_s = 0; i_s < square2; i_s++) {
//     sq_length.push('*')
// }
// for (var i_l = 0; i_l < square2; i_l++) {
//     console.log(sq_length)
// }

//9
var triangle = []
for (var i_t = 0; i_t < 7; i_t++) {
    if(i_t < 4){
        triangle.push('*')
        console.log(triangle)
    } else {
        triangle.pop('*')
        console.log(triangle)
    }
}
        
