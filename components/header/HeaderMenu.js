import {useState, useEffect} from 'react'
import Link from "next/link";
import {MainLayout} from "../MainLayout";
import {useRouter} from "next/router";

export function HeaderMenu ({ data: serverData }) {
    const [data, setData] = useState(serverData)
    const router = useRouter()

    useEffect(() => {
         async function load() {
             const response = await fetch(`http://localhost:3000/webservice-response.txt/${router.query.id}`);
             const data = await response.json()
             setData(data)
         }
         if (!serverData) {
             load()
         }
    }, [])
    if (!data)
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>

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

HeaderMenu.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return {data: null}
    }
    const response = await fetch(`http://localhost:3000/webservice-response.txt/${query.id}`);
    const data = await response.json()

    return {
        data
    }
}

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
