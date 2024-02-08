function addNum() {
    const ip1 = document.getElementById('inp1').value;
    const ip2 = document.getElementById('inp2').value;

    fetch(`http://arithmetic-service-ybp6.onrender.com/add/${ip1}/${ip2}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}