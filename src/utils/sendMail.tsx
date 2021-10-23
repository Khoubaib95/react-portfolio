import axios from "axios";
type mail = {
  language: string;
  fullName: string;
  email: string;
  subject?: string;
  message: string;
  setIsSendErr: any;
  setIsSendSucc: any;
};

async function sendMail({
  language,
  fullName,
  email,
  subject,
  message,
  setIsSendErr,
  setIsSendSucc,
}: mail) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/send_mail`, {
      language,
      fullName,
      email,
      subject,
      message,
    })
    .then((res) => {
      console.log("res :");
      console.log(res.status);
      setIsSendSucc(true);
    })
    .catch((e) => setIsSendErr(true));
}
export default sendMail;
