import React from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayModal (props) {
  const {handleClose, show} = props;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oge86qg', 'template_8ux5ykj', e.target, 'user_zwK8twhy4NRmlB4iTodFU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
  }

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <main>
          <form onSubmit={sendEmail}>

            <input type='text' name='name' placeholder='Your name' required />
            <label>Contact Number</label>
            <input type='tel' name='number' placeholder='Phone Number' />
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' required/>
            <label>Message</label>
            <textArea name='message' cols='32' rows='10' style={{height: '200px', resize: 'vertical'}} placeholder='Message' required/>
            <input type='submit' value='Send' onClick={handleClose}/>

          </form>
        </main>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleClose}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  )
}