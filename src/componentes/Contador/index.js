import React from 'react';
import './style.css';

class Contador extends React.Component {
  state = {
    contador: 0
  }

  adicionar = () => {
    let aumentaContador = this.state.contador;
    aumentaContador++;
    this.setState({ contador: aumentaContador});
  }

  zerar = () => {
    // let zeraContador = this.state.contador;
    // zeraContador = 0;
    // this.setState({ contador: zeraContador});
    this.setState({ contador: 0})
  }

  diminuir = () => {
    let diminuiContador = this.state.contador;
    diminuiContador--;
    this.setState({ contador: diminuiContador});
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <div>
          <button className="adicionar" onClick={this.adicionar}>Adicionar</button>
          <button className="zerar" onClick={this.zerar}>Zerar</button>
          <button className="diminuir" onClick={this.diminuir}>Diminuir</button>
        </div>
      </div>
    );
  }
}

export default Contador;