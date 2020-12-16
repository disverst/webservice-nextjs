import Link from "next/link";

export function HeaderMenu () {
    return (
        <>
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
        </>
    )
}

//
// <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
//     HeaderMenu.map(header => (
//     <li key={HeaderMenu.id} className="nav-item active">
//         <Link href={HeaderMenu.url}>
//             <a className="nav-link dropdown-toggle">
//                 {HeaderMenu.link}
//             </a>
//         </Link>
//     </li>
// </ul>
