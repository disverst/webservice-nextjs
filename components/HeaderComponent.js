import Link from "next/link";

export function HeaderComponent({ children, title = 'Next App' }) {
    return (
        <>
            <header className="header_area">
                <nav className="navbar navbar-expand-lg menu_one menu_four">
                    <div className="container custom_container p0">
                        <Link href="/">
                            <a className="navbar-brand" href="#">
                                <img src="img/logo.png" srcSet="img/logo2x.png 2x" alt="logo" />
                            </a>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <span className="hamburger-cross">
                                    <span />
                                    <span />
                                </span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                                <li className="nav-item active">
                                    <Link href={'/'}>
                                        <a className="nav-link dropdown-toggle">
                                            Главная
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'payments'}>
                                        <a className="nav-link dropdown-toggle">
                                            Платежка
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'contacts'}>
                                        <a className="nav-link dropdown-toggle">
                                            Контакты
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href={'/'}>
                                <a className="btn_get btn_hover menu_cus">
                                    Связаться с нами
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
