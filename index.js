require('dotenv').config();
const axios = require('axios');

const token = process.env.ACCESS_TOKEN;
const phoneNumberId = process.env.PHONE_NUMBER_ID;
const recipient = process.env.RECIPIENT_PHONE;

const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

const data = {
  messaging_product: 'whatsapp',
  to: recipient,
  type: 'text',
  text: { body: 'Hello! 🎉 This is a test WhatsApp message using Meta API.' },
};

axios
  .post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    console.log('✅ Message sent:', res.data);
  })
  .catch((err) => {
    console.error('❌ Error:', err.response ? err.response.data : err.message);
  });
