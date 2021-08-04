import React,{useState} from 'react'

import {Form,FormGroup,Input,Card,Button} from 'reactstrap'

import axios from 'axios'


const LoginForm = (props) => {

    const [form, setForm] = useState({email:'',password:''});

    const onChange = (e) => setForm({...form,[e.target.name]:e.target.value})

    const {email,password} = form;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({form})
    }

    const login = async (form) => {
        try {
            const res = await axios.post('',form)
        } catch (err) {
            
        }
    }

    

    return    <Card className='m-5 p-5 w-50 transform'> <Form onSubmit={onSubmit} >
    <FormGroup>
    <Input type='email' name='email' placeholder='Email' value={email} onChange={onChange} />
    </FormGroup>
    
    <FormGroup>
    <Input type='password' name='password' placeholder='Password' value={password} onChange={onChange} />
    </FormGroup>
    <FormGroup>
    <Button className='w-100' color='primary' type='submit' >Login</Button>
    </FormGroup>
    </Form>
    </Card>
}
export default LoginForm