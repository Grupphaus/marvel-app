const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const targetPath = './src/environments/environment.ts';
  const colors = require('colors');
  const appVersion = require('../../package.json').version;

  require('dotenv').config({
    path: 'src/environments/.env'
  });

  const envConfigFile = `export const environment = {
        apiUrl: 'https://gateway.marvel.com:443/v1/public',
        key: '${process.env['API_KEY']}',
        appVersion: '${appVersion}',
        production: true,
    };
  `;

  writeFile(targetPath, envConfigFile, (err: Error) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
};

setEnv();