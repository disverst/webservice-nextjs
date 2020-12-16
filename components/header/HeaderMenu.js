import Link from "next/link";

export function HeaderMenu () {
    // const webElements = data;
    // console.log(webElements)
    return (
        <>
            <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                HeaderMenu.map(data => (
                <li key={data} className="nav-item active">
                    <Link href={data}>
                        <a className="nav-link dropdown-toggle">
                            {data}
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3000/dorea-response.txt`);
//     const data = await res.json()
//     return {
//         data
//     }
// }

// <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
//     HeaderMenu.map(header => (
//     <li key={HeaderMenu.id} className="nav-item active">
//         <Link href={HeaderMenu.url}>
//             <a className="nav-link dropdown-toggle">
//                 {header.link}
//             </a>
//         </Link>
//     </li>
// </ul>


// <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
//     <li className="nav-item active">
//         <Link href={'/'}>
//             <a className="nav-link dropdown-toggle">
//                 Главная
//             </a>
//         </Link>
//     </li>
//     <li className="nav-item">
//         <Link href={'payments'}>
//             <a className="nav-link dropdown-toggle">
//                 Платежка
//             </a>
//         </Link>
//     </li>
//     <li className="nav-item">
//         <Link href={'contacts'}>
//             <a className="nav-link dropdown-toggle">
//                 Контакты
//             </a>
//         </Link>
//     </li>
// </ul>
