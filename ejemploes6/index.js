let sumar = document.getElementById('sumar');
let resultado = document.getElementById('resultado');
sumar.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    resultado.innerHTML = sumando(parseInt(num1) || undefined,
        parseInt(num2) || undefined, parseInt(num3) || undefined);
});
sumando = (a = 0, b = 0, c = 0) => a + b + c;