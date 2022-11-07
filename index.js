const fs = require("fs")

fs.readFile('task.json', (err, res) => {
    if(err) throw err;
    const data = JSON.parse(res)
    console.log(data)
})