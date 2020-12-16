

export function HeaderHamburger () {
    return (
        <>
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
        </>
    )
}
