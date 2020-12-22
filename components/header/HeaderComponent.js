
import {HeaderLogo} from "./HeaderLogo";
import {HeaderMenu} from "./HeaderMenu";
import {HeaderHamburger} from "./HeaderHamburger";
import {HeaderButton} from "./HeaderButton";

export function HeaderComponent ({header}) {
    const logo = header.logo;
    const nav = header.nav;
    const button = header.button;
    return (
        <>
            <header className="header_area">
                <nav className="navbar navbar-expand-lg menu_one menu_four">
                    <div className="container custom_container p0">
                        {/*<HeaderLogo logo={logo} />*/}
                        <HeaderHamburger />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <HeaderMenu nav={nav} />
                        <HeaderButton button={button} />
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
