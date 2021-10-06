import React from 'react';
import styled, { keyframes } from 'styled-components';
import styles from '../styles/spinner.module.css';

const outerRotate = keyframes`
    0% {
        transform: rotate(0deg); opacity: 0;
    }

    50% {
        transform: rotate(100deg); opacity: 1;
    }

    100% {
        transform: rotate(-360deg); opacity: 0;
    }
`

const innerRotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
`

const Outer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    animation: ${outerRotate} 3s infinite ease-in-out;
`

const Inner = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid grey;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
    animation: ${innerRotate} 1s infinite linear;
    // animation-direction: reverse;
`

const Spinner = () => {
    return (
        <div className={styles.container}>
            <Inner />
            <Outer />
        </div>
    )
}

export default Spinner;