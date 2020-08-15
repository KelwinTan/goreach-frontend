import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/sponsorheader.js";

export default function customnavbar() {

    
    const StyledHeader = styled(Header)`
    ${tw`pt-8 max-w-none w-full bg-primary-500`}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
      ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
    }
    ${NavToggle}.closed {
      ${tw`text-gray-100 hover:text-primary-500`}
    }
  `;

  

    return (
            <StyledHeader/>
    )
}


