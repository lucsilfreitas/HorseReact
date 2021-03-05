import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserTable from './components/users/List';
import UserFormEdit from './components/users/Edit';
import UserFormNew from './components/users/New';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={UserTable} />
        <Route exact path='/users/new' component={UserFormNew} />
        <Route exact path='/users' component={UserTable} />
        <Route exact path='/users/:id' component={UserFormEdit} />
        
    </Switch>
</BrowserRouter>

)

export default Routes;