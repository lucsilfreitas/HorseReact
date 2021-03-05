import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class UserTable extends Component {

  state = {
    _users: [],
  }

  componentDidMount() {
    api.get('/users')
      .then(response => this.setState({ _users: response.data }))
  }

  render() {
    return (
      <div className=''>
        <br></br>
        <h3>Lista de Usuários ( {this.state._users.length} )</h3>
        <br></br>
        <div className="row">
          <Link to={`/users/new`} className="btn btn-sucess">Novo</Link>
        </div>
        <br></br>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Pasword</th>
              <th scope="col">Status</th>
              <th scope="col">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {this.state._users.map(user => (

              <tr key={user.ID}>
                <th scope="row">{user.ID}</th>
                <td>{user.USERNAME}</td>
                <td>{user.PASSWORD}</td>
                <td>{user.STATUS}</td>
                <td><Link to={`/users/${user.ID}`}>Detalhe</Link></td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>

    )
  }
} 
