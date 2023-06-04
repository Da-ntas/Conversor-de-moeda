import { getDate } from "./format";

export function history (type, data) {
    const objModel = {
        type: "",
        from: "",
        to: "",
        value1: "",
        value2: "",
        dateModified: ""
    }

    if(type === "moeda"){
        const storage = JSON.parse(sessionStorage.getItem("moeda") ?? "[]");

        objModel["type"] = type
        objModel["from"] = data.from
        objModel["to"] = data.to
        objModel["value1"] = data.value1
        objModel["value2"] = data.value2
        objModel["dateModified"] = getDate()

        storage.push(objModel)
    
        sessionStorage.setItem("moeda", JSON.stringify([...new Set(storage)]))
    }
    if(type === "medida"){
        const storage = JSON.parse(sessionStorage.getItem("medida") ?? "[]");

        objModel["type"] = type
        objModel["from"] = data.from
        objModel["to"] = data.to
        objModel["value1"] = data.value1
        objModel["value2"] = data.value2
        objModel["dateModified"] = getDate()

        storage.push(objModel)
    
        sessionStorage.setItem("moeda", JSON.stringify([...new Set(storage)]))
    }
}