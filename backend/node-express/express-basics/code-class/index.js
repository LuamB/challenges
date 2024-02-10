import express from "express"
import path from "path"

const PORT = process.env.PORT || 3000
const app = express();
app.use(express.urlencoded({
    extended: true
}))

const about = {
    name: "Our company",
    address: "Ritterstr. 12",
    hours: "9:00 - 18:00 Mon to Fri"
}

const staff = ["John", "Sally", "Jane"]

app.get("/", (request, response) => {
    console.log("Someone wants the homepage");
    // response.send("Welcome to the homepage!")

    const dirName = path.dirname(new URL(import.meta.url).pathname);
    response.sendFile(path.join(dirName, 'index.html'))
})

app.get("/about.json", (req, res) => {
    res.json(about)
})

app.get("/staff.json", (req, res) => {
    res.json(staff)
})

app.get("/staff/:person", (req, res) => {
    const {person} = req.params
    res.json({
        name: person,
        description: `${person} is a valued employee here are our company!`,
    })
})

app.get("/contact", (req, res) => {
    const dirName = path.dirname(new URL(import.meta.url).pathname);
    res.sendFile(path.join(dirName, 'contact-form.html'))
})
app.post("/contact", (req, res) => {
    console.log(req.body.message);
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
