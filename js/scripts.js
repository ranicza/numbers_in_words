var num = {0: '', 1:'one', 2:'two', 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine",
    10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen",
    19:"nineteen"}
var tens = {10:"ten", 20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty",70: "seventy", 80:"eighty", 90:"ninety"}

var in_word = "";

var less_1000 = (function(number){
    if (number < 20) {
        return num[number];
    }else if(number < 100){
        return tens[Math.floor(number/10)*10] + ((number % 10 > 0) ? "-" + num[number%10] : '');
    }
    else {
        return num[Math.floor(number / 100)] + ' hundred' + ((number % 100 > 0) ? " and " + getWord(number % 100) : '');
    }
});

var getWord = (function(number) {
    var mild_1 = Math.floor(number / 1e9);
    var mild_2 = Math.floor(number % 1e9);
    var tril_1 = Math.floor(number / 1e12);
    var tril_2 = Math.floor(number % 1e12);
    if (number < 20 || number < 1e3) {
        return less_1000(number);
    }
    if(number < 1e6){
        return getWord(Math.floor(number/1e3)) + " thousand" + ((number % 1e3 > 0) ? " " + getWord(number % 1e3) : '');
    }
    if(number < 1e9){
        return getWord(Math.floor(number/1e6)) + " million" + ((number % 1e6 > 0) ? " " + getWord(number % 1e6) : '');
    }
    if(number < 1e12){
        in_word = less_1000(mild_1) + " milliard";
        Math.floor(mild_2/1e6) > 0 ? (in_word += " " + getWord(Math.floor(mild_2/1e6)) + " million") : in_word += '';
        (mild_2 % 1e6 > 0) ? (in_word += " " + getWord(mild_2 % 1e6)) : in_word += '';
        return in_word;
    }
    if(number < 1e15) {
        in_word = less_1000(tril_1) + " trillion";
        Math.floor(tril_2/1e9) > 0 ? (in_word += " " + less_1000(Math.floor(tril_2 / 1e9)) + " milliard") : in_word += '';
        Math.floor(mild_2/1e6) > 0 ? (in_word += " " + getWord(Math.floor(mild_2/1e6)) + " million") : in_word += '';
        (mild_2 % 1e6 > 0) ? (in_word += " " + getWord(mild_2 % 1e6)) : in_word += '';
        return in_word;
    }else{
        alert("Введите число от нуля до триллиона!");
    }
});

$(document).ready(function() {
    $("form#number-form").submit(function (event) {
        var number = parseInt($('#num').val());
        if(number < 0 || isNaN(number) == true){
            alert("Введите число от нуля до триллиона!");
            location.reload();
        }else if (number == 0){
            $('#quote').append("zero");
            $('#btn-click').hide();
            $('#btn-again').show();
        }else{
            var word = getWord(number);
            $('#quote').append(word);
            $('#btn-click').hide();
            $('#btn-again').show();
        }
        $("#btn-again").click(function (event) {
            word = '';
            $('#quote').empty();
            location.reload();
        });
        event.preventDefault();
    });
});





