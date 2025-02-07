import userModel from "../models/userModel.js";
import Formdata from 'form-data';
import axios from 'axios';

export const generateImage = async (req,res) => {
    try {
        
        const {userId, prompt} = req.body;

        //find the user using the userId
        const user = await userModel.findById(userId);

        if(!user || !prompt){
            return res.json({success : false, message : 'Missing Details'});
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0){
            return res.json({success : false, message : 'Credits finished...please recharge', creditBalance : user.creditBalance});
        }

        //create multipart form data as required by the API
        const formdata = new FormData();
        formdata.append('prompt',prompt);
        
        //send the form data to the api endpoint
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',formdata,{
            //provide headers here
            headers: {
                'x-api-key': process.env.CLIP_API,
            },
            responseType : 'arraybuffer'
        });

        //convert the recieved image into base64
        const base64Image = Buffer.from(data,'binary').toString('base64');

        //make an image url
        const resultImage = `data:image/png;base64,${base64Image}`;

        //deduct the user credits
        await userModel.findByIdAndUpdate(user._id,{creditBalance : user.creditBalance - 1});

        //send the API response
        res.json({success : true,message : "Image Generated",creditBalance : user.creditBalance - 1,resultImage});

    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : error.message});
    }
}