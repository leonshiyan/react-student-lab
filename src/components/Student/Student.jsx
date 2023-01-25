import Score from "../Score/Score"

const Student = ({student}) => {
  return ( 
    <>
    <div>
      <h3>Name: {student.name}</h3>
      <p>Bio: {student.bio}</p>
      <Score scores = {student.scores}/>
    </div>
    </>
  )
}

export default Student