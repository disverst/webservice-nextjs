import Link from "next/link";

export function HeaderButton () {
    return (
        <>
            <Link href={'/'}>
                <a className="btn_get btn_hover menu_cus">
                    Связаться с нами
                </a>
            </Link>
        </>
    )
}
