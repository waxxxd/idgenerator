'use strict';

let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let randomNumberMinMax = function(min, max) {
    return parseInt((Math.random() * ((max + 1) - min)) + min);
}

let generateCheckSumDigit = function(preCheckValue) {
    let paddedPreCheckValue = '0' + preCheckValue;
    let a = 0, b = '';
    for (let i = 1; i < paddedPreCheckValue.length; i++) {
        if (i % 2 == 1) {
            a += parseInt(paddedPreCheckValue.charAt(i));
        } else {
            b += '' + paddedPreCheckValue.charAt(i);
        }
    }
    b = (parseInt(b) * 2).toString();

    let bResult = 0;
    for (let i = 0; i < b.length; i++) {       
        bResult += parseInt(b.charAt(i));
    }

    let result = a + bResult;
    return 10 - result.toString().charAt(1);

}

let year = randomNumberMinMax(21, 99);
let month = randomNumberMinMax(1, 12);
let day = randomNumberMinMax(1, days[month - 1]);

let date = year.toString().padStart(2, '0') + month.toString().padStart(2, '0') + day.toString().padStart(2, '0');
let gender = randomNumberMinMax(0, 9999).toString().padStart(4, '0');
let nationality = randomNumberMinMax(0, 1);
let race = 8;

let preCheckValue = date + gender + nationality + race;

let checksum = generateCheckSumDigit(preCheckValue);

let idNumberButton = document.getElementById('IDNUMBER');
idNumberButton.value = preCheckValue + checksum;

window.addEventListener('load', function load(event) {
    document.getElementById('clippy').onclick = function() {
        idNumberButton.select();
        document.execCommand('copy');
    };
});