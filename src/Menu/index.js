import { useState } from "react";
import { ContainerMenu } from "./styles";


function Menu() {
const [active, setMode] = useState(false);
const ToggleMode = () => {
    setMode(!active)
}
 

  return (

    <ContainerMenu className="App">
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className="hamburguer hambuerguerIcon"></div>
      </div>
      <div className={active ? 'menu menoOpen' : 'menu menuClose'}>
        <div className="list">
        <ul className="listItems" onClick={ToggleMode}>
          <li><a href="#home">Home</a></li>
          <li><a href="#apresentacao">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#hab">Habilidades</a></li>
          <li><a href="#dados">Contatos</a></li>
          


        </ul>
        </div>
      </div>
    </ContainerMenu>
   


  )
}

export default Menu;