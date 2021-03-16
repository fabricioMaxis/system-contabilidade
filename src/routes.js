import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


//IMPORTS ADMIN
import DashBoard from './pages/admin/dashboard';

import Clientes from './pages/admin/clientes';
import ClientesEdit from './pages/admin/clientes/clientes.edit';
import ClientesRegister from './pages/admin/clientes/clientes.register';

import Users from './pages/admin/users';
import UsersEdit from './pages/admin/users/users.edit';
import UsersRegister from './pages/admin/users/users.register';


//IMPORT CLIENT
import Home from './pages/client/home';
import ClientesDetails from './pages/client/clientes/clientes.details';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
  {/*ROTA CLIENT*/}
        <Route path='/' exact component={Home} />
        <Route path='/clientes/:idCliente' exact component={ClientesDetails} />

   {/*ROTA ADMIN*/}
        <Route path='/admin' exact component={DashBoard} />

        <Route path='/admin/clientes' exact component={Clientes} />
        <Route path='/admin/clientes/register' exact component={ClientesRegister} />
        <Route path='/admin/clientes/edit/:idCliente' exact component={ClientesEdit} />

        <Route path='/admin/users' exact component={Users} />
        <Route path='/admin/users/register' exact component={UsersRegister} />
        <Route path='/admin/users/edit/:idUser' exact component={UsersEdit} />

      </Switch>
    </BrowserRouter>
  )
}