import React from "react";
import ParticlesBg from "particles-bg";

export default function MovingBackground({ theme }) {

    let color = ""

    if (theme === true) {
        color = "#D9D9D9"
    } else {
        color = "#353535"
    }

    return (
        <div>
            <ParticlesBg type="ball" bg={true} color={color} />
        </div>
    )
}
