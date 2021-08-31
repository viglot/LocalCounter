const containerElement = document.getElementById('container');

let count = parseInt(localStorage.getItem('count'));

if(isNaN(count)){
    count = 0;
}

count++;
 
containerElement.textContent = `Du har besökt denna sida ${count} gånger`;

localStorage.setItem('count', count);