'use client'
import { useDispatch, useSelector } from 'react-redux';
import mensajeríaApi from '../api/mensajeriaApi';
import { onLogin, onLogout ,clearErrorMessage } from '../store/auth/authSlice';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

    const UseAuthStore = () => {

        const {status, user, errormessage} = useSelector(state => state.auth)
        const router = useRouter();
        const dispatch = useDispatch();
        
    
        const startLogin = async({username , contraseña})=>{
                    
            try {
                
                const {data} = await mensajeríaApi.post('/auth/login',{login:username,password:contraseña})
                console.log('here',data);
                localStorage.setItem('token',data.token)
                Cookies.set ( 'token' , data.token )
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(onLogin({name: data.user.username , uid: data.user.id}))
                router.push('/dashboard')
                toast.success('¡Inicio de sesión exitoso!');
            } catch (error) {
                console.log(error)
                    dispatch(onLogout('credenciales incorrectas'))
                    Cookies.remove('token')
                    setTimeout(() => {
                        dispatch(clearErrorMessage());
                    }, 100);
            }

        
        }

        const startLogout = ()=>{
            localStorage.clear();
            Cookies.remove('token')
            router.push('/')
            dispatch(onLogout())
        }

        return {
            // propiedades
            status,
            user,
            errormessage,

            // metodos
            startLogin,
            startLogout
        };
    }

    export default UseAuthStore;
