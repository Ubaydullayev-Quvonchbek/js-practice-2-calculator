let name = prompt('Ismingizni kiriting');

    alert("Salom " + name + " bu veb-sayt orqali siz misollarni hisoblashingiz mumkin");

// ----------------------------------------------------------------------------------------------------------------- //

function calc() {
    let n1 = +document.getElementById('n1').value;
    let n2 = +document.getElementById('n2').value;
    let operators = document.getElementById('operators').value;
    let result = document.getElementById('result').value;

    if (operators === '+') {
        let result = document.getElementById('result').value = n1 + n2;
    }
    else if (operators === '-') {
        let result = document.getElementById('result').value = n1 - n2;
    }
    else if (operators === '×') {
        let result = document.getElementById('result').value = n1 * n2;
    }
    else if (operators === ':') {
        let result = document.getElementById('result').value = n1 / n2;
    }
};