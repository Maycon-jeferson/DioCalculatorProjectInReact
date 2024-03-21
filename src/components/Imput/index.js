import { ImputConteiner } from "./styles";
const Imput = ({value}) => {
    return (
      <ImputConteiner>
        <input disabled value={value}/>
      </ImputConteiner>
    );
  }
  
  export default Imput;
  