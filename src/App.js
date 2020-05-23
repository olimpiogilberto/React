import React, { Component } from 'react';
import './App.css';

import Tabela from './Tabela';

class App extends Component {
  state = {
    autores:  [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      nome: 'Giba',
      livro: 'testeGiba',
      preco: '100,00'
    }
  ],
}

removerAutor = index => {

    const { autores } = this.state;

    this.setState({
          autores : autores.filter((autor, posAtual) => {
                    return posAtual !== index;
          }),
      })
}
    
  render() {
    return (
      
      <Tabela autores={this.state.autores} removerAutor = {this.removerAutor} />  
      
    );
  }
}

export default App;