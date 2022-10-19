import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];
class Content extends React.Component {
  render() {
    return (
      <ul>
        { conteudos.map((x) => (
          <li key={ x.id }>
            {`Eu ${x.status} o conteúdo ${x.nome} no bloco ${x.bloco}`}
          </li>))}
      </ul>
    );
  }
}

export default Content;
