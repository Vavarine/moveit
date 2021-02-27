import styles from '../styles/components/ExperienceBar.module.scss';

function ExperienceBar() {
  return (
    <header className={styles.experienceBar} >
      <span>0 xp</span>
        <div className={styles.experienceBar__bar}>
          <div style={{width: '60%'}} />
          <span 
            className={styles.experienceBar__current}
            style={{left: '60%'}}
          >400 xp</span>
        </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;