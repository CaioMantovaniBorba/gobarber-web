import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile, Content, Schedule, NextAppointment, Calendar } from './styles';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber"/>

        <Profile>
          <img src={user.avatar_url} alt={user.name}/>
          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Header>

    <Content>
      <Schedule>
        <h1>Horários agendados</h1>
        <p>
          <span>Hoje</span>
          <span>Dia 17</span>
          <span>Domingo</span>
        </p>

        <NextAppointment>
          <strong>Atendimento a seguir</strong>
          <div>
            <img src="https://avatars2.githubusercontent.com/u/38335770?s=460&u=a5b1e9ff1a5b094e518862d3a098a880e753b443&v=4" alt="Caio Mantovani Borba"/>
            <strong>Caio Mantovani Borba</strong>
            <span><FiClock /> 08:00</span>
          </div>
        </NextAppointment>
      </Schedule>
      <Calendar />
    </Content>
  </Container>
  );
};

export default Dashboard;
