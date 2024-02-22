const express = require("express")
const multer = require("multer")
const csvParser = require("csv-parser")
const fs = require('fs');
const app = express()
const cors = require("cors")
const upload = multer({storage: multer.memoryStorage(), }); // Define the destination folder for file uploads

//DotEnv
const serverPort = 3000

app.use(cors())

function csvReader(csvFilePath) {

    const responseData = []

    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on('data', (data) => responseData.push(data))
            .on('end', () => {
                // `results` now contains an array of objects parsed from the CSV file
                // You can process the data further here, or send it as a response
                console.log(responseData)
                resolve(responseData)
            })
    })

}

app.post('/upload-csv', upload.single('csvFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const csvFilePath = req.file.buffer;

    try {
        const dataFile = await csvReader(csvFilePath);
        res.status(200).json({ data: "File uploaded" , dataFile: dataFile});
    } catch (error) {
        console.error('Error processing CSV:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(serverPort, () => console.log(`Open server: http://localhost:${serverPort}`))