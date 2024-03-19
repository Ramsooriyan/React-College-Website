import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import arrowIcon from '../../assets/white-arrow.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2defece2-6735-4086-b1a1-05c85e9c18d8");

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
    <section className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ducimus accusantium perferendis deserunt nemo iure consectetur voluptatum fugiat vero magnam blanditiis facilis harum possimus reprehenderit saepe optio.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />info@123@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 982428283</li>
          <li><img src={location_icon} alt="" />xyz road, pondy.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name:</label>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <label>Phone Number:</label>
          <input type="tel" name="phone" placeholder='Enter your number' required/>
          <label>Write your message:</label>
          <textarea name="messaage" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now<img src={arrowIcon} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  )
}

export default Contact