import {useState, useEffect} from 'react'
import Link from "next/link";
import {MainLayout} from "../MainLayout";
import {useRouter} from "next/router";

export function HeaderMenu({nav}) {
    const links = getElementsValue(nav);

    return (
        <>
            <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                {
                    links.map((link, index) =>
                        (
                            <li key={index} className="nav-item active">
                                <Link href={link.url}>
                                    <a className="nav-link dropdown-toggle">
                                        {link.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

function getElementsValue(nav){
    let links = [];

    for (const [key, value] of Object.entries(nav)) {
        if (key) {
            links[key] = value;
        }
    }
    return links
}
