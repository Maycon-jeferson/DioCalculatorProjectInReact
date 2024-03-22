//Este código cria um componente de botão estilizado em React utilizando a biblioteca styled-components.

import { ButtonConteiner } from "./styles";
//Este trecho de código importa o componente estilizado ButtonConteiner do arquivo styles.js (ou styles.jsx) localizado no mesmo diretório do arquivo onde esse código está sendo utilizado.

const Button = ({label, onClick}) => {
    return (
      <ButtonConteiner onClick={onClick}>
        {label}
      </ButtonConteiner>
    );
  }
  
  export default Button;
  //Exporta o componente Button para que ele possa ser importado e utilizado em outros arquivos React.
  

//const Button = ({label, onClick}) => { ... }: Define um componente funcional chamado Button que recebe duas propriedades como argumentos: label (texto do botão) e onClick (função a ser executada quando o botão for clicado).

//<ButtonConteiner onClick={onClick}>: Renderiza o componente estilizado ButtonConteiner definido no arquivo styles.js. O evento onClick é passado para o ButtonConteiner para que a função onClick seja chamada quando o botão for clicado.

//{label}: Renderiza o texto do botão (definido pela propriedade label) dentro do componente ButtonConteiner.