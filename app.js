let nummer = localStorage.getItem('nummer')

if(nummer == null){
    nummer = 1;
};

localStorage.setItem('nummer', parseInt(nummer)+ 1);

document.getElementById("nummer").innerHTML = "Du har besökt sidan " + nummer + " gånger"