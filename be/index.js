const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/profile', (req, res) => {
    const profileData = {
        name: "S. Meena",
        gender: "F",
        age: 23,
        picture: "", // You can replace with a real image URL
        phone: "8022334455",
        email: "meenarabinsachin2@gmail.com",
        patientId: "87 20200727153457",
        affectedSide: "Bilateral",
        condition: "Ortho",
        specialty: "Osteoarthritis",
        medicalHistory: "Hypertension, DM, Hypothyroidism",
        goalReached: 40
    };
    res.json(profileData);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
