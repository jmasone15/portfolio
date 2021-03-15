import React from "react";
import Particles from "react-tsparticles";

export default function Wrapper({ config, setConfig, configSelector }) {

    return (
        <Particles id="tsparticles" options={config} />
    )
}
