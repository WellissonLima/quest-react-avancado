import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
    height: 100px;
    background-color: rgba(200, 200, 200, 0.7);
    margin-bottom: 50px;
    display: flex;
    width: 100%;


    img {
        width: 360px;
        padding: 16px 50px;
    }
`

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <img src="../src/assets/pokedex-logo.png" alt="" />
            </HeaderContainer>
        </>
    )
}

export default Header