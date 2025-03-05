

function SkillsCard({mark,skill}) {
  return (
    <span>
                <img src={mark} alt={mark} />
                <p>{skill}</p>
            </span>
  )
}

export default SkillsCard