function mudarTexto()
{
    var caixa = document.getElementById("caixa");
    var p1 = document.getElementById("p1");

    p1.innerHTML = caixa.value;
    caixa.innerHTML = p1.value;
}
