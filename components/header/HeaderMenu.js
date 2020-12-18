import {useState, useEffect} from 'react'
import Link from "next/link";
import {MainLayout} from "../MainLayout";
import {useRouter} from "next/router";

export function HeaderMenu({nav}) {
    var links = Object.values(nav)
    return (
        <>
            <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                {
                    links.map((link,index) =>
                        (
                            <li key={link} className="nav-item active">
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
