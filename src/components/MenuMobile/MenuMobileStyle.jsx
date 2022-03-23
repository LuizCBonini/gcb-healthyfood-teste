import styled, { css } from "styled-components";

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--ff-texts);
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--cll-in-primary);
    

    background: rgb(143,209,98);
    background: linear-gradient(34deg, rgba(143,209,98,0.95) 0%, rgba(82,163,241,0.6) 100%);

    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);

    transition: .5s;

    >svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transition: .7s;
        transform: rotate(25deg);
    }

    >nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: .7s;
    }

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        >svg {
            transform: rotate(0deg);
        }

        >nav {
            transform: scale(1);
        }
    `}
`;