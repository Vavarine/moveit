import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

import CloseSVG from './svgs/CloseSVG';
import styles from '../styles/components/Countdown.module.scss';

function Countdown() {
  const { seconds,
    minutes,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const minutesCharArr = String(minutes).padStart(2, '0').split('');
  const secondsCharArr = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdown__container}>
        <div>
          <span>{minutesCharArr[0]}</span>
          <span>{minutesCharArr[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsCharArr[0]}</span>
          <span>{secondsCharArr[1]}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdown__button}
        >
          Ciclo encerrado
          <img src="/icons/check.svg" />
        </button>
      ) : (
          isActive ? (
            <button
              type='button'
              className={`${styles.countdown__button} ${styles.countdown__buttonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <CloseSVG />
            </button>
          ) : (
              <button
                type='button'
                className={styles.countdown__button}
                onClick={startCountdown}
              >
                Iniciar Ciclo
                <img src="icons/triangle.svg" />
              </button>
            )
        )}

    </div>
  )
}

export default Countdown;