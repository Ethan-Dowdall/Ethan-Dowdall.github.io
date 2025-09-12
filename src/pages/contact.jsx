import './contact-app.css'
import Header from './header.jsx'

function Contact() {
 
  return (
    <>
      <Header />
      <div className="formContainer">
        <form>
          <label for="name">Name:</label><br/>
          <input type="text" id="name" name="name" /><br/>
          <label for="email">Email:</label><br/>
          <input type="text" id="email" name="email" /><br/>
          <label for="message">Message:</label><br/>
          <textarea id="message" name="message" rows="4" cols="50"></textarea><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default Contact
