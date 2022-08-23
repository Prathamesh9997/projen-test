const { web } = require('projen');
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'my-app-with-projen',
  deps: ['styled-components', '@react-google-maps/api', 'react-router-dom@6'],
  devDeps: ['@types/styled-components'],
});
project.synth();
