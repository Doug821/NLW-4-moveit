import React from "react";
import { useContext } from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import style from '../styles/pages/Home.module.css';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';


import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import ChallengesProvider from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme: boolean;

}

export default function Home({ toggleTheme, ...rest }) {

  const { colors, title } = useContext(ThemeContext);

  return (

    <ChallengesProvider
      level={rest.level}
      currentExperience={rest.currentExperience}
      challengesCompleted={rest.challengesCompleted}
    >

      <div className={style.container}>
        <Head>
          <title>Início | Move.It</title>
        </Head>

        <ExperienceBar />
        <footer className={style.footer}>

          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={true}
            height={10}
            width={36}
            handleDiameter={20}
            offHandleColor={colors.subTitle}
            onHandleColor={colors.grayLine}
            offColor={colors.grayLine}
            onColor={colors.subTitle}
            uncheckedIcon={false}
            uncheckedHandleIcon={
              <div className={style.buttonMode}>
                <img style={{ width: '30px', height: '30px' }} src="icons/light.svg" alt="" />
              </div>
            }
            checkedHandleIcon={
              <div className={style.buttonMode}>
                <img style={{ width: '30px', height: '30px' }} src="icons/dark.svg" alt="" />
              </div>
            }

          />
        </footer>

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}

