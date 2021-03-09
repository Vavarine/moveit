import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.scss';

function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vavarine.png" alt="Vavarine" />
      <div>
        <strong>Evailson Marques</strong>
        <p>
          <img src="/icons/level.svg" alt="Level" />
          level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile