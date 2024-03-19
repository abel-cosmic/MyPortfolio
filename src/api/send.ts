import axios from "axios";

// Define the interface separately for better structure and reusability
interface EmailData {
  to: string;
  subject: string;
  text: string;
}

export const sendMessage = async (emailData: EmailData) => {
  console.log(emailData)
  try {
    const { data } = await axios.post(`http://localhost:3000/api/send`, emailData,{
      headers:{
        'Content-Type': 'application/json',
      }
    });
    return {
      data: data,
    };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
