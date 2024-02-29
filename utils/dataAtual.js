function  dataAtual (){

    const data = new Date().toLocaleDateString().replace("/","-").replace("/","-")
    const hora = new Date().toLocaleDateString().replace(":","-").replace(":","-")

    return data + "_" + hora
}

module.exports = dataAtual