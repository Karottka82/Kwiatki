import React, { useState } from "react";

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
    <div>
      <h2>Zapytaj o wycenę</h2>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
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
      <button onClick={handleSubmit}>Wyślij</button>
    </div>
  );
};

export default EmailForm;
