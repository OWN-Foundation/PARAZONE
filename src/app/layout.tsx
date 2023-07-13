import './globals.scss'
import Navbar from "@Paralax/app/components/Navbar/Navbar";
import Head from "@Paralax/app/head";
import Footer from "@Paralax/app/components/Footer/Footer";
import React, {} from 'react'
import useSWR from 'swr'
import {useSelector} from "react-redux";


const RootLayout = ({
                        children,
                        title,
                        style,
                    }: {
    children: React.ReactNode
    title: string
    style?: string
}) => {

    const {data, error} = useSWR('/api/navigation', fetch);

    if (error) return <div>Failed to load</div>;


    return (
        <>

            <div className="flex flex-col justify-between min-h-screen bg-white ">
                <Head title={title}/>
                <Navbar/>



                <main className={`flex-1 bg-white`}>
                    {children}
                </main>



            </div>

        </>


    )
}

export default RootLayout