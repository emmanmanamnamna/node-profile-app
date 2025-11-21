const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
      <h1>Personal Profile</h1>
      <p><strong>Full name:</strong> Virrey, Lloyd Emman M.</p>
      <p><strong>Class section:</strong> BA 4102</p>
      <p><em>“Your future is created by what you do today, not tomorrow.” — Robert T. Kiyosaki</em></p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
