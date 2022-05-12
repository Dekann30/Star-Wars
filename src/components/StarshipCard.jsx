

const StarshipCard = function ({starship}){
    return( 
        <>
        {starship.map((ship, idx)=>{
            return(
                <div className='cards' key={idx}>{ship.name}</div>
            )
        })}
        </>
    )
}
export default StarshipCard