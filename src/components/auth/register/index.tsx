import { Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { IPropsRegister } from '../../../common/types/auth'

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { setEmail, setPassword, setRepeatPassword, setFirstName, setUserName, navigate } = props
  return (
    <>
      <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Register</Typography>
      <Typography variant="body1" marginBottom={1} padding={1} fontFamily='Poppins' textAlign='center'>Enter data for register</Typography>
        <TextField fullWidth={true} margin='normal' label="name" variant="outlined" placeholder='Enter your name' onChange={(e) => setFirstName(e.target.value)}/>
        <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Enter your username' onChange={(e) => setUserName(e.target.value)}/>
        <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
        <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
        <TextField type='password' fullWidth={true} margin='normal' label="Confirm Password" variant="outlined" placeholder='Enter your confirm password' onChange={(e) => setRepeatPassword(e.target.value)}/>
        <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Register</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins', }}>If you have account?<span className='inicitingText' onClick={() => navigate('/login')}>Autorization</span></Typography>
        
    </>
  )
}

export default RegisterPage