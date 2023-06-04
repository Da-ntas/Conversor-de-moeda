import moment from "moment/moment";

moment.locale('pt-br');

export const optionsFormat = (arr) => {
    return arr.map((e) => ({value: e.sigla, label: e.nome}))
}

export const getDate = () => {
    return moment(new Date()).format('DD/MM/YYYY, h:mm a');
}