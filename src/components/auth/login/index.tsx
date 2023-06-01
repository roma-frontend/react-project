import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';


const LoginPage: React.FC<IPropsLogin>= (props: IPropsLogin): JSX.Element => {
  const {setPassword, setEmail, navigate} = props;
  return (
    <>
        <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Authorization</Typography>
        <Typography variant="body1" marginBottom={3} padding={3} fontFamily='Poppins' textAlign='center'>Enter your login and password</Typography>
        <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
        <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>
        <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Enter</Button>
        <Typography variant="body1" sx={{fontFamily: 'Poppins', }}>Don't have an account?<span className='inicitingText' onClick={() => navigate('/register')}>Register</span></Typography>
        
    </>
  );
};

export default LoginPage