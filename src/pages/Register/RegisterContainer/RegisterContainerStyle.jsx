import styled from 'styled-components';

export const RegisterStyled = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    backdrop-filter: blur(3px);
    background: rgb(143,209,98);
    background: linear-gradient(34deg, rgba(143,209,98,0.95) 0%, rgba(82,163,241,0.6) 100%);
    z-index: 4;
    width: 100%;
    height: 100vh;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    > div {
        z-index: 5;
        height: auto;
        width: 30vw;
        background-color: var(--cll-in-primary);
        padding: 10px;
        border: 2px solid var(--cll-primary);
    }
    > div > div > h1 {
        font-size: 30px;
        color:var(--cll-primary);
    }

    > div > div.form {
        color: var(--cll-primary);
        font-weight: 700;
        width: auto;
        heigh: auto;
    }
    .button {
        font-weight: var(--fw-texts);
        font-size: 1.5rem;
        width: 100%;
        float: right;
        padding: 10px;
        color: var(--cll-in-primary);
        background-color: var(--cll-primary);
        border-radius: var(--boxes-radius);
        border: none;
    }

    .button:hover {
        background-color: #92ad44;
        transition: 0.3s;
        cursor: pointer;
    }

    @media (max-width:900px){
        >div {
            width:30vw;
            min-width:200px;
        }
    }
`;