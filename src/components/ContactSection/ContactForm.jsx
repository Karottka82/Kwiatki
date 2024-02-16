import { useState } from "react";
import axios from "axios";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/send-email", formData);
      alert("Email został wysłany pomyślnie");
    } catch (error) {
      console.error("Błąd podczas wysyłania emaila:", error);
      alert("Wystąpił błąd podczas wysyłania emaila");
    }
  };
  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Napisz do nas
      </h2>
      <p className="text-center w-responsive mx-auto mb-5"></p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Imię</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Twój email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="subject">Temat</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Wiadomość</label>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-primary">
                Wyślij
              </button>
            </div>
            <div className="status"></div>
          </form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Kraków </p>
            </li>
            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p> 534 567 89</p>
            </li>
            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>royalgreencracow@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
