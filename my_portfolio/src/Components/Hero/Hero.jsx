import styles from  './HeroStyles.module.css'
import heroImage from '../../assets/assets/kavu2.jpg'
import sun from '../../assets/assets/sun.svg'
import moon from '../../assets/assets/moon.svg'
import twitterLight from '../../assets/assets/twitter-light.svg' 
import twitterDark from '../../assets/assets/twitter-dark.svg'
import githubLight from '../../assets/assets/github-light.svg'
import githubDark from '../../assets/assets/github-dark.svg'
import linkedinLight from '../../assets/assets/linkedin-light.svg'
import linkedinDark from '../../assets/assets/linkedin-dark.svg'
import CV from '../../assets/myCV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

  
    const {theme,toggleTheme}=useTheme()

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id='hero'className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImage} alt="profile picture of kaveri shirol" />
        <img className= {styles.colorMode}
        src={themeIcon} 
        alt="color mode icon"
        onClick={toggleTheme} />

      </div>
      <div className={styles.info}>
        <h1>
          Kaveri <br /> Shirol
        </h1>
        <h2>
          FRONTEND DEVELOPER
        </h2>
        <span>
          <a href="https://twitter.com" target='_blank'>
          <img src={twitterIcon} alt="Twittwe icon" />
          </a>
        
        
          <a href="https://github.com" target='_blank'>
          <img src={githubIcon} alt="Github icon" />
          </a>
        
          <a href="https://Linkedin.com" target='_blank'>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>With a passion for developing modern react web pages for commercial business.</p>
        <a href={CV} download >
          <button className='hover' >resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero