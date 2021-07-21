const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) =>
{
    fs.readdir("C:\Program Files", (err, data) =>
    {
        if (err) throw err;
        else {
            res.send(
                data
                    .map((e) =>
                    {
                        return e.includes(".")
                            ? `<div style="display:flex;align-items:center;margin-bottom:5px">📄&nbsp<span>${e}<span></div>`
                            : `<div style="display:flex;align-items:center">📁&nbsp<span>${e}</span></div>`;
                    })
                    .join(" ")
            );
        }
    });
});

app.listen(5000,()=>{console.log('Server started on 5000');});