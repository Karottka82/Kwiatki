import React, { useState } from "react";
import "./contact.css";
import image7 from "./zdjecia/7.png";
import { Container, Row, Col } from "react-bootstrap";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      message: message,
    };

    console.log("Wysyłanie wiadomości:", data);
    // Tutaj można dodać kod do wysyłania e-maila, np. za pomocą Fetch API lub innej metody

    setEmail("");
    setMessage("");
  };

  return (
    <section id="kontakt" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center">
            <img src={image7} alt="Kontakt" className="contact-image img-fluid" />
          </Col>
          <Col lg={6}>
            <div className="kontakt-text">
              <h2 className="mb-4">Skontaktuj się z nami</h2>
              <div className="kontakt-data">
                <div>
                  <strong>Telefon:</strong> <span>456-987-998</span>
                </div>
                <div>
                  <strong>E-mail:</strong> <span>royalgreencracow@gmail.com</span>
                </div>
                <div>
                  <strong>Adres:</strong> <span>Salwatorska 25, Kraków</span>
                </div>
              </div>
              <div className="mail">
                <div className="mail-text">Wyślij nam wiadomość</div>
                <div className="mail-box">
                  <label>E-mail: </label>
                  <input
                    type="email"
                    id="mail-data"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Twój adres e-mail"
                  />
                </div>

                <div>
                  <label htmlFor="message">Wiadomość:</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    rows="5"
                    placeholder="Twoja wiadomość"
                  />
                </div>
                <button className="custom-button btn btn-primary" onClick={handleSubmit}>
                  Wyślij
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
