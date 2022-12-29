// let a = +prompt("Birinchi sonni kiriting")
// let b = +prompt("Ikkinchi sonni kiriting")
// let c = prompt("Amalni tanlang + - * / %")



// let x = prompt("Raqamni kiriting")

// if (x % 2 == 0) {
//     console.log("bu raqam juft");
//     alert("bu raqam juft")
// }
// else {
//     console.log("bu raqam toq");
//     alert("bu raqam toq")
// }


// ------------------------------------------------------------------------------------------------------------------------- //




function calc() {
    let n1 = +document.getElementById('n1').value;
    let n2 = +document.getElementById('n2').value;
    let operators = document.getElementById('operators').value;
    let result = document.getElementById('result').value;

    if (operators === '+') {
        let result = document.getElementById('result').value = n1+n2;
    }
    else if (operators === '-') {
        let result = document.getElementById('result').value = n1-n2;
    }
    else if (operators === '×') {
        let result = document.getElementById('result').value = n1*n2;
    }
    else if (operators === ':') {
        let result = document.getElementById('result').value = n1/n2;
    }
}