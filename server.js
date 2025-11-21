const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <div style="
      font-family: Arial, sans-serif; 
      background: linear-gradient(135deg, #90caf9, #e3f2fd); 
      min-height: 100vh; 
      display: flex; 
      justify-content: center;
      align-items: center;
      padding: 20px;
    ">
      <div style="
        background: #fff;
        padding: 30px; 
        width: 100%; 
        max-width: 480px; 
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        text-align: center;
      ">
        <div style="
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #bbdefb;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: white;
          font-weight: bold;
        ">
          EM
        </div>

        <h1 style="margin-bottom: 10px; color: #1976d2;">Personal Profile</h1>
        <p style="font-size: 16px;"><strong>Full name:</strong> Virrey, Lloyd Emman M.</p>
        <p style="font-size: 16px;"><strong>Class section:</strong> BA 4102</p>
        
        <p style="margin-top: 20px; font-style: italic; color: #555;">
          “Your future is created by what you do today, not tomorrow.”   — Robert T. Kiyosaki
        </p>
      </div>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

