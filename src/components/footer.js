/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

// import icons
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaCcPaypal } from "react-icons/fa"
import { FaPodcast } from "react-icons/fa"
import { RiChatPrivateFill } from "react-icons/ri";
import { RiBookMarkFill } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <ul id="navEloi" >
        <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} style={{ fill: '#fff' }} /></a>       </li>
        <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/youtube" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} style={{ fill: '#fff' }}/></a>       </li>
        <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ fill: '#fff' }}/></a>       </li>
        <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/telegram" target="_blank" rel="noopener noreferrer"><FaTelegram size={30} style={{ fill: '#fff' }} /></a>       </li>
        <li><a class="icon -center" href="https://www.paypal.com/donate?hosted_button_id=4CSKE44FXNK3J" target="_blank" rel="noopener noreferrer"><FaCcPaypal size={30} style={{ fill: '#fff' }} /></a>       </li>
        <li><a class="icon -center" href="https://anchor.fm/vovochicopimenta" target="_blank" rel="noopener noreferrer"><FaPodcast size={30} style={{ fill: '#fff' }} /></a>     </li>
      </ul> 

      <ul id="navEloi1">
        <li>Privacidade<a class="icon -center" href="/politica-privacidade" rel="noopener noreferrer"><RiChatPrivateFill size={30} style={{ fill: '#fff' }} /></a></li>
        <li>Termos de Uso<a class="icon -center" href="/termos-de-uso" rel="noopener noreferrer"> <RiBookMarkFill size={30} style={{ fill: '#fff' }} /></a></li>
      </ul>

      <p>GatsbyJS Theme <span className="icon -love"><RiHeart2Line /></span> por <Link to="/">Stackrole.com</Link></p>
    </div>

  </footer>
)

export default Footer