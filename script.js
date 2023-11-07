function calcularIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var resultado = document.getElementById('resultado');
    var categoria = document.getElementById('categoria');

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        var imc = weight / (height * height);
        resultado.textContent = imc.toFixed(2);

        if (imc < 18.5) {
            categoria.textContent = 'Bajo peso';
        } else if (imc < 25) {
            categoria.textContent = 'Peso normal';
        } else if (imc < 30) {
            categoria.textContent = 'Sobrepeso';
        } else {
            categoria.textContent = 'Obeso';
        }
    } else {
        resultado.textContent = 'Por favor, ingresa valores válidos para peso y altura.';
        categoria.textContent = '';
    }
}
