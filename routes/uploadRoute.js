const router = require("express").Router()
const uploadCSV = require("../utils/multerStorage")
const csvToJson = require("convert-csv-to-json")

router.post('/upload-csv', uploadCSV.single('csvFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Falha ao salvar arquivo' });
    }

    const jsonResponse = csvToJson.getJsonFromCsv(req.file.path)
    
    console.log(jsonResponse)
    try {
        res.status(200)
            .json({
                status: "200",
                msg: "Arquivo salvo com sucesso",
                dataFile: jsonResponse
            });

    } catch (error) {
        console.error('Erro ao processar arquivo: ', error);
        res.status(500)
            .json({
                status:"500", 
                msg: 'Erro do servidor' 
            });
    }
});

module.exports = router