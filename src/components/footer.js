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

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <ul id="navEloi" >
        <li><a class="icon -center" href="https://www.instagram.com/vovochicopimenta" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} style={{ fill: '#fff' }} /></a>       </li>
        <li><a class="icon -center" href="https://youtube.com/channel/UCQdWrQlNuy2CAWrsGGDs_Wg?sub_confirmation=1/" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} style={{ fill: '#fff' }}/></a>       </li>
        <li><a class="icon -center" href="https://web.facebook.com/vovochicopimenta" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ fill: '#fff' }}/></a>       </li>
        <li><a class="icon -center" href="https://t.me/canalvovochicopimenta" target="_blank" rel="noopener noreferrer"><FaTelegram size={30} style={{ fill: '#fff' }} /></a>       </li>
        <li><a class="icon -center" href="https://www.paypal.com/donate?hosted_button_id=4CSKE44FXNK3J" target="_blank" rel="noopener noreferrer"><FaCcPaypal size={30} style={{ fill: '#fff' }}/></a>       </li>
      </ul> 
      <p>GatsbyJS Theme <span className="icon -love"><RiHeart2Line /></span> por <Link to="/">Stackrole.com</Link></p>
    </div>

  </footer>
)

export default Footer