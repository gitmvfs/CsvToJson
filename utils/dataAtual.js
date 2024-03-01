function  dataAtual (){

    const data = new Date().toLocaleDateString().replace("/","-").replace("/","-")
    const hora = new Date().toLocaleTimeString().replace(":","-").replace(":","-")

    return data + "_" + hora
}

module.exports = dataAtual