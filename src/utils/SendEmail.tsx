import axios from 'axios';


type data = {
   name:string,
   email:string
   htmlContent: string
}
const SendEmail = async  (data:data) => {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    const { email, htmlContent } = data;
    const payload = {
    sender: { name: 'MMBM Records', email: 'akinjide19@gmail.com' },
    to: [{ email }],
    subject: 'Welcome to MMBM RECORDS 🎶',
    htmlContent: htmlContent
  };

  try {
    const res = await axios.post('https://api.brevo.com/v3/smtp/email', payload, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });
    console.log(res.status)
    if(res.data.messageId){
        console.log('success')
    }

    return { success: true, id: res.data.messageId };

  } catch (error: any) {
    console.error(error.response?.data || error.message);
    
  }

}

export default SendEmail