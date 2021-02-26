function ExperienceBar() {
  return (
    <header className="experience-bar" >
      <span>0 xp</span>
        <div className="experience-bar__bar">
          <div style={{width: '60%'}} />
          <span 
            className="experience-bar__current"
            style={{left: '60%'}}
          >400 xp</span>
        </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;