import Link from "next/link";

export function HeaderButton ({button}) {
    return (
        <>
            <Link href={button.url}>
                <a className="btn_get btn_hover menu_cus">
                    {button.title}
                </a>
            </Link>
        </>
    )
}
