import {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { FormInputs } from 'types';
import { formSchema } from 'validations/formValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '../../api/auth/auth'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from 'app/hooks';
import { accessTokenSelector, userSlice } from 'slices/user/userSlice';
import { useAppSelector } from 'app/hooks';
import { StyledErrorMsg, StyledLoginBtn, StyledTextField, StyledForgotPassBtn } from './loginForm.styled';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function LoginForm() {
  const { register, handleSubmit , formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(formSchema), 
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const accessToken = useAppSelector(accessTokenSelector);

  const [apiError, setApiError] = useState<boolean>(false);

  const [ trigger, { data, error } ] = useLoginMutation()


  const onSubmit = async (formData: FormInputs) => {
      setApiError(false);
      trigger(formData);
      console.log("this is data", data)
  };

  
  useEffect(()=>{
    if(accessToken) {
      navigate("/");
    }
  },[navigate, accessToken])


  useEffect(()=>{
    if(error) {
      setApiError(true);
    }
  },[error])

  useEffect(()=>{
    if(data?.accessToken) {
      dispatch(userSlice.actions.setUser(data))
      navigate("/");
    }
  },[data, data?.accessToken, navigate, dispatch])
  

  return (
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <StyledTextField
            error={!!errors.email || apiError}
            label="User Name"
            {...register('email')}
            InputProps={{
              endAdornment: (!!errors.email || apiError) && <ErrorOutlineIcon color='error' />
            }}
          />
          {errors.email && <StyledErrorMsg>{errors.email.message}</StyledErrorMsg>}

          <StyledTextField 
              error={apiError}
              label="Password"
              type="password" {...register('password')}     
              InputProps={{
                  endAdornment: apiError && <ErrorOutlineIcon color='error' />
                }} 
            />
          {apiError && <StyledErrorMsg>The email or password you entered don't match</StyledErrorMsg>}

          <StyledForgotPassBtn>Forgot your password?</StyledForgotPassBtn>
          <StyledLoginBtn type="submit" variant="contained" fullWidth>
            Log in
          </StyledLoginBtn>
      </form>
  );
}

