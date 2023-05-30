export const optionsFormat = (arr) => {
    return arr.map((e) => ({value: e.sigla, label: e.nome}))
}