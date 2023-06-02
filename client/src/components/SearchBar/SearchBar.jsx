import style from './SearchBar.module.css';
import { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState('');
  const [addId, setAddId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleAddClick = () => {
    if (!addId.includes(id)) {
      onSearch(id);
      setAddId([...addId, id]);
    } else{
      window.alert('Esta carta ya esta agregada')
    }
  };

  

  return (
    <div className={style.search}>
      <input type='search' onChange={handleChange} value={id} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );  
};

export default SearchBar;
