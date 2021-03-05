import React, { Component } from 'react';
import api from '../../services/api';

export default class UserForm extends Component{

    state = {
        _user :{},
    }

async componentDidMount() {
    console.log("teste")
    const { id } = this.props.match.params;
    const response = await api.get(`/users/${id}`);
    this.setState({ _user : response.data });
}


    render() {
        const { _user} = this.state;
        return(
            
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ID</label>
                            <input type="text" value={_user.ID} className="form-control" id="id" aria-describedby="emailHelp" placeholder="Seu email" />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">User Name</label>
                            <input type="text" value={_user.USERNAME} className="form-control" id="userneme" placeholder="Senha" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="text" value={_user.PASSWORD} className="form-control" id="password" placeholder="Senha" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputPassword1">Status</label>
                            <input type="text" value={_user.STATUS} className="form-control" id="status" placeholder="Senha" />
                        </div>
            
                        <button type="submit" className="btn btn-primary">Enviar</button>
                      
                    </form>
                </div>
        )
    }
    
}

