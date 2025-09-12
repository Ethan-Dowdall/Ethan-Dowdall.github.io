// src/Pages/Login.jsx

import React from "react";
import Header from '../components/header';


export function Contact() {
  return (
    <div>
      <Header />
      <h1>Get in touch!</h1>
      <div className="form-container">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label><br/>
          <label>
            Email:
            <input type="email" name="email" required />
          </label><br/>
          <label>
            Purpose:
            <select name="purpose" required>
              <option value="">Select</option>
              <option value="inquiry">General Inquiry</option>
              <option value="inquiry">Professional</option>
              <option value="inquiry">Academic</option>
            </select>
          </label><br/>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
