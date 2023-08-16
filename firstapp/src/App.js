import bg_image from './images/bg-home.jpg';
import feature_image from './images/online-world.svg'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaSketch } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
import { FaRibbon } from "react-icons/fa6";

import './App.css';

function App() {
  return (
    <div>
      <div className="top-sec">
        <div className="header-sec">
          <div>
            <nav className="navbar">
              <div className="nav-heading">
                <a href="#">Dorsin</a>
                <div>
                  <ul className="navlist">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Feature</a></li>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <button className="navbtn">Try it Free</button>
              </div>
              <div className='navicons'>
                <button id="hamburger" onClick={shownav}><FaAlignJustify /></button>
                <button id="cross" onClick={hidenav}><FaXmark /></button>
              </div>
            </nav>
          </div>
          <div className="displaynav">
            <ul className="navlist2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Feature</a></li>
              <li><a href="#">Price</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="bg1-text">
            <div className="title-head">
              <h1>We help startups launch their products</h1>
              <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
            </div>
            <div className="title-logo">
              <FaRegCirclePlay />
            </div>
          </div>
        </div>
      </div>
      <div className='main-sec'>
        <div className='services'>
          <h1>OUR SERVICES</h1>
          <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
        </div>
        <div className='service-cards'>
          <div className='digital-design'>
            <div> 
             <button className="digital-icon"><FaSketch/></button>
            </div>
            <div>
              <h3>Digital Design</h3>
              <p className='digital-text'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
          </div>
          <div className='unlimited-color'>
            <div> 
             <button className="unlimited-icon"><FaRectangleList/></button>
            </div>
            <div>
              <h3>Unlimited Colors</h3>
              <p className='Unlimited-text'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
          </div>
          <div className='Strategy-Solutions'>
            <div> 
             <button className="Strategy-icon"><FaRibbon/></button>
            </div>
            <div>
              <h3>Strategy Solutions</h3>
              <p className='strategy-text'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
          <div className='Awesome-Support'>
            <div> 
             <button className="Awesome-Support-icon"><FaRibbon/></button>
            </div>
            <div>
              <h3>Awesome Support</h3>
              <p className='Awesome-Support-text'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
          <div className='Truly-Multipurpose'>
            <div> 
             <button className="Truly-Multipurpose-icon"><FaRibbon/></button>
            </div>
            <div>
              <h3>Truly-Multipurpose</h3>
              <p className='Truly-Multipurpose-text'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
          <div className='customize'>
            <div> 
             <button className="customize-icon"><FaRibbon/></button>
            </div>
            <div>
              <h3>Easy to customize</h3>
              <p className='customize-text'>Question Marks and devious Semikoli, but the Little Blind Text didnt listen. She packed her seven versalia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-sec2'>
        <div className='feature'>
          <div className='feature-text'>
                <div>
                  <h2>A digital web design studio creating modern & engaging online experiences</h2>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div>
                  <ul>
                    <li>We put a lot of effort in design.</li>
                    <li>The most important ingredient of successful website.</li>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                    <li>Submit Your Organization</li>
                  </ul>

                </div>
                <button className='learnmore'>Learn More</button>
          </div>
          <div className='feature-image'>
            <img src={feature_image}></img>
          </div>
        </div>
      </div>
    </div>
    
  );
}

function shownav() {
  let ham = document.querySelector('#hamburger'); // Use # before "hamburger"
  let cross = document.querySelector('#cross');
  let navlist = document.querySelector('.navlist2')
  ham.style.display = 'none'
  cross.style.display = "block"
  navlist.style.display = "block"
}
function hidenav() {
  let ham = document.querySelector('#hamburger'); // Use # before "hamburger"
  let cross = document.querySelector('#cross');
  let navlist = document.querySelector('.navlist2')
  ham.style.display = 'block'
  cross.style.display = "none"
  navlist.style.display = "none"

}
export default App;
