import Header from "../../../ui/home/Header/Header";
import React from "react";
import RootLayout from "@Paralax/app/layout";
import LandingBody from "../../../ui/home/LandingBody/LandingBody";
import {Provider} from "react-redux";
import store from "@Paralax/app/styles/store";

export default function Home() {
    return (
        <Provider store={store}>
            <RootLayout title={"home"}>

                <Header/>
                <LandingBody/>

            </RootLayout>
        </Provider>


    );
}
