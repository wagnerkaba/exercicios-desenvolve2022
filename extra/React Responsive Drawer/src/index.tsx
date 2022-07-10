import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

// tive que incluir "as Element" na linha abaixo por este motivo: https://stackoverflow.com/questions/71808102/react-18-type-null-is-not-assignable-to-type-element-documentfragment
ReactDOM.createRoot(document.querySelector("#root") as Element).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);