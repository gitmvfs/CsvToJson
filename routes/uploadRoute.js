const router = require("express").Router()
const uploadCSV = require("../utils/multerStorage")
const csvToJson = require("convert-csv-to-json")
const {resolve} = require("path")

router.post('/upload-csv', uploadCSV.single('csvFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const jsonResponse = csvToJson.getJsonFromCsv(req.file.path)
    console.log(jsonResponse[0])
    try {
        res.status(200)
            .json({
                status: "200",
                msg: "File upload success",
                dataFile: jsonResponse
            });

    } catch (error) {
        console.error('Error processing CSV:', error);
        res.status(500)
            .json({
                status:"500", 
                msg: 'Internal server error' 
            });
    }
});

module.exports = router