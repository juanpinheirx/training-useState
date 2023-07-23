import { useState } from "react";

export default function App() {
  // hoje vou estudar de forma aprofundada o useState, o hook mais conveniente para mudar estados de uma aplicação.

  // sabe-se que nos componentes de classe -- a forma antiga de se declarar componentes -- se utilizava o 'this.state' dentro de uma função construtora (constructor()). dessa forma:
  // class App extends React.Component {
  // render() {
  // constructor() {
  // super()
  // this.state = {
  //name: '', // aqui eu poderia manipular este estado chamado name que atribui ao componente através do constructor. qual o problema nisso? o código fica extenso. e a possibilidade de utilizar 'binds' com as funções que manipulam o estado são grandes.
  // }
  // }
  //return (
  //        <div>Meu app</div>
  // )
  // }
  // }

  // aqui vai um exemplo de useState que torna o componente muito mais ergonômico.
  const [name, setName] = useState(""); // aqui, o estado inicial vai como parâmetro da função 'useState'. assim já a função sempre deve ser feita na parte js do componente jsx. a função useState sempre retorna este array de dois elementos. nada mais. sendo o primeiro respectivamente: o estado inicial desestruturado e o segundo elemento, esta função que me permite manipular o estado inicial.

  const handleChange = (e) => {
    setName(e.target.value); //nesta função que toma como parâmetro e.target.value, ela acessa a tag html de forma que retorna seu valor interior. // aqui nesta função handleChange podemos mudar o estado determinado e também manipulá-lo e reutilizá-lo de diversas formas como na forma abaixo:
  };

  const handleClick = () => {
    setName('Juan') // por que utilizar os hooks? a lógica é tão simples quanto o constructor. é mais abstrato? um pouco. porém torna o código mais ergonômico.

    //é MUITO interessante utilizar o hook useState por conta da imutabilidade que fornece ao estado inicial.
  }

  const initialValues = {
    count: 0,
  }

  const [count, setCount] = useState(initialValues.count);
  function add1() {
    setCount(count + 1)
    console.log(initialValues.count); // aqui, como pode ser visto não é necessária a programação direcionada a objetos ou arrays. o próprio useState já faz esta 'cópia'.
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>setName</button>
      <h1>{name}</h1>
      <button onClick={add1} >Você me pressionou {count} vezes</button>
    </>
  );
}
