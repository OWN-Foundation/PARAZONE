import React from "react";
import Content from "../../../../Paralax/src/app/components/Content/Content";
import About from "../../../../Paralax/src/app/components/About/About";
import Info from "../../../../Paralax/src/app/components/Info/Info";
import RoadMap from "../../../src/app/components/RoadMap/RoadMap";

function LandingBody() {
    return (
        <div className="w-full bg-white">
            <div className="">
            <Content/>
                <About/>


            </div>
        </div>
    );
}

export default LandingBody;