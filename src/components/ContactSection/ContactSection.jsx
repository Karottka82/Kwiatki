import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

export const ContactSection = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xamdgq9", "template_o8h4iqe", form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="mb-4" id="contact">
      <h2 className="logo">Royal Green</h2>
      <p className="text-center w-responsive mx-auto mb-5"></p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row" style={{ margin: "10px" }}>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Imię"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Twój email"
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "10px" }}>
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Temat"
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "10px" }}>
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Wiadomość"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#07240d", padding: "10px 60px" }}
              >
                Wyślij
              </button>
            </div>
            <div className="status"></div>
          </form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li style={{ padding: "10px 10px" }}>
              <i className="fas fa-phone mt-4 fa-2x"></i>

              <a
                href="tel: 534 567 89"
                style={{
                  color: "black",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FaPhone /> 534 567 89{" "}
              </a>
            </li>
            <li style={{ padding: "10px 10px" }}>
              <i className="fas fa-envelope mt-4 fa-2x"></i>

              <a
                href="mailto:royalgreencracow@gmail.com"
                style={{
                  color: "black",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FaEnvelope />
                royalgreencracow@gmail.com
              </a>
            </li>
            <li style={{ padding: "10px 25px" }}>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <a
                href="https://www.google.com/maps/place/Kraków"
                style={{
                  color: "black",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FaMapMarkerAlt /> Kraków
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
