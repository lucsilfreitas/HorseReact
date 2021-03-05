import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default class UserForm extends Component {

  state = {
    _user: {
      ID: '',
      USERNAME: '',
      PASSWORD: '',
      STATUS: ''
    },
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/users/${id}`);
    this.setState({ _user: response.data });
  }

  handleInputChange(event) {
    this.setState({
      ...this.state,
      _user: {
        ...this.state._user,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    const { _user } = this.state;

    return (
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input
              value={_user.ID}
              name="ID"
              className="form-control"
              id="ID"
              placeholder="Seu email"
              onChange={this.handleInputChange.bind(this)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input
              value={_user.USERNAME}
              className="form-control"
              id="username"
              name="USERNAME"
              placeholder="Username"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={_user.PASSWORD}
              className="form-control"
              id="password"
              name="PASSWORD"
              placeholder="Senha"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Status</label>
            <input
              value={_user.STATUS}
              className="form-control"
              id="status"
              name="STATUS"
              placeholder="Status"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
          <Link to={'/users'} className="btn btn-default"> Voltar </Link>
        </form>
      </div>
    )
  }

}

