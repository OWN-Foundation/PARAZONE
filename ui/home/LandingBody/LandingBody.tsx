import React from "react";
import Content from "../../../../Parazone/src/app/components/Content/Content";
import About from "../../../../Parazone/src/app/components/About/About";
import Info from "../../../../Parazone/src/app/components/Info/Info";
import RoadMap from "../../../src/app/components/RoadMap/RoadMap";

function LandingBody() {
    return (
        <div className="w-full bg-white">
            <div className="">
            <Content/>
                <About/>
                <Info/>
                <RoadMap/>



            </div>
        </div>
    );
}

export default LandingBody;