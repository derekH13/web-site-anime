import { FormEvent, useContext, useRef, useState } from 'react';
import NavBar from '../../shared/componentes/NavBar/NavBar'
import './Cadastro.css'
import AppContext from '../../shared/contexts/AppContext';
import Provider from '../../shared/contexts/Provider';


import { motion } from 'framer-motion';


export function Cadastro(){
    
    const loginRef = useRef<string>('')
    const emailRef = useRef<string>('')
    const senhaRef = useRef<string>('')
    const senharRef = useRef<string>('')

    const [erroCadastro, setErroCadastro] = useState(false)

    const {setdadosUsuario, dadosUsuario } = useContext(AppContext)


    const carouselId = useRef(`carousel-${Math.random().toString(36).substr(2, 9)}`).current;



    function PegaDadosForm(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(senhaRef.current === senharRef.current){
            setdadosUsuario({login: loginRef.current, email: emailRef.current, senha: senhaRef.current})

        }else{

        setErroCadastro(true)            
        
         setTimeout(() => {
         setErroCadastro(false)  
         }, 4900)
        }  
    }

    console.log(dadosUsuario);
    



    return(

        <div className='cadastro'>
            <div className="fundo-cadastro">


                {
                    (erroCadastro)? <div className="alert alert-danger alert-erro" role="alert">
                    ⚠️ Erro ao cadastrar, senhas diferentes!
                    <p></p>
                    </div> : ''
                }


            <NavBar />
                <img className='descktop' src="/assets/japao/fundo.png" alt="" />
                <img className='mobille' src="/assets/japao/xxx.png" alt="" />
            </div>

            <motion.div
              initial={{x: 200, opacity: .5 }}
              animate={{x: 0, opacity: 1 }}
              transition={{duration: 1.1}}
            className="container-cadastro">
                <div className="formulario">
                        <h1 className='title-cadastro'>CADASTRO</h1>

                    <form 
                    action="" 
                    className="form-cadastro"
                    onSubmit={(e) => PegaDadosForm(e)}
                    >
                        <label htmlFor="login">Login:</label>
                        <input 
                        placeholder='coloque seu login'  
                        type="text" id='login' 
                        onChange={(e) => loginRef.current = e.target.value}
                        />

                        <label htmlFor="email">Email:</label>
                        <input  
                        placeholder='coloque seu email' 
                        type="email" 
                        id='email' 
                        onChange={(e) => emailRef.current = e.target.value}
                        />

                        <label htmlFor="senha">Senha:</label>
                        <input 
                        placeholder='senha ilustrativa'  
                        type="password" id='senha' 
                        onChange={(e) => senhaRef.current = e.target.value}
                        />

                        
                        <label htmlFor="senhar">Repita a senha:</label>
                        <input 
                        placeholder='senha ilustrativa'  
                        type="password" 
                        id='senhar' 
                        onChange={(e) => senharRef.current = e.target.value}
                        />

                        <div className="container-btnC">
                            <button className='btn-cadastro1' type="submit">logar</button>
                            <button className='btn-cadastro2' type="button">cadastrar</button>
                        </div>

                    </form>
                </div>

                <img className='garota-cadastro' src="/assets/japao/garota.png" alt="" /> 
            </motion.div>

        </div>
    )
}

