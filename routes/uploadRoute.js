const csvParser = require("csv-parser")
const multer = require("multer")
const {resolve} = require("path")


const storageCSV = multer.diskStorage({
    destination: resolve (__dirname , "../" , "upload"), // Define o local aonde vai guardar no caso => /diretorioAtual/../upload
    filename: "cadastro-alunos-" + "horaatual" + ".csv" // Define o nome do arquivo

})

app.post('/upload-csv', storageCSV.single('csvFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log(req.file)

    try {
        const dataFile = await csvReader(csvFilePath);
        res.status(200).json({ data: "File uploaded" , dataFile: dataFile});
    } catch (error) {
        console.error('Error processing CSV:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});