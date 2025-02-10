import React from "react";

const contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label>Message</label>
            <textarea rows="4" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
