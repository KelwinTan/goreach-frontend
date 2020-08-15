import React from 'react'
import Customnavbar from "components/misc/customnavbar"
import SponsorHomeLayout from "components/cards/ThreeColSlider"
import SponsorHome2 from "components/cards/ThreeColSlider2"

export default function SponsorHome() {

    return (
        <React.Fragment>
            <Customnavbar />
            <SponsorHomeLayout />
            <SponsorHome2 />
        </React.Fragment>
    )
}
