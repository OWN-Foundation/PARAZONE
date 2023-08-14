import React from "react";
import Content from "../../../src/app/components/Content/Content";
import About from "../../../src/app/components/About/About";
import Info from "../../../src/app/components/Info/Info";
import RoadMap from "../../../src/app/components/RoadMap/RoadMap";
import Global from "../../../src/app/components/Global/Global"
function LandingBody() {
    return (
        <div className="w-full bg-white">
            <div>
                <Content/>
                <About/>
                <Info/>
                <RoadMap/>
                <Global/>

            </div>
        </div>

    );
}

export default LandingBody;