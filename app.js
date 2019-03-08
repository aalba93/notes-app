const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Andres.');

fs.appendFileSync('notes.txt', ' I am 25 years old.');