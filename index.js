function ageindays(){
    var yearofbirth = prompt('Enter the year you were born');
    var ageindayss = (2022-yearofbirth)*365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are '+ ageindayss +' days old');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

