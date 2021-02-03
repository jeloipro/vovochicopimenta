import React from "react"
import { Link } from "gatsby"
import Logotipo from "../../static/assets/chico-pimenta-avatar_redondo1.png"

const Logo = (props) => (
  <div className="site-logo">

    <Link to="/"><img src={Logotipo }/></Link>
    
  </div>
)

export default Logo