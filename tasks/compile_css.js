let sass = require('node-sass');
let fs = require('fs');
const scssFileLocation = 'scss/griid.scss';
const cssFileLocation = 'css/griid.css';

function compileCSS() {
  sass.render({
    file: scssFileLocation
  }, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }

    fs.writeFile(cssFileLocation, result.css, err => {
      if (err) {
        console.log(err);
        throw err;
      }

      console.log('File written at ' + cssFileLocation);
    });
  });
}

compileCSS();
