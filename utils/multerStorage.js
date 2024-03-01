const multer = require("multer")
const {resolve} = require("path")
const dataAtual = require("../utils/dataAtual")

const storageCSV = multer.diskStorage({
    destination: resolve(__dirname, "../", "upload"), // Define o local onde os arquivos serão salvos
    filename: function(req, file, cb) {
        const nomeArquivo = "cadastro-alunos-" + dataAtual() + ".csv";
        cb(null, nomeArquivo);
    }
});

const uploadCSV = multer({ storage: storageCSV });

module.exports = uploadCSV