export const currency = [
    {
        sigla: "BRL",
        nome: "Real Brasileiro",
        codigo_iso: "BRL",
        simbolo: "R$"
    },
    {
        sigla: "USD",
        nome: "Dólar Americano",
        codigo_iso: "USD",
        simbolo: "$"
    },
    {
        sigla: "EUR",
        nome: "Euro",
        codigo_iso: "EUR",
        simbolo: "€"
    },
    {
        sigla: "JPY",
        nome: "Iene Japonês",
        codigo_iso: "JPY",
        simbolo: "¥"
    },
    {
        sigla: "GBP",
        nome: "Libra Esterlina",
        codigo_iso: "GBP",
        simbolo: "£"
    },
    {
        sigla: "AUD",
        nome: "Dólar Australiano",
        codigo_iso: "AUD",
        simbolo: "A$"
    },
    {
        sigla: "CAD",
        nome: "Dólar Canadense",
        codigo_iso: "CAD",
        simbolo: "C$"
    }
]
  

export const currencyValues = {
    "BRL": {
        USD: 5.04,
        EUR: 5.41,
        JPY: 0.036,
        GBP: 0.16,
        AUD: 3.28,
        CAD: 3.70
    },
    "USD": {
        BRL: 0.20,
        EUR: 1.07,
        JPY: 0.0072,
        GBP: 1.24,
        AUD: 0.65,
        CAD: 0.74
    },
    "EUR": {
        BRL: 0.18,
        USD: 0.93,
        JPY: 0.0067,
        GBP: 1.16,
        AUD: 0.61,
        CAD: 0.68
    },
    "JPY": {
        BRL: 27.76,
        USD: 139.82,
        EUR: 150.11,
        GBP: 173.55,
        AUD: 91.16,
        CAD: 102.81
    },
    "GBP": {
        BRL: 0.16,
        USD: 0.81,
        EUR: 0.86,
        JPY: 0.0058,
        AUD: 0.53,
        CAD: 0.59
    },
    "AUD": {
        BRL: 0.30,
        USD: 1.53,
        EUR: 1.65,
        JPY: 0.011,
        GBP: 1.90,
        CAD: 1.13
    },
    "CAD": {
        BRL: 0.27,
        USD: 1.36,
        EUR: 1.46,
        JPY: 0.0097,
        GBP: 1.69,
        AUD: 0.89
    }
}

export const medidas = [
    {
        sigla: "KM",
        nome: "Quilômetro",
        simbolo: "KM"
    },
    {
        sigla: "HM",
        nome: "Hectômetro",
        simbolo: "HM"
    },
    {
        sigla: "DAM",
        nome: "Decâmetro",
        simbolo: "DAM"
    },
    {
        sigla: "M",
        nome: "Metro",
        simbolo: "M"
    },
    {
        sigla: "DM",
        nome: "Decímetro",
        simbolo: "DM"
    },
    {
        sigla: "CM",
        nome: "Centímetro",
        simbolo: "CM"
    },
    {
        sigla: "MM",
        nome: "Milímetro",
        simbolo: "MM"
    },
]

export const medidasValues = {
    M: {
      KM: 1000,
      HM: 100,
      DAM: 10,
      DM: 0.1,
      CM: 0.01,
      MM: 0.001
    },
    KM: {
      M: 0.001,
      HM: 0.01,
      DAM: 0.1,
      DM: 10000,
      CM: 100000,
      MM: 1000000
    },
    HM: {
      M: 0.01,
      KM: 10,
      DAM: 100,
      DM: 1000,
      CM: 10000,
      MM: 100000
    },
    DAM: {
      M: 0.1,
      KM: 0.001,
      HM: 0.01,
      DM: 100,
      CM: 1000,
      MM: 10000
    },
    DM: {
      M: 10,
      KM: 0.0001,
      HM: 0.001,
      DAM: 0.01,
      CM: 10,
      MM: 100
    },
    CM: {
      M: 100,
      KM: 0.00001,
      HM: 0.0001,
      DAM: 0.001,
      DM: 0.1,
      MM: 10
    },
    MM: {
      M: 1000,
      KM: 0.000001,
      HM: 0.00001,
      DAM: 0.0001,
      DM: 0.01,
      CM: 0.1
    }
}