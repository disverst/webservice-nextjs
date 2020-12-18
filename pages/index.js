// import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/header/HeaderComponent";
// import {useEffect, useState} from "react";
// import {useRouter} from "next/router";


export default function Index({data}) {
    var header = data.data.web_elements.header;

    return(
        <>
            <HeaderComponent header={header}/>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/webservice-response.txt')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}
