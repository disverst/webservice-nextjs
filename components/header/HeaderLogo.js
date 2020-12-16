import Link from "next/link";

export function HeaderLogo () {
    return (
        <>
        <Link href={'/'}>
            <a className="navbar-brand" href="#">
                <img src="img/logo.png" srcSet="img/logo2x.png 2x" alt="logo" />
            </a>
        </Link>
        </>
    )
}
