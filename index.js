import express from "express"
const app = express()

app.use(express.json())

let albums = []

app.get("/", (req,res) => {
    res.send("Welcome to my albums page!")
})

app.get("/albums", (req,res) => {
    res.status(202).json(albums)
})

app.post("/new-album", (req,res) => {
    const {band, albumTitle, albumYear} = req.body

    let addId = {
        id : albums.length + 1,
        band: band,
        albumTitle: albumTitle,
        albumYear: albumYear
    }

    albums.push(addId)

    res.status(201).json(addId)
})

app.listen(3002, () => {
    console.log("Server is running on PORT 3002")
})