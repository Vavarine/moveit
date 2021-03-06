import { useState, useEffect, useContext } from 'react';
import CloseSVG from './svgs/CloseSVG';
import styles from '../styles/components/Countdown.module.scss';
import { ChallengesContext } from '../contexts/ChallengeContext';

let countdownTimeout: NodeJS.Timeout;

function Countdown() {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const { startNewChallenge } = useContext(ChallengesContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesCharArr = String(minutes).padStart(2, '0').split('');
  const secondsCharArr = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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