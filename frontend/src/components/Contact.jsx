import React from 'react'; 
import msg_icon from '../assets/msg-icon.png'; 
import mail_icon from '../assets/mail-icon.png'; 
import phone_icon from '../assets/phone-icon.png'; 
import location_icon from '../assets/location-icon.png'; 
import dark_arrow from '../assets/dark-arrow.png'; 
 
const Contact = () => { 
    const [result, setResult] = React.useState(""); 
 
    const onSubmit = async (event) => { 
        event.preventDefault(); 
        setResult("Sending...."); 
        const formData = new FormData(event.target); 
 
        formData.append("access_key", "e5eaf3fb-98bb-4f20-b9f9-4a8f88cd925e"); 
 
        const response = await fetch("https://api.web3forms.com/submit", { 
            method: "POST", 
            body: formData 
        }); 
 
        const data = await response.json(); 
 
        if (data.success) { 
            setResult("Form Submitted Successfully"); 
            event.target.reset(); 
        } else { 
            console.log("Error", data); 
            setResult(data.message); 
        } 
    }; 
 
    return ( 
        <div className="container mx-auto my-20 px-12 flex flex-col lg:flex-row justify-between"> 
            <div className="flex-1 text-gray-700"> 
                <h3 className="text-2xl font-medium text-blue-900 mb-5 flex items-center"> 
                    Send us a message 
                    <img src={msg_icon} alt="" className="ml-2 w-9" /> 
                </h3> 
                <p className="max-w-lg mb-10"> 
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community. 
                </p> 
                <ul> 
                    <li className="flex items-center mb-5"> 
                        <img src={mail_icon} alt="" className="w-6 mr-3" />Contact@WiseWallet.dev 
                    </li> 
                    <li className="flex items-center mb-5"> 
                        <img src={phone_icon} alt="" className="w-6 mr-3" />+1 123-456-7890 
                    </li> 
                    <li className="flex items-center mb-5"> 
                        <img src={location_icon} alt="" className="w-6 mr-3" />VIIT, Kondhwa,<br /> Pune, Maharashtra, India 
                    </li> 
                </ul> 
            </div> 
            <div className="flex-1"> 
                <form onSubmit={onSubmit} className="space-y-4"> 
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Your Name</label> 
                        <input type="text" name="name" placeholder="Enter Your Name" required className="block w-full bg-gray-100 p-3 mt-1 border border-gray-300 rounded-md" /> 
                    </div> 
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label> 
                        <input type="tel" name="phone" placeholder="Enter your mobile" required className="block w-full bg-gray-100 p-3 mt-1 border border-gray-300 rounded-md" /> 
                    </div> 
                    <div> 
                        <label className="block text-sm font-medium text-gray-700">Write your message here</label> 
                        <textarea name="message" rows="6" placeholder="Enter your message" className="block w-full bg-gray-100 p-3 mt-1 border border-gray-300 rounded-md"></textarea> 
                    </div> 
                    <button type="submit" className="bg-blue-900 text-white py-3 px-5 rounded-md">Submit now</button> 
                </form> 
                <span className="block mt-5">{result}</span> 
            </div> 
        </div> 
    ) 
} 
 
export default Contact;