const livro = {
    titulo: "Uma esperanca",
    autor: "Maria",
    paginas: "46",
    disponivel: "Sim",
    detalhes: function() {
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, está disponive? ${this.disponivel}! E com ${this.paginas} paginas!`);
    }
};

console.log(livro.titulo);
console.log(livro["autor"]);

livro.editora = "Portas abertas";

livro.detalhes();

const biblioteca = {
    livros: ['Uma esperança','Perú de ação de graças','Abatedouro, a realidade'],
}

for (let livros of biblioteca.livros){
    console.log(livros);
}