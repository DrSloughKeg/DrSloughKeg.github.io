import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rsk4mkp", "template_2ot3tq4", form.current, {
        publicKey: "SI1c4ahLxvm3Teif8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSent(true);
          setFormValues({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSent(false);
          setError(true);
        }
      );
  };

  return (
    <div className="mainBox">
      <h1>Contact</h1>
      <p>
        Please feel free to contact me. You can send me an email here or at
        bpye1995@gmail.com
      </p>

      {sent && (
        <div>
          <p>Message sent!</p>
        </div>
      )}
      {error && (
        <div>
          <span>Something went wrong.</span>
        </div>
      )}
      <div className="ContactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="links">
        <div>
          <a href="www.linkedin.com/in/benjamin-pye-756aa02b3">Linkedin</a>
        </div>
        <div>
          <a href="www.github.com/DrSloughKeg">Github</a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
