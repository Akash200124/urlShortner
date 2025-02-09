
import express from "express";
import cors from "cors";

const app =express();

app.use(cors());

cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
})

app.use(express.json({ "limit": "16kb" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// routes
import urlRoutes from "./src/routes/url.route.js";


app.use("/",urlRoutes);






export {app}