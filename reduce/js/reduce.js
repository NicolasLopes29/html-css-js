function teste() {

    const numeros = [10, 20, 30, 40];

    const soma = numeros.reduce((total, num) => total + num, 0);

    const pNumerosReduce = document.querySelector('#exemplo');

    pNumerosReduce.textContent = `A soma dos números é:  ${soma}`;
}