import styles from '../styles/components/Profile.module.scss';

function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/vavarine.png" alt="Vavarine"/>
      <div>
        <strong>Evailson Marques</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          level 1
        </p>
      </div>
    </div>
  )
}

export default Profile