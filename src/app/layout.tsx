import './globals.scss'
import Navbar from "../app/components/Navbar/Navbar";
import Head from "../app/head";
import Footer from "../app/components/Footer/Footer";
import React, {} from 'react'
import useSWR from 'swr'
import {useSelector} from "react-redux";


// @ts-nocheck
// @jsxImportSource client

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
                <Head />
                <Navbar/>



                <main className={`flex-1 bg-white`}>
                    {children}
                    <Footer/>
                </main>



            </div>

        </>


    )
}

export default RootLayout