import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_b1383rj",        // ✅ Service ID
        "template_wmonppv",       // ✅ ONE Template ID (IMPORTANT)
        form.current,
        "BW4gjW17efzusnQ1Q"       // ✅ Public Key
      )
      .then(() => {
        setShowPopup(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EMAIL ERROR:", error);
        setErrorMsg("Email not sent. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <section  id="ContactMe" className="contact">
        <h2 className="contact-title">
          Contact <span>Me!</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="user_phone"
            placeholder="Mobile Number"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Let's Talk"}
          </button>

          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
      </section>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Thank You! 🎉</h3>
            <p>Your details have been submitted successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactMe;
