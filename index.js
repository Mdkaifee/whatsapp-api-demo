const axios = require('axios');

// Set your token and other parameters here
const token = 'EAARrpXwpJJcBPOaXaZB7HDtX8shvAKKGPE8TSYEhMAmqETyq0v31lhaNgw2ajmpZBwoAiZA2JoNmKNFPcty43Q8uVNzdtarweCgZBijjFNfQ3XHwkyagZCxJBhaljeOpk9W1n5mCjZASTXfdOm0PjKUb3tt6paPX0KKBRFVTDUsR2VKCQ0WeJZBji9OkmITnnopE1MthbRVn0VO6REbdZCwo1XN81mqqyRkDTL2HawRUKKMfuaEZD';
const phoneNumber = '916201273115';  // Recipient's phone number
const messageData = {
  messaging_product: 'whatsapp',
  to: phoneNumber,
  type: 'template',
  template: {
    name: 'hello_world',
    language: {
      code: 'en_US'
    }
  }
};

// API request to send message
axios.post('https://graph.facebook.com/v22.0/767523369771903/messages', messageData, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Message sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
