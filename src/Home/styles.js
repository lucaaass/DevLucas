
import styled from "styled-components"

export const Container = styled.div `
`
export const Home = styled.div `
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 10rem 0px;

  
.image img {
  height: 23rem;
  width: 23rem;
  border-radius: 50%;
  display: flex;
  border: 7px solid blue;
  /* linearGradient */
  }

 .sobre {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
  text-align: center;
}
 .sobre h2 {
  color: white;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
 
}
.sobre h1 {
  color: rgb(49, 83, 236);
  font-size: 4rem;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  
}

.sobre h3 {
  color: green;
  font-size: 2rem;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  
}
.sobre li {
  margin: 2rem 0;
  
  /* display: flex;
  flex-direction: column; */
}
.sobre li a  {
 background-color: rgb(51,50,51);
 color:white;
 padding:1rem;
 border-radius:1rem;
 font-size:1.5rem;
 font-family: 'Roboto', sans-serif;
 

}
.sobre li a:hover {
  color:blue;
  transition: all 0.3s;
  background-color:green;
  box-shadow: 0 0 50px green, 0 0 200px green;
}
.sobre p {
  color: rgb(129 140 143);
  text-align: justify;
  font-size: 1.5rem;
  margin:2rem 0;
  padding: 0;
  width: 400px;
  font-family: 'Merriweather', serif;line-height: 2.5rem;



}

.sobre .autor {
  text-align: end;
  margin:-4rem 0;
  font-family: 'Merriweather', serif;

}
@media (max-width: 767px) {
  display: flex;
  flex-direction: column;
  height: 67vh;
  align-items: center;

 .image img {
  
   height: 13rem;
   width: 13rem;
  
   display: flex;
 }

.sobre {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.sobre h2 {
    font-size: 3rem;
}
 .sobre h1 {
    font-size: 3rem;
    margin-bottom: 0.5 rem;
}
 .sobre h3 {
    font-size: 2rem;
    margin: 0.5rem 0;
}
.sobre li a {
  padding: 1rem;
  font-size: 1rem;
}


.sobre p {
color: #828282;
text-align: justify;
font-size: 1rem;
word-spacing: -1px;
margin: 2rem;
line-height: 2rem;
width: auto;
}
}
`


export const Apresentacao = styled.div `
width: 100%;

 .sobre h1 {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: rgb(49, 83, 236);
  font-size: 4rem;
  margin: 50px 0;
  font-family: 'Playfair Display', serif;
}

 .sobre p {
  display: flex;
  text-align: justify;
  margin: auto;
  width: 60%;
  color: rgb(240, 231, 231);
  font-size: 1.8rem;
  font-family: 'Merriweather', serif;
  line-height: 3rem;
}

@media (max-width: 767px) {
     width: 100vw;
    
   .sobre p { 
     text-align: justify;
     width: 77%;
     hyphens: auto;
     font-size: 1rem;
   }
  }
`

export const Projects = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;


 h1 {
  display: flex;
  text-align: center;
  justify-content: center;
  color: rgb(49, 83, 236);
  font-size: 4rem;
  margin: 50px 0;
  font-family: 'Playfair Display', serif;
  
}
 .cards {
  list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    width: 90vw;

}
 .cards div {
  background-color:rgb(51,50,51);
  border-radius:1rem;
  padding: 1rem 0rem;

}
 .cards div:hover {
  background-color: blue;
  transition: all 0.3s;
  box-shadow: 0 0 50px rgb(49,83,236), 0 0 200px rgb(49,83,236);
}

.cards div img {
    display:flex;   
    width: 80%;
    height: 280px;
    border-radius: 1rem;
    align-items: center;
    margin-bottom: 4rem;
    margin: 0 auto;
    object-fit: fill;
    
}

 .cards div h3 {
  display:flex;
  font-size:1.5rem;
  justify-content:center;
  margin-top: 2rem;
  color: darkgreen;
  font-family: 'Roboto', serif;

}

 .cards div p {
  margin-top:1rem;
  color:white;
  margin:0.8rem;
  font-family: 'Merriweather', serif;
  line-height:2rem;
  text-align:justify;
}
.cards div a {
  display: flex;
 align-items: center;
 justify-content: center;
  background-color: black;
 color:white;
 border-radius:1rem;
 font-size:1.5rem;
 font-family: 'Roboto', sans-serif;
 width: 99%;
}
 
.cards div a:hover {
  color:darkgreen;
  transition: all 0.3s;
}

@media (max-width: 767px) {
   width: 100vw;

  .cards {
   display: flex;
   flex-direction: column;
   margin: 0 auto;
 }
 .cards div {
   text-align: center;
   padding: 15px 0;
   width: 80vw;
   margin: 0 auto;
 }
 .cards div img {
   height: 275px;
   background-repeat: no-repeat;
  
 }
 .cards div p {
   font-size: 12px;
 }
}
`
export const Hab = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

  .h1 {
  display: flex;
  text-align: center;
  justify-content: center;
  color: rgb(49, 83, 236);
  font-size: 4rem;
  margin: 50px 0;
  font-family: 'Playfair Display', serif;
}

 .cards_hab {
   list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    width: 90vw;

}
 .cards_hab div {
  background-color: rgb(51,50,51);
  border-radius:1rem;
}
.cards_hab div:hover,
.cards_hab div > span:hover  {
color: green;
background: rgb(49, 83, 236);
}

p  {
  color: white;
  text-align: center;
  margin-top: 10px;
  font-family: 'Roboto', serif;

}
.cards_hab div p svg  {
  text-align: center;
  font-size:2rem;
  
}
@media (max-width: 767px) {
 width: 100vw;

.cards_hab div img {
 width: 30vw;
}
}
`
export const Dados = styled.div `

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

 h1 {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: rgb(49, 83, 236);
  font-size: 4rem;
  margin: 50px 0;
  font-family: 'Playfair Display', serif;
}

 span {
  list-style: none;
    display: grid;
    gap: 2rem;
    justify-content:center;
    width: 90vw;
}

 p svg {
  font-size: 2.5rem;
}
 span li {
  display:grid;
  gap: 2rem;
  background-color:rgb(51,50,51);
  border-radius:1rem;

}

 span li a {
  display:flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  color: white;
  font-size: 2rem;
  transition: .2s linear;
  cursor: pointer;
  line-height: 2;
  padding:1rem;
  font-family: 'Merriweather', serif;
}
 span li a:hover{
  background-color:rgb(49,83,236);
  border-radius: 1rem;
  color:darkgreen;
}

@media (max-width: 767px) {
 
 span li a {
    font-size: 1rem;
   }
 
 }
 
`
export const Footer = styled.footer `
  display: flex;
  justify-content:space-around;
  align-items:center;
  background-color:rgb(51,50,51);
  color:white;
  width:100vw;
 
 .hab_used p {
  display:inline-block;
  padding: 0 6px;
}
 .hab_used p svg {
  font-size: 1.5rem;
}

 .dev {
  font-family: 'Playfair Display', serif;
}
`





