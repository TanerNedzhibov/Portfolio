import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const ContactCard = ({type, contactLink, refSend}) => {


    let getIcon = "";

    if(type === "Email" || type === "email"){
        getIcon = <EmailIcon/>
    }
    else if(type === "WhatsApp" || type === "Whats App" || type === "whatsapp" || type === "whats app"){
        getIcon = <WhatsAppIcon />
    }
    else if(type === "Phone" || type === "phone"){
        getIcon = <PhoneIphoneIcon />
    }
    else{
        getIcon = "Invalid type! Plese enter: Email, WhatsApp or phone"
    }


  return (
    <div className='contactCardContainer'>
        <div id='test'>{getIcon}</div>
      <p id='typeText'>{type}</p>
      <p id='contactLinkText'>{contactLink}</p>
      <a id='sendMessage' onClick={() => {navigator.clipboard.writeText(contactLink)}}>Send a message</a>
    </div>
  )
}

export default ContactCard
