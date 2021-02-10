let holding = {};

function addHolding() {
    const pair = document.getElementById('pair');
    const volume = document.getElementById('volume');
    const price = document.getElementById('price');
    holding[pair.value] = {
        "volume": volume.value,
        "price": price.value
    };
    pair.value = "";
    volume.value = "";
    price.value = "";

    updatePortfolio();
}

function updatePortfolio() {
    let holdingsTable = document.getElementById('holdings-table');
    holdingsTable.textContent = "";
    for (const pair in holding) {
        let row = holdingsTable.insertRow();
        row.insertCell().textContent = pair;
        row.insertCell().textContent = holding[pair].volume;
        row.insertCell().textContent = holding[pair].price;
    }
}
