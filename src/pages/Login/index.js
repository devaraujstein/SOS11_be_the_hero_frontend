import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Login(){
  const [ong_id, setOngId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('session', {ong_id});

      localStorage.setItem('ongName', response.data.ong.name);
      localStorage.setItem('token', response.data.token);

      history.push('/profile');

    } catch (error) {
      alert('Falha no login, tente novamente.');
    }

  }

  return(
    <div>
      <div className="login-container">
        <section className="form">
          <img src={logoImg} alt="Be The Hero"/>

          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>

            <input placeholder="Sua Id"
                   value={ong_id}
                   onChange={e => setOngId(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
            </Link>
          </form>
        </section>
    
        <img src={heroesImg} alt="Heroes"/>
      </div>
    </div>
  );
}

export default Login;