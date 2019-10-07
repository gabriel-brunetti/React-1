// import VARIAVEL from 'biblioteca'
import React from 'react';
import Contador from './componentes/Contador';
import Menu from './componentes/Menu';

class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Contador />
      </>
    );
  }
}

export default App;