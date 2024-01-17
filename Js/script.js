document.getElementById("squareForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const sideLength = parseFloat(document.getElementById("sideLength").value);
    const area = sideLength * sideLength;

    document.getElementById("result").innerHTML = `Luas Persegi: ${area.toFixed(2)} satuan persegi`;
});

function resetForm() {
    document.getElementById("squareForm").reset();
    document.getElementById("result").innerHTML = "";
}
