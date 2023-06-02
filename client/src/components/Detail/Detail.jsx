import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './Detail.module.css'


const Detail = ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});


useEffect(()=>{
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
           setCharacter(data);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
     return setCharacter({});
}, [id])


    return(
        <div className={style.detail}>
            <img src={character.image && character.image} alt="" />
            <p>
                <h1>Name | {character.name && character.name}</h1>
                <h1>Status | {character.status && character.status}</h1>
                <h1>Species | {character.species && character.species}</h1>
                <h1>Gender | {character.gender && character.gender}</h1>
                <h1>Origins: {character.origin?.name && character.origin?.name}</h1>
            </p>
        </div>
    )
};

export default Detail;