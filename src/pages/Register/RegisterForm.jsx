import styled from 'styled-components';

export const RegisterForm = styled.div`
    inherited: none;
    justify-content: center;
    align-items: center;
    padding: 0 0 10px 0;
    > label,
    > input,
    > span {
        width: 100%;
        font-family: var(--ff-texts);
        font-size: 16px;
    }
    >span {
        color: red;
        font-size: .7rem;

    }
    > label {
        display: block;
    }

    >input::placeholder {
        color: var(--cll-primary);
        font-weight: 700;
    }
`;