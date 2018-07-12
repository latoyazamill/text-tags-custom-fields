const config = require('./config.js');

var hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

var options = {
  test_mode: 1,
  title: 'Custom Fields with Text Tags',
  subject: 'Text Tags for Sender',
  message: 'This example is when the text tag is labeled for sender to edit versus signer.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    order: 0
  }],
  files: ['/Users/latoyawilliams/Downloads/text_tags1_4.pdf'],
  use_text_tags: 1,
  hide_text_tags: 1,
  custom_fields: [{
    "name": "organization_name",
    "value": "Acme Co."
  }]
};

hellosign.signatureRequest.send(options)
  .then(function(response) {
    console.log("What is the response?", response);
  })
  .catch(function(err) {
    console.error("What is the error?", err);
  });