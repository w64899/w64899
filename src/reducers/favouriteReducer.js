const Favourite = (favs=[], action)=>{
    if(action.type === 'FAV'){
        let tempFavs=favs.filter((item)=>item.id===action.payload.id)
        if(tempFavs<1){
            return [...favs, action.payload]
        }
        else{
            return favs
        }
    }
    if(action.type === 'UNFAV'){
        return favs.filter((item)=>item.id!==action.payload.id)
    }
    return favs
}
export default Favourite