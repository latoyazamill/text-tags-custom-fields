# Text Tags with Custom Fields

## Sending Text Tags with pre-set values

You have the ability to add pre-set data to the text tag that will be viewed by the signer. To do this, use the word "sender" in place of the word “signer” in the tag. Remember, that if you do this, then the pre-set values you want to use must be sent with the custom_fields param at the time you make the request. If you don't do it you will receive an error callback after the file is processed.

In the case you are creating an unclaimed draft, the pre-set values you supply will be editable by the requester. Here is an example with pre-set text tag value.

**Example text tag:**

`[text-merge|req|sender|organization_name]` and `[sig|req|signer0]`

**Usage of custom_fields for the above text tag:**  

`custom_fields:[{"name":"organization_name", "value" : "Acme Co."}]`

NodeJS example in file `index.js`

In the example above, a textbox would be created with the value "Acme Co.". Note that this value will not be editable. If you want to allow a signer to edit the value, see the next example.

## Allowing a signer to edit pre-set values

**You can't have more than one signer when using this feature.**

Signer editable text-tag pre-set values use a similar convention to our editable merge fields when sending templates. Use the custom_fields key in the post body of the request to specify the editor index. When using this form of "editable" text tags and don't pass an editor in the custom_fields data, you will receive an error callback after the file is processed. The editor is the signer who can change the pre-set data.

Here is an example with editable pre-set text tag value.

**Example for editable text tag:**

`[text-merge|req|signer0|organization_name]` and `[sig|req|signer0]`

**Usage of custom_fields for the above text tag:**

`custom_fields:[{"name":"organization_name", "value":"Enter organization name", "editor":"signer1", "required":"true"}]`

NodeJS example in file `index2.js`

In the example above, an editable textbox would be created with a value of "Enter organization name". The textbox will be editable by the signer.
