import styles from './Skills.module.css'
import checkMarkIconLight from '../../assets/assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/assets/checkmark-dark.svg'
import SkillsCard from '../../common/SkillsCard'
import {useTheme} from '../../common/ThemeContext'

function Skills() {
  const {theme} = useTheme()
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
  return (
    <section id='skills' className={styles.container}>
        <h1>
            Skills
        </h1>
        <div className={styles.skilList}>
            <SkillsCard mark={checkMarkIcon} skill="HTML"/>
            <SkillsCard mark={checkMarkIcon} skill="CSS"/>
            <SkillsCard mark={checkMarkIcon} skill="Javasript"/>
            <SkillsCard mark={checkMarkIcon} skill="React"/>
            <SkillsCard mark={checkMarkIcon} skill="Java"/>
        </div>
        <hr/>
        <div className={styles.skilList}>
            <SkillsCard mark={checkMarkIcon} skill="Tailwind CSS"/>
            <SkillsCard mark={checkMarkIcon} skill="Redux"/>
            <SkillsCard mark={checkMarkIcon} skill="Git"/>
            <SkillsCard mark={checkMarkIcon} skill="node"/>
            <SkillsCard mark={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills