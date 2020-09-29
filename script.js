let ans = 0;

function equalTo() {
    let x = document.getElementById('textfield').value;
    res = eval(x);
    document.getElementById('textfield').value = res;
}

function display(val) {
    if (document.getElementById('textfield').value.localeCompare("undefined") == 0)
        document.getElementById('textfield').value = val;
    else
        document.getElementById('textfield').value += val;
}

function clearText() {
    document.getElementById('textfield').value = "0";
}

function deleteText() {
    var value = document.getElementById('textfield').value;
    document.getElementById('textfield').value = value.substr(0, value.length - 1);
}

function switchCalc() {
    for (i = 1; i <= 7; i++) {
        if (document.getElementById(i).style.visibility === 'collapse') {
            document.getElementById(i).style.visibility = 'visible';
            document.getElementById('col1').colSpan = 5;
            document.getElementById('textfield').size = "19";
        } else {
            document.getElementById(i).style.visibility = 'collapse';

            document.getElementById('col1').colSpan = 4;
            document.getElementById('textfield').size = "14";
        }
    }
}

function square() {
    document.getElementById('textfield').value = Math.pow(document.getElementById('textfield').value, 2);
}

function cube() {
    document.getElementById('textfield').value = Math.pow(document.getElementById('textfield').value, 3);
}

function inverse() {
    document.getElementById('textfield').value = 1 / document.getElementById('textfield').value;
}

function factorial() {
    let x = document.getElementById('textfield').value;
    if (x == 0 || x == 1)
        document.getElementById('textfield').value = 1;
    else {
        let fact = 1;
        for (i = 2; i <= x; i++) {
            fact = fact * i;
        }
        document.getElementById('textfield').value = fact;
    }
}

function pi() {
    if (document.getElementById('textfield').value == 0)
        document.getElementById('textfield').value = Math.PI;
    else
        document.getElementById('textfield').value = document.getElementById('textfield').value * Math.PI;

}

function answer() {
    document.getElementById('textfield').value += ans;
}

function sqrt() {
    document.getElementById('textfield').value = Math.sqrt(document.getElementById('textfield').value);
}

function exp() {
    if (document.getElementById('textfield').value == 0)
        document.getElementById('textfield').value = Math.E;
    else
        document.getElementById('textfield').value = document.getElementById('textfield').value * Math.E;

}

function power() {
    let x = document.getElementById('textfield').value;
}

function sin() {
    document.getElementById('textfield').value = Math.sin(document.getElementById('textfield').value);
}

function cos() {
    document.getElementById('textfield').value = Math.cos(document.getElementById('textfield').value);
}

function tan() {
    document.getElementById('textfield').value = Math.tan(document.getElementById('textfield').value);
}

function log() {
    document.getElementById('textfield').value = Math.log10(document.getElementById('textfield').value);
}

function ln() {
    document.getElementById('textfield').value = Math.log(document.getElementById('textfield').value);
}