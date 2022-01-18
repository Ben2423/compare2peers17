import WeFunderLogo from '../assets/logo.svg'
import SearchIcon from '../assets/search.svg'

export default function Menu() {
    return (

        <header id="top-menu-area"> 
            <ul id="top-menu">
                <div class="split-elements">
                    <li ><img src={WeFunderLogo} /></li>
                    <li class="menu-position">Explore</li>
                    <li class="menu-position"> <img src={SearchIcon}/> Search</li>
                </div>
                <div class="split-elements">
                    <li class="menu-position">Raise Funding</li>
                    <li class="menu-position">FAQ</li>
                    <li class="menu-position">|</li>
                    <li class="menu-position">Login</li>
                    <li class="menu-position">Setup</li>
                </div>
            </ul>
        
        </header>
    )
}