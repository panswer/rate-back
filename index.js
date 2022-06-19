const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const pathWWW = path.resolve(__dirname, './www');

if (!fs.existsSync(pathWWW)) {
    console.log("There is not a front");
} else {
    app.use(express.static(pathWWW));
}

const indexPublic = path.resolve(__dirname, './www/index.html');

if (!fs.existsSync(indexPublic)) {
    console.log("There is not a front index");
    process.exit(1);
}

app.get('/*', (req, res) => {
    res.send(indexPublic);
});

const port = process.env.PORT || 3001;
app.listen(port, err =>
    err ?
        console.log(err) :
        console.log(`Server on ${port}`)
);