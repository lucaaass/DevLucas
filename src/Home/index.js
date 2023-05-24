import Menu from "../Menu";
import Currículo from "../images/Currículo_Lucas.pdf"
import Profile from "../images/profile.png"
import lmflix from "../images/lmflix.png"
import lnews from "../images/lnews.png"
import formulario from "../images/formulario.png"



import { ContainerMenu} from "../Menu/styles" 
import { Container } from "./styles";
import {AiFillHtml5,AiOutlineGithub,AiOutlineGoogle,AiOutlineLinkedin,AiOutlineWhatsApp} from "react-icons/ai"
import {DiCss3, DiSass, DiJavascript1,DiReact, DiLess, DiGit}  from "react-icons/di"
import{SiStyledcomponents} from "react-icons/si"

function Home() {
  
    return(
        <Container>
        <ContainerMenu>
            <Menu />
            </ContainerMenu>

            <div  className="home">

            <div className="image">
                <img src={Profile} alt="Profile front-end"/>
            </div>
            
            <div className="sobre">
                <h2>Oi, eu sou o</h2>
                <h1> Lucas Marques</h1>
                <h3> Desenvolvedor Front-End </h3> 
                <li>
                  <a href={Currículo} download > Download CV</a>
                  <p>“Uma linguagem não faz seu código ser bom, programadores bons fazem seu código ser bom.”</p>
                </li>
                <p className="autor"> Samuel Custódio </p>

            </div>
          
    </div>



<div className="apresentacao">  
  <section className="sobre" id="sobre">
    <h1>Sobre mim</h1>
  <p>
  25 Anos, um futuro programador em construção. Apaixonado por criar e desenvolver, amante da tecnologia, 
  atualmente estou cursando análise e desenvolvimento de sistemas e atualmente estou trabalhando na área de logística.
  </p>
  <p>
  Meus objetivos:
  </p>
  <p>
Em busca de realizar minha tão sonhada transição, para área de tecnologia, como Estagiário/Desenvolvedor 🧑🏻‍💻
Vejo como uma forma de adquirir experiências, às oportunidades que o mercado pode me proporcionar e fazer o que eu amo programar.
      
        </p>
      </section>
      </div>  

    <div className="projects" id="projetos">
      <h1>Projetos</h1>
      <div className="cards">
        <div>
          <img src={lmflix} alt="" />
          <h3> LM-FLIX</h3>
          <p>
            Lm-flix é um projeto de catálogo de filmes de lançamentos, onde tem classificação geral, clicando na foto terá mais detalhes, objetivo principal é consumir um api externa.
    
          </p>
          <p>
          Acessar repositório:
          </p>
          <a href="https://github.com/lucaaass/lm-flix" target="_blank" > <AiOutlineGithub /> Repositório Github  </a>
        </div>
        

        <div>
       <img src={lnews} alt=""/>
       <h3>LNEWS</h3>
       <p> 
       Lnews é um projeto de portal de notícias, são as principais notícias do mundo, onde você pode visualizar toda noticia em um link externo, clicando em ver conteúdo.
       </p>
       <p>
       Acessar repositório:

       </p>
       <a href="https://github.com/lucaaass/lnews" target="_blank"> <AiOutlineGithub /> Repositório Github </a>
        </div>

      <div>
        <img src={formulario} alt=""/>
        <h3>Formulário de contato</h3>
        <p>Formulário de contato é um projeto de formulário onde você pode cadastrar dados e ate mesmo fazer algumas perguntas como por exemplo que tipo de comida você gosta ?.
        </p>
        
        <p>
        acessar repositório:
        </p>
        <a href="https://github.com/lucaaass/Formulario-de-contato" target="_blank" > <AiOutlineGithub /> Repositório Github  </a> 
      </div>

    </div>
    </div>


    <div className="hab" id="habilidades">
      <h1>Minhas Habilidades</h1>
      <div className="cards_hab">
         
        <div> <p><AiFillHtml5 /> </p> <p>HTML5</p></div>
        <div> <p><DiCss3 /> </p>  <p>CSS3</p> </div>
        <div> <p><DiJavascript1/> </p> <p>JavaScript</p>  </div>
        <div> <p><DiReact /> </p> <p>ReactJs</p></div>
        <div> <p><DiReact /> </p> <p>Hooks</p></div>
        <div> <p><DiSass/> </p> <p>Sass</p></div>
        <div> <p><DiLess /> </p> <p>Less</p></div>
        <div> <p><SiStyledcomponents /> </p> <p>Styled Components</p></div>
        <div> <p><DiGit /> </p> <p>Git</p></div>
        <div> <p><AiOutlineGithub /> </p> <p>GitHub</p></div>
        
      </div>
    </div>

    <div className="dados" id="dados">
                    
      <h1>  Dados para Contato </h1>
      
       <span> 
         <li><a href="https://api.whatsapp.com/send?phone=5511985146523&text=Olá Lucas, Tudo bem ?" target="_blank"><AiOutlineWhatsApp /> (11)985146523</a></li>
         <li><a href= "mailto:lucasmarques630@gmail.com"  target="_blank"> <AiOutlineGoogle /> lucasmarques630@gmail.com</a> </li>
         <li><a href="https://www.linkedin.com/in/lucas-marques-722032209/" target="_blank"><AiOutlineLinkedin /> linkedin.com/in/lucas-marques-722032209/</a></li>
          <li><a href="https://github.com/lucaaass" target="_blank"> <AiOutlineGithub /> github.com/lucaaass</a> </li>
       </span>
     
      
         
         </div>

         <footer>
    <div className="hab_used">
    <p><AiFillHtml5 /> </p>
    <p><DiCss3 /> </p> 
    <p><DiJavascript1/> </p>
    <p><DiReact /> </p>
    <p><SiStyledcomponents /> </p>

    </div>
    <div className="dev">Desenvolvido por Lucas Marques</div>
          </footer>
         </Container>

       
    )
}

export default Home;
