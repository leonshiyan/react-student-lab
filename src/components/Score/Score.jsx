const Score = ({scores}) => {
  return ( 
    <>
      <div>
        {scores.map((score) => (
          <p>{score.date} score : {score.score}</p>
      ))}
      </div>
    </>
  )
}
export default Score