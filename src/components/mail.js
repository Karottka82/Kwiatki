import React, { useState } from "react";
import "./mail.css";
const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      message: message,
    };

    // Symulacja wysłania wiadomości na adres wyslij@gmail.com
    console.log("Wysyłanie wiadomości:", data);
    // Tutaj można dodać kod do wysyłania e-maila, np. za pomocą Fetch API lub innej metody

    // Czyszczenie pól po wysłaniu
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mail section">
      <div className="mail-text">Zapytaj o wycenę</div>
      <div className="mail-box">
        <label>E-mail: </label>
        <input
          type="email"
          id="mail-data"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message">Wiadomości:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="custom-button" onClick={handleSubmit}>
        Wyślij
      </button>
    </div>
  );
};

export default EmailForm;
