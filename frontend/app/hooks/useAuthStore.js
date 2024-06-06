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
                Cookies.set('token' , data.user.token )
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

        const startRegister = async({Name,Email,Login,Password,Rol,Address,Cell_phone})=>{;
    
             try {
                
                const {data} = await mensajeríaApi.post('/auth/register',{Name, Email, Login, Password, Rol, Address, Cell_phone})
                if (data) {
                    router.push('/login')
                    toast.success('¡Registro exitoso!'); 
                }    
                
             } catch (error) {
                console.error(error);
                dispatch(onLogout(error.response?.data || 'Error al registrar Usuario'))
                setTimeout(() => {
                    dispatch(clearErrorMessage())
                }, 100);
    
             }
        }

        const startLogout = ()=>{
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
            startLogout,
            startRegister
        };
    }

    export default UseAuthStore;
