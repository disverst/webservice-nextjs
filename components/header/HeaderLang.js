import Link from "next/link";
import {useRouter} from "next/router";

export function HeaderLang({lang}) {
    let langs = [];

    for (const [key, value] of Object.entries(lang)) {
        if (key) {
            langs[key] = value;
        }
    }

    return (
        <>
            <ul className="navbar-nav menu pl_120 mr-auto ml-auto">
                {
                    langs.map((lang, index) =>
                        (
                            <li key={index} className="nav-item active">
                                <Link href={lang.url}>
                                    <a className="nav-link dropdown-toggle">
                                        {lang.title}
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

function getElementsValue(lang){
    let langs = [];

    for (const [key, value] of Object.entries(lang)) {
        if (key) {
            langs[key] = value;
        }
    }
    return langs
}
