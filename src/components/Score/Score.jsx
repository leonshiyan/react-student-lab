const Score = ({scores}) => {
  return ( 
    <>
      <div>
        {scores.map((score, index) => (
          <p key={index}>{score.date} score : {score.score}</p>
        ))}
      </div>
    </>
  )
}
export default Score