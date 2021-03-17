import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default class UserFormNew extends Component {

  state = {
    ID: '',
    USERNAME: '',
    PASSWORD: '',
    STATUS: '',
  }

  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    api.post('/users', this.state)
      .then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error)
      })
  }



  render() {
    return (

      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">ID</label>
            <input type="text" name="ID" value={this.state.ID} onChange={this.dataChange.bind(this)} className="form-control" aria-describedby="emailHelp" placeholder="Seu email" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">User Name</label>
            <input type="text" name="USERNAME" value={this.state.USERNAME} onChange={this.dataChange.bind(this)} className="form-control" placeholder="Senha" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="text" name="PASSWORD" value={this.state.PASSWORD} onChange={this.dataChange.bind(this)} className="form-control" placeholder="Senha" />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Status</label>
            <input type="text" name="STATUS" value={this.state.STATUS} onChange={this.dataChange.bind(this)} className="form-control" placeholder="Senha" />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
          <Link to={`/users`}>Voltar</Link>
        </form>
      </div>
    )
  }

}

