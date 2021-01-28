import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');
  console.log('retorno do usestate: ', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura - projeto base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(evento) {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo um envio de formulário via react');

              // router manda para a próxima página
            }}>
              <input onChange={function(evento) {
                console.log(evento.target.value);
                // State
                // name = evento.target.value;
                setName(evento.target.value);
              }} 
              placeholder="fala teu nome aí, mané"/>
              <button type="submit" disabled={ name.length === 0 }>
                Jogar { name }
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>quizes do pessoal...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mjunior447" />
    </QuizBackground>
  );
}
