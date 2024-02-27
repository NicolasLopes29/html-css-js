function teste() {
    
    const idades = [22, 16, 52, 40, 12, 23];
    
    function checkAdulto(idade) {
        return idade >= 18;
    }

    const numerosFiltrados = idades.filter(checkAdulto);

    const pNumerosFiltrados = document.querySelector('#exemplo');

    const idadesTexto = numerosFiltrados.join(', '); 

    pNumerosFiltrados.textContent = `Números filtrados: ${idadesTexto}`;
}