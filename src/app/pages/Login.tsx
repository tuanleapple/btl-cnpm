'use client';
import Image from 'next/image';
import Logo from "../../../public/logoLogin.svg"
import { FormEvent } from 'react'
import Google from "../../../public/download.png"

function Login() {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        // const response = await fetch('/api/submit', {
        //   method: 'POST',
        //   body: formData,
        // })
     
        // Handle response if necessary
        // const data = await response.json()
        // ...
      }
    return (
        <>
        <div className='logo'>
            <Image
            priority
            className='logo-image'
            src={Logo}
            alt="truong bach khoa hcm"
            />
        </div>
        <div className='form'>
            <form className='form-data' onSubmit={onSubmit}>
                <div className='text'>Username: </div>
                <input className='input-name' type="text" placeholder="Nhập Username"/>
                <div className='text'>Password: </div>
                <input className='input-name' type="password" placeholder="Nhập Password"/>
                <div className="buttons">
                    <button type="submit" className="login-button">Login in</button>
                </div>
                <Image
                priority
                className='logo-image'
                src={Google}
                alt="truong bach khoa hcm"
                />                
            </form>
        </div>
        </>
    )
}
export default Login