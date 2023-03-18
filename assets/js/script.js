let nContato = document.getElementById("nome");
let nTelefone = document.getElementById("numero");
const form = document.getElementById("form-agenda");
const nomes = [];
const numeros = [];
let linhas = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    if (nomes.includes(nContato.value)) {
        nContato.classList.remove("error");
        alert(`O contato: ${nContato.value} já foi inserido!`);
    } else if (numeros.includes(nTelefone.value)) {
        alert(`O Número: ${nTelefone.value} já existe!`);
    } else {
        nomes.push(nContato.value);
        numeros.push(nTelefone.value);
        console.log(numeros);
        console.log(nomes);
        let linha = "<tr>";
        linha += `<td>${nContato.value}</td>`;
        linha += `<td>${nTelefone.value}</td>`;
        linha += "</tr>";

        linhas += linha;
    }

    nContato.value = "";
    nTelefone.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

nTelefone.addEventListener("keypress", () => {
    let cell = nTelefone.value.length;

    if (cell === 0) {
        nTelefone.value += "(";
    } else if (cell === 3) {
        nTelefone.value += ")";
    } else if (cell === 9) {
        nTelefone.value += "-";
    }
});

nContato.addEventListener("keyup", (e) => {
    if (nomes.includes(nContato.value)) {
        nContato.classList.add("error");
    }
    if (!nomes.includes(nContato.value)) {
        nContato.classList.remove("error");
    }
});
