const { web } = require('projen');
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'my-app-with-projen',
  deps: [
    'styled-components',
    '@react-google-maps/api',
    'react-router-dom@6',
    'use-places-autocomplete',
    '@reach/combobox',
  ],
  devDeps: ['@types/styled-components'],
});
project.synth();
