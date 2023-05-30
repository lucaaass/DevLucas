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
        <ul className="listItems" >
          <li><a onClick={ToggleMode} href="#home">Home</a></li>
          <li><a onClick={ToggleMode} href="#apresentacao">Sobre</a></li>
          <li><a onClick={ToggleMode} href="#projects">Projetos</a></li>
          <li><a onClick={ToggleMode} href="#hab">Habilidades</a></li>
          <li><a onClick={ToggleMode} href="#dados">Contatos</a></li>
          


        </ul>
        </div>
      </div>
    </ContainerMenu>
   


  )
}

export default Menu;