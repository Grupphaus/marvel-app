const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const targetPath = '/vercel/path0/src/environments/environment.prod.ts';
  const appVersion = require('../package.json').version;

  const envConfigFile = `export const environment = {
        apiUrl: 'https://gateway.marvel.com:443/v1/public',
        key: '${process.env.API_KEY}',
        appVersion: '${appVersion}',
        production: true,
    };
  `;

  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
  });
};

setEnv();
