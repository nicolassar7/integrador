import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../Redux/action';


const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
     isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
     setIsFav(!isFav)
   };
 
   useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);
   
  
   return (
      <div className="card">
         
         <button2 onClick={handleFavorite}>{isFav ? '💚' : '🤍'}</button2>
        
         <button onClick={()=> {onClose(id)}}>CLOSE</button>
         <Link to={`/detail/${id}`}>
            <img src={image} alt="" />    
         </Link>
         <p class="title">{name}</p>
   </div>
   );
};

    
const mapDispatchToProps = (dispatch)=>{
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
};

const mapStateToProps =(state)=>{
  return{
    myFavorites: state.myFavorites
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Card)


