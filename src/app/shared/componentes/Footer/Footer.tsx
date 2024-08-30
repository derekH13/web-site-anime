import './Footer.css'



function Footer(){
    return(
        <div className='container-footer'>
            <img src="/assets/japao/cinza.png" alt="" />
            <h1>&copy; 2024 Seu Nome ou Nome da Sua Empresa. Todos os direitos reservados.</h1>
       
            
      
<div className="alinhar-sociais">
  <a href="https://github.com/derekH13" target='_blank'>
  <button
    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 w-full to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    GitHub
  </button>
  </a>


<a href="https://www.linkedin.com/in/derek-henrique-0178632b6/" target='_blank'>
  <button
    className="text-white bg-gradient-to-r from-blue-400 w-full via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Linkedin
  </button>
  </a>

<a href="https://www.instagram.com/deckin_3/" target='_blank'>
  <button
    className="text-white bg-gradient-to-r from-pink-500 w-full via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Instagram
  </button>
</a>

</div>



        </div>
    )
}

export default Footer