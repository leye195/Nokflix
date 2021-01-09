import React from 'react';
import styled from 'styled-components';
import Img from '../Img/Img';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    position: relative;

    &:after {
        display: inline-block;    
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        content:'';
        position:absolute;
        background: -moz-linear-gradient(
            right,
            rgba(25, 25, 25) 0%,
            rgba(25, 25, 25, 0.4) 20%,
            rgba(25, 25, 25, 0.2) 30%,
            rgba(25, 25, 25, 0.2) 70%,
            rgba(25, 25, 25, 0.4) 80%,
            rgba(25, 25, 25) 100%
        ), -moz-linear-gradient(
            top,
            rgba(25, 25, 25) 0%,
            rgba(25, 25, 25, 0.4) 20%,
            rgba(25, 25, 25, 0.2) 30%,
            rgba(25, 25, 25, 0.2) 70%,
            rgba(25, 25, 25, 0.4) 80%,
            rgba(25, 25, 25) 100%

        );

        background: -webkit-linear-gradient(
            right,
            rgba(25, 25, 25) 0%,
            rgba(25, 25, 25, 0.4) 20%,
            rgba(25, 25, 25, 0.2) 30%,
            rgba(25, 25, 25, 0.2) 70%,
            rgba(25, 25, 25, 0.4) 80%,
            rgba(25, 25, 25) 100%
        ), -webkit-linear-gradient(
            top,
            rgba(25, 25, 25) 0%,
            rgba(25, 25, 25, 0.4) 20%,
            rgba(25, 25, 25, 0.2) 30%,
            rgba(25, 25, 25, 0.2) 70%,
            rgba(25, 25, 25, 0.4) 80%,
            rgba(25, 25, 25) 100%

        );
    }

    & .empty {
        width: 100%;
    }
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    font-weight:bold;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    z-index: 1;
`;


const Empty = ({text}) => {
    return <Container>
        <Wrapper>
            <Img  className='empty' src={'empty.jpg'}/>
            <Text>{text}</Text>
        </Wrapper>
    </Container>
};
export default Empty;
