//Este código cria um componente de input estilizado em React usando a biblioteca styled-components.

import { ImputConteiner } from "./styles";
//Este trecho de código importa o componente estilizado InputContainer do arquivo styles.js (ou styles.jsx) localizado no mesmo diretório do arquivo onde esse código está sendo utilizado.

const Imput = ({value}) => {
    return (
      <ImputConteiner>
        <input disabled value={value}/>
      </ImputConteiner>
    );
  }
  
  export default Imput;
  //Exporta o componente Input para que ele possa ser importado e utilizado em outros arquivos React.

//const Input = ({ value }) => { ... }: Define um componente funcional chamado Input que recebe a propriedade value como argumento.

//<InputContainer>: Renderiza o componente estilizado InputContainer definido no arquivo styles.js.

//<input disabled value={value} />: Renderiza um elemento de input HTML com a propriedade disabled (desativada) e o valor definido pela propriedade value.
  