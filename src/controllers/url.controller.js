import { Url } from "../models/url.model.js";

const CreateUrl = async (req, res) => {
    const { longurl, shorturl } = req.body;

    if (!longurl || !shorturl) {
        return res.status(400).json({
            "success": false,
            "message": "All fields are required"
        })
    }

    try {
        const url = await Url.findOne({ shorturl });
        if (url) {
            return res.status(400).json({
                "success": false,
                "message": "Url already exists"
            })
        }
        
    } catch (error) {
        console.log("Something went wrong while checking url : ", error.message);
        
    }

     
    try {
        const url = await Url.create({ longurl, shorturl });
        return res.status(200).json({
            "success": true,
            "data": url
        })
    } catch (error) {
        console.log("Something went wrong while creating url : ", error.message);
        return res.status(500).json({
            "success": false,
            "message": "Something went wrong while creating url"
        })
    }
}

const GetUrl = async (req, res) => {

    const { shorturl } = req.params;
    // console.log("shorturl", shorturl);

    if (!shorturl) {
        return res.status(400).json({
            "success": false,
            "message": "All fields are required"
        })
    }

    try {
        const url = await Url.findOne({ shorturl });

        console.log("url", url);
        if (!url) {
            return res.status(404).json({
                "success": false,
                "message": "Url not found"
            })
        }
        
        res.redirect(url.longurl);

    } catch (error) {
        console.log("Something went wrong while getting url : ", error.message);
        return res.status(500).json({
            "success": false,
            "message": "Something went wrong while getting url"
        })
    }

}


export {
    CreateUrl,
    GetUrl
} 