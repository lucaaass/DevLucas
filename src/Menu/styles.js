import styled from "styled-components"


export const ContainerMenu = styled.div `

.nav {
  display: flex;
  position:fixed;
  
  background: rgb(51, 50, 51);
  height: 6vh;
  width: 100%;
  
  justify-content: center;
  padding: 10px;
  
  
}

.mobile-menu {
  display:none;
  cursor: pointer;

}

.mobile-menu div {
  width: 32px;
  height: 2px;
  background: #fff;
  margin: 8px;
  transition: 0.3s;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;

 
}

.nav-list ul li {
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;

}
.nav-list ul { 
 
  display: flex;
}
.nav-list li a {
    font-size: 1.5rem;
    color: white;
    padding: 18px 30px;
    font-family: 'Roboto',sans-serif;
}


.nav-list li a:hover {
  /* background-color:rgb(49,83,236);  */
  box-shadow: inset -8.5rem 0 0 0 rgb(49,83,236),inset 8.5rem 0 0 0 rgb(49,83,236);
  color: darkgreen;
  transition: all 0.3s;
  width: 100%;
  
}


  .nav-list.active {
  transform: translateX(0);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-menu.active .line1 {
  transform: rotate(-45deg) translate(-8px, 8px);
}

.mobile-menu.active .line2 {
  opacity: 0;
}

.mobile-menu.active .line3 {
  transform: rotate(45deg) translate(-5px, -7px);
} 

 /* Configurações mobile-menu começa aqui  */

 @media (max-width: 853px) {
  body {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  .nav{
    display: flex;
  align-items: center;
  
  height: 6vh;
  
  }
  .nav-list {
    display:flex;
    position: absolute;
    top: 9vh;
    right: 0;
    width: 60vw;
    height: 94vh;
    background: #23232e;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  animation: fade 1s;
 
  }
  .nav-list ul { 
  display: flex;
  flex-direction:column;

}
  .nav-list li {
    margin-left: 0;
    opacity: 0;
   
    
  }

  .nav-list li a {
    font-size: 2rem;
    line-height: 3;
    text-decoration: none;
    padding: 10px 5px;
  
  }
  .mobile-menu {
    display: inline-block;
    margin-left: 70%;
   
    
  }
 
} 
 
`