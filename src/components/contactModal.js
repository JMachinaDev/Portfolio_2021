import React from 'react';
import emailjs from 'emailjs-com';
import { Modal} from 'react-bootstrap';

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
    <Modal className="modal-content-box modal-style med-theme border-style" show={show} onHide={handleClose} >
      <Modal.Header closeButton/>
      <Modal.Body>
        <main className="modal-form">
          <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='name' placeholder='Your name' required />
            <label>Contact Number</label>
            <input type='tel' name='number' placeholder='Phone Number' />
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' required/>
            <label>Message</label>
            <textArea name='message' cols='32' rows='10' style={{height: '200px', resize: 'vertical'}} placeholder='Message' required/>
            <input className="submit-button text-xl" type='submit' value='Send'/>
          </form>
        </main>
      </Modal.Body>
    </Modal>
  )
}