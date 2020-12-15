import Link from 'next/link'

import {MainLayout} from "../components/MainLayout";
import {HeaderComponent} from "../components/HeaderComponent";

export default function Index() {
    return (
        <MainLayout title={'Главная'}>
            <div className="body_wrapper">
                <HeaderComponent />
            </div>
        </MainLayout>
    )
}
