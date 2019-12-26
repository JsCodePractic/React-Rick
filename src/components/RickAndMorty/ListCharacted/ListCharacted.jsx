import React, { useContext, useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../../../App";

import './ListCharacted.css';

const ListCharacted = () => {
  const { list, setList } = useContext(DataContext)
  const [isLoaded, setIsLoaded] = useState(!!list.length)

  const sort = useCallback((by) => () => {
    const [firstOpt, secondOpt] = by === 'asc' ? [1, -1] : by === 'desc' ? [-1, 1] : [0, 0]
    setList([...list].sort((a, b) => {
      if (a.name > b.name) {
        return firstOpt;
      }
      if (a.name < b.name) {
        return secondOpt;
      }

      return 0;
    }))
  }, [list, setList])

  const fetchList = useCallback(() => {
    if (isLoaded) {
      setIsLoaded(false)
    }

    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(({ info, results }) => {
        setList(results)
      })
      .catch(e => setList([]))
      .finally(() => { setIsLoaded(true) })
  }, [isLoaded, setIsLoaded, setList])

  useEffect(() => {
    if (!list.length) {
      fetchList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isLoaded)
    return <div>Loading...</div>

  return (
    < div className="topContent">
      
      <div className="Top">
        <div className='SortButtonConteiner'>
          <button className="sortButton" onClick={sort('asc')}>A-Z</button>
          <button className="sortButton" onClick={sort('desc')}>Z-A</button>
        </div>
        <div className="CharactedList">
        <h1 className="charactedlistTitel">Список персонажей</h1>
        </div>
      
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="GoToProgres">
        <button><Link to='/ProgresBar' className='ProgresBar'>Go to Progres Bar </Link></button>
      </div>
      <button onClick={fetchList}>Refetch List</button>
    </div>
  )
}

export default ListCharacted;
