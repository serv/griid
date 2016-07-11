let fs = require('fs');
const originalLocation = 'node_modules/normalize.css/normalize.css';
const newLocation = 'css/normalize.css';

function moveNormalizeCSS() {
  fs.exists(originalLocation, exists => {
    if (!exists) {
      console.log(originalLocation + 'does not exist.');
    }

    fs.readFile(originalLocation, (err, data) => {
      if (err) {
        console.log(err);
        throw err;
      }

      fs.writeFile(newLocation, data, err => {
        if (err) {
          console.log(err);
          throw err;
        }
      });
    });
  });
}

moveNormalizeCSS();
