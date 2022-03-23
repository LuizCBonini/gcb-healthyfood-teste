import React, {useEffect} from 'react';

import { useForm } from 'react-hook-form'

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'; 

import RegisterContainer from './RegisterContainer/RegisterContainer';
import { RegisterForm } from './RegisterForm';

const Register = ( { show, setShow } ) => {
    

    //Buscando o CEP e preenchendo seus devidos inputs
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('city', data.localidade);
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('uf', data.uf);
            setFocus('addressNumber');
        })
    }

   
    // Salvando no local Storage
    var salvarData = function() {
        var name = document.getElementById('name').value;
        var birthDate = document.getElementById('birthDate').value;
        var cpf = document.getElementById('cpf').value;
        var cep = document.getElementById('cep').value;
        var city = document.getElementById('city').value;
        var addressNumber = document.getElementById('addressNumber').value;
        var uf = document.getElementById('uf').value;
        var address = document.getElementById('address').value;
        var Neighborhood = document.getElementById('Neighborhood').value;
        localStorage.setItem('name', name);
        localStorage.setItem('birthDate', birthDate);
        localStorage.setItem('cpf', cpf);
        localStorage.setItem('cep', cep);
        localStorage.setItem('city', city);
        localStorage.setItem('address_Number', addressNumber);
        localStorage.setItem('uf', uf);
        localStorage.setItem('address', address);
        localStorage.setItem('Neighborhood', Neighborhood); 
    };

    // Validando os inputs
    const createUserFormSchema = yup.object().shape({
        name: yup.string().min(3, "The name must be at least 3 characters long.").required('Name is required'),
        birthDate: yup.string().required('Birth date is required.'),
        cpf: yup.string().min(11, "The CPF must be at least 11 characters long.").required('CPF is required.'),
        cep: yup.string().min(8, "The CEP must be at least 8 characters long.").required('CEP is required.'),
        city: yup.string().required('City is required.'),
        addressNumber: yup.string().required('Your address number is required.'),
        uf: yup.string().required('UF is required.'),
        address: yup.string().required('Address is required.'),
        neighborhood: yup.string().required('Neighborhood is required.'),
    })

    const {register, handleSubmit, setValue, setFocus, formState: { errors }} = useForm({
        resolver: yupResolver(createUserFormSchema)
    });

    const submitForm = (data) => {
        alert("Obrigado por testar! Informações guardadas no Local storage.")
    }

    useEffect(() => {
        document.body.style.overflowY = show ? 'hidden' : 'auto';
    }, [show]);
    
    document.onchange = salvarData;
    return (!!show ?
        <RegisterContainer title="Register" setShow={setShow} >
            <form className="form-register" onSubmit={handleSubmit(submitForm)}>

                <RegisterForm>
                    <input type="text" id="name" name="name" placeholder="Name:" {...register('name')}/>
                    <span>{errors.name?.message}</span>
                </RegisterForm>

                <RegisterForm>
                    <label htmlFor="birthDate">Birth Date:</label>
                    <input type="date" id="birthDate" name='birthDate' {...register('birthDate')} placeholder="DD/MM/AAAA" />
                    <span>{errors.birthDate?.message}</span>
                </RegisterForm>

                <RegisterForm >
                    <input type="text" name='cpf' id="cpf" placeholder='CPF:' {...register('cpf')}/>
                    <span>{errors.cpf?.message}</span>
                </RegisterForm>

                <RegisterForm>
                    <input type="text" name='cep' id="cep" placeholder='CEP:' {...register("cep")} onBlur={checkCEP} />
                    <span>{errors.cep?.message}</span>
                </RegisterForm>

                <RegisterForm>
                    <input type="text" id='city' name='city' placeholder='City:' {...register("city")} />
                    <span>{errors.city?.message}</span>
                </RegisterForm>

                <RegisterForm >
                    <input type="text" name='addressNumber' id="addressNumber" placeholder='Address Number:' {...register("addressNumber")}/>
                    <span>{errors.addressNumber?.message}</span>
                </RegisterForm>

                <RegisterForm >
                    <input type="text" name='uf' id="uf" placeholder='UF:' {...register("uf")}/>
                    <span>{errors.uf?.message}</span>
                </RegisterForm>

                <RegisterForm >
                    <input type="text" name='address' id="address" placeholder='Address:' {...register("address")}/>
                    <span>{errors.address?.message}</span>
                </RegisterForm>

                <RegisterForm >
                    <input type="text" name='neighborhood' id='Neighborhood' placeholder='Neighborhood:' {...register("neighborhood")}/>
                    <span>{errors.neighborhood?.message}</span>
                </RegisterForm>

                <input className='button' type="submit"/>

            </form>
        </RegisterContainer>
        : ""
     );
}
 
export default Register;