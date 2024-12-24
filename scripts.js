let palavra = prompt("Digite uma palavra para verificar se e um palindromo:");

let Palindromo = true;


for (let i = 0; i < Math.floor(palavra.length / 2); i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        Palindromo = false;
        break;
    }
}

if (Palindromo) {
    alert(palavra + " e um palindromo.");
} else {
    alert(palavra + " não e um palindromo.");
}
