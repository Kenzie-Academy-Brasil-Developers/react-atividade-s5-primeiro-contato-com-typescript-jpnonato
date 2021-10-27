interface Item {
    name: string
    age: string
    hobby: string
}


interface Person {
   item: Item
}

export const Card = ({item}: Person) => {

   const{name,age,hobby} = item
    return(
        <div className='card'>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{hobby}</h3>
        </div>
    )
}