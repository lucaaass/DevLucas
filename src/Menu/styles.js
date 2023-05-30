import styled from "styled-components"

export const ContainerMenu = styled.div`
     display:flex;
      position: fixed;
      height: 8vh;
      width: 100vw;
      background: rgb(51, 50, 51);
      justify-content:center;
      align-items: center;

    .list {
      display: flex;
  

    }
    .list .listItems {
      padding: 0;
      display:flex;
      
    }
    .list .listItems li {
     margin: 2px 8px;
     cursor: pointer;
     
    }
    .list .listItems li a {
      font-size: 1.5rem;
      color: white;
      padding: 15px 30px;
      font-family: 'Roboto',sans-serif;
 
    }
    .list .listItems li a:hover {
     background-color:rgb(49,83,236);
     box-shadow: inset -8.5rem 0 0 0 rgb(49,83,236),inset 8.5rem 0 0 0 rgb(49,83,236);
     color: darkgreen;
     transition: all 0.3s;
    }
  
    @media (max-width: 767px) {
    
      position: fixed;
      width: 100vw;
   
    .icon {
      position: fixed;
      left: 80%;
      width: fit-content;
      height: 44px;
      cursor: pointer;
    }
    .hamburguer {
      top:50%;
      left: 10%;
      width: 30px;
      height: 6px;
      background-color:#ff3300;
      position: absolute;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    .hamburguer::before {
      top: -12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      background-color: #ff3300;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    .hamburguer::after {
      top: 12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      background-color: #ff3300;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    .list {
    position: absolute;
    height: 97vh;
    top: 8vh;
    color: white;
    font-size: 1.2rem;
    background: rgb(51, 50, 51);
   
    }
    .list .listItems {
      display: flex;
      flex-direction:column;
      padding: 0;
      justify-content: space-around;
      width: 50vw;
      
      
    }
    .list .listItems li {
     margin: 2px 8px;
     cursor: pointer;
     letter-spacing: 4px;

    }
  
    .list .listItems li a {
      display: flex;
      justify-content: center;
      color: white;
    }
    .list .listItems li a:hover {
     color: green;
    }
    .icon.iconActive .hamburguer {
      background:transparent;
      box-shadow: 0 2px 5px transparent;
    }
    .icon.iconActive .hamburguer::after {
      top: 0;
      background:#fff;
      transform: rotate(225deg);
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    .icon.iconActive .hamburguer::before {
      top: 0;
      background:#fff;
      transform: rotate(135deg);
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    .menu.menuOpen {
      width: 150px;
      height: 100vw;
      background: #000;
      box-shadow: 10px 0px 69px 0px rgba(0, 0, 0, 0.59);
      transition: 03s;
    }
    .menu.menuClose {
      display: none;
      width: 0px;
    }
    }
`

