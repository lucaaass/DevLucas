
function Menu() {
    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks,) {
          this.mobileMenu = document.querySelector(mobileMenu);
          this.navList = document.querySelector(navList);
          this.navLinks = document.querySelectorAll(navLinks);
          this.activeClass = "active";
      
          this.handleClick = this.handleClick.bind(this);
        }
      
        animateLinks() {
          this.navLinks.forEach((link, index) => {
            link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                  index / 7 + 0.3
                }s`);
          });
        }
      
        handleClick() {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
          this.animateLinks();
        }
      
        addClickEvent() {
          this.mobileMenu.addEventListener("click", this.handleClick);
          this.navList.addEventListener("click", this.handleClick);
        }
      
        init() {
          if (this.mobileMenu,this,this.navList) {
            this.addClickEvent();
          }
          return this;
        }
      }
      
      const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
      );
      mobileNavbar.init();
      
    return(
      
        <div className="nav">
           <div className="mobile-menu" onClick={Menu} >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>

          </div> 
          <div className="nav-list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#dados">Contato</a></li>
          </ul>
          </div>
        </div>
     

    )
}

export default Menu;