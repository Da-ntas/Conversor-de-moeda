export function formatarMoeda(valor) {
    // Converte o valor para string e remove caracteres não numéricos
    const teste = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    console.log("teste", teste)

    return valor
}
  