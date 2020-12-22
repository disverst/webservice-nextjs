import Link from "next/link";
import Image from 'next/image'

export function HeaderLogo () {
    return (
        <>
        <Link href={'/'}>
            <a className="navbar-brand">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={136}
                    height={59}
                />
            </a>
        </Link>
        </>
    )
}
