const navbar = () => {
    return `<nav>
    <div class="wrapperH">
     <div class="div-1">
       <div class="content">
         <h1>Oestin</h1>
       </div>
     </div>
     <div class="div-2">
       <div class="content1">
           <p> <span>Contact:  </span>9997222612</p>
        </div>
        <div class="content2">
         <i class="fa-brands fa-google-plus-g fa-flip fa-xl"></i>
         <i class="fa-brands fa-twitter fa-flip fa-xl"></i>
         <i class="fa-brands fa-facebook fa-flip fa-xl"></i>
         <i class="fa-brands fa-instagram fa-flip fa-xl"></i>
         <i class="fa-brands fa-pinterest fa-flip fa-xl"></i>
       </div>
     </div>
    </div>
    <div id="arhant" class="wrapper">
     <div class="logo"><a id="changelogo" href="#">MENU</a></div>
      <input type="radio" name="slider" id="menu-btn">
      <input type="radio" name="slider" id="close-btn">
      <ul class="nav-links">
       <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
       <li><a href="#">HOME</a></li>
       <li>
         <a href="#" class="desktop-item">ROOM</a>
         <input type="checkbox" id="showDrop">
         <label for="showDrop" class="mobile-item">ROOM</label>
         <ul class="drop-menu">
           <li><a href="#">ROOM LIST</a></li>
           <li><a href="#">ROOM DETAILS</a></li>
         </ul>
       </li>
       <li>
         <a href="#" class="desktop-item">ACTIVITIES</a>
         <input type="checkbox" id="showMega">
         <label for="showMega" class="mobile-item">ACTIVITIES</label>
         <div class="mega-box">
           <div class="content">
             <div class="row">
               <header>MEGAMENU LIST</header>
               <ul class="mega-links">
                 <li><a href="#">LOCATION</a></li>
                 <li><a href="#">ROOM GRID</a></li>
                 <li><a href="#">ROOM LIST</a></li>
                 <li><a href="#">ROOM DETAILS</a></li>
               </ul>
             </div>
             <div class="row">
               <header>MEGAMENU LIST</header>
               <ul class="mega-links">
                 <li><a href="#">EVENT</a></li>
                 <li><a href="#">MEGA MENU</a></li>
                 <li><a href="#">CONTACT</a></li>
                 <li><a href="#">TEAM</a></li>
               </ul>
             </div>
             <div class="row">
               <header>MEGAMENU LIST</header>
               <ul class="mega-links">
                 <li><a href="#">ROOM LIST</a></li>
                 <li><a href="#">MEGA MENU</a></li>
                 <li><a href="#">ROOM GRID</a></li>
                 <li><a href="#">ROOM DETAILS</a></li>
               </ul>
             </div>
           </div>
         </div>
       </li>
       <li><a href="#">LOCATION</a></li>
       <li><a href="#">EVENT</a></li>
       <li><a href="#">CONTACT</a></li>
       <li><a href="#">ACCOUNT</a></li>

      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
      </div>
    </nav>
    `;
  }
  
  export default navbar;