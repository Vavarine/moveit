import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.scss';

function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesCharArr = String(minutes).padStart(2, '0').split('');
  const secondsCharArr = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return(
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
      <button 
        type='button' 
        className={styles.countdown__button}
        onClick={startCountdown}
      >
        Iniciar um ciclo
        <img src="icons/triangle.svg"/>
      </button>
    </div>
    
  )
}

export default Countdown;