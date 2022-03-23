import { RegisterStyled } from './RegisterContainerStyle';

const RegisterContainer = ({ title, children, setShow}) => {
    return (
        <RegisterStyled onClick={(e) => { setShow(false) } }>
            <div onClick={(e) => { e.stopPropagation(); } }>
                <div><h1>{title}</h1></div>
                <div className='form'>{children}</div>
            </div>
        </RegisterStyled>
    );
}

export default RegisterContainer;