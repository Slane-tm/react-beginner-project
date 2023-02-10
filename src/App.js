import React from 'react';
import { Collection } from './Collection.jsx'
import './index.scss';
import data from './data.json'

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [collections, setCollections] = React.useState(data.collections)
  React.useEffect(() => {
    console.log(collections)
  })
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {
          collections.map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}
            />
          ))
        }
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
