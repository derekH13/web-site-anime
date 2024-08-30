import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Cadastro, Dashboard, Dorama, Pesquisa } from "../pages";

import '../../app/style.css'
import 'flowbite/dist/flowbite.css';
import Provider from "../shared/contexts/Provider";
//config do react route dom padrão

export const Routes = () => {

    return (
        <Provider>
            <BrowserRouter>
            <Switch>

                {/* quando o navegador for pra rota '/pagina-inicial' vai para a pagina "Dashboard"  */}
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/pagina-Dorama" element={<Dorama />} />  
                <Route path="/pagina-Cadastro" element={<Cadastro />} />
                <Route path="/pagina-Pesquisa" element={<Pesquisa />} />   



            {/* se a url não se encaixar com nenhuma a cima */}
            <Route path="*" element={<Navigate to="pagina-inicial" />}/>

            </Switch>
            </BrowserRouter>
        </Provider>
    );
}