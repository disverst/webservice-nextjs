
import {HeaderLogo} from "./HeaderLogo";
import {HeaderMenu} from "./HeaderMenu";
import {HeaderHamburger} from "./HeaderHamburger";
import {HeaderButton} from "./HeaderButton";

export function HeaderComponent () {
    return (
        <>
            <header className="header_area">
                <nav className="navbar navbar-expand-lg menu_one menu_four">
                    <div className="container custom_container p0">
                        <HeaderLogo />
                        <HeaderHamburger />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <HeaderMenu />
                            <HeaderButton />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

// HeaderComponent.getInitialProps = async (ctx) => {
//     const res = await fetch('http://localhost:3000/webservice-response.txt')
//     const header = await res.json()
//     return {
//         header
//     }
// }
