import styles from './Project.module.css'
import viberr from '../../assets/assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/assets/fresh-burger.png'
import Hipsster from '../../assets/assets/hipsster.png'
import fitlift from '../../assets/assets/fitlift.png'


function Project() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <div className={styles.projectContainer}>
            <ProjectCard 
            src={viberr} 
            link="https:github.com"
            heading="Viberr"
            pname="Streaming App"
            />
            <ProjectCard 
            src={freshBurger}
            link="https:github.com"
            heading="Fresh Burger"
            pname="Hamburger Restaurant"
            />

            <ProjectCard 
            src={Hipsster} 
            link="https:github.com"
            heading="Hipsster"
            pname="Glasses Shop"
            />
            <ProjectCard 
            src={fitlift} 
            link="https:github.com"
            heading="FitLift"
            pname="Fitness App"
            />
        </div>
    </section>
  )
}

export default Project