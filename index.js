const config = require('./config.js');

var hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

var options = {
  test_mode: 1,
  title: 'Custom Fields with Text Tags',
  subject: 'Text Tags for Signer',
  message: 'This example is when the text tag is labeled for signer to edit versus sender.',
  signers: [{
    email_address: 'jack@example.com',
    name: 'Jack',
    order: 0
  }],
  files: ['text_tags1_7.pdf'],
  use_text_tags: 1,
  hide_text_tags: 1,
  custom_fields: [{
    "name": "organization_name",
    "value": "Acme Co.",
    "editor": "signer0"
  }]
};

hellosign.signatureRequest.send(options)
  .then(function(response) {
    console.log("What is the response?", response);
  })
  .catch(function(err) {
    console.error("What is the error?", err);
  });
