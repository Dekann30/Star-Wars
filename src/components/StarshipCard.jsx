

const StarshipCard = function ({starship}){
    return( 
        <div className='allCards'>
        {starship.map((ship, idx)=>{
            return(
                <div className='container'>
                    <div key={idx}>{ship.name}</div>
                </div>
            )
        })}
        </div>
    )
}
export default StarshipCard