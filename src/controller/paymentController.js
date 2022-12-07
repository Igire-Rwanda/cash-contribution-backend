import axios from "axios";
const {v4} = require("uuid")
export const initiatePayment=async(req,res)=>{
    const paymentObj={
        tx_ref: v4(),
        amount: "100",
        currency: "RWF",
        redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a"
        },
        customer: {
            email: "icyezavanessa@gmail.com",
            phonenumber: "0789898410",
            name: "icyeza vanessa"
        },
        customizations: {
            title: "C-cash contibution",
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
        }
    }
    const response= await axios.post("https://api.flutterwave.com/v3/payments",paymentObj,{headers:{"Authorization":"Bearer FLWSECK_TEST-064a309f6bb775864187112f12220b1a-X"}})
    return res.send(response.data);
}