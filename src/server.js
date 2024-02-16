/*app.post("/send-email", (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, // Użyj adresu e-mail z formularza jako adresu wysyłającego
      pass: "hasło_do_twojego_konta_gmail", // Tutaj należy podać hasło do konta e-mail
    },
  });

  const mailOptions = {
    from: email, // Użyj adresu e-mail z formularza jako adresu wysyłającego
    to: "karolina@gmail.com", // Adres odbiorcy
    subject: "Nowa wiadomość od " + email,
    text: message, // Treść wiadomości
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Błąd podczas wysyłania wiadomości");
    } else {
      console.log("Email został wysłany: " + info.response);
      res.send("Wiadomość została wysłana");
    }
  });
});*/
