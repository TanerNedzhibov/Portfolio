import React, { useRef, useState } from 'react'
import ContactCard from '../../Components/ContactCard'
import emailjs from '@emailjs/browser';
import './Contact.css'


const Contact = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    message: ""
  })

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);

    emailjs.sendForm('service_4i88saq', 'template_0ey752w', form.current, 'pSypR_nrFMIak3sI5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  }

  return (
    <section id='contactPage'>
      <h2>Contact</h2>
      <div className='contactPageContainer'>
        <div className='ContactCardsMainContainer'>
          <ContactCard type="Email" contactLink="tanernedzhibov@gmail.com"/>
          <ContactCard type="WhatsApp" contactLink="+359 896579265"/>
        </div>
        <div className='formContainer'>
          <form onSubmit={handleSubmit} ref={form}>
            <input id='fullName' className='inputArea' 
                  required
                  type="text" 
                  name="user_name"
                  placeholder='Full name'
                  onChange={(event) => setInputs({...inputs, fullName: event.target.value})}/>
            <input className='inputArea' 
                  required
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  type="email" 
                  placeholder='Your email'
                  name="user_email"
                  onChange={(event) => setInputs({...inputs, email: event.target.value})}/>
            <textarea id='messageArea'
                  required 
                  type="textArea"
                  name='message'
                  placeholder='Your message'
                  onChange={(event) => setInputs({...inputs, message: event.target.value})}/>     
            <button type='submit'>Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
