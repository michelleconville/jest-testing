Create a scripts folder and then a test folder, in the script folder, create your js file, example game.js and then in your test folder create your js file, example game.test.js

Installing jest 
*       npm init

Remember we can keep all the defaults here, we just need to supply Jest as our testing command

*       npm install --save-dev jest@26.6.3

To run the test
*       npm test

PLease note: So at the end of game.js we'll add our module exports equals curly braces game.

*       module.exports = { game };

Now you might be wondering, why the curly braces? Well this is because we'll be exporting more than one object and function from this file,  so we need to put them in curly braces. 
We'll do exactly the same now as we  import this into our game.test.js file,  so up at the top we'll create a constant.
We'll call that game and  then 'require("../game");'.

*       const { game } = require("../game");