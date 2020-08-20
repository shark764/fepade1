import React, { useState, useEffect, useContext, useCallback } from 'react';
import Item from '../components/Item';
import { getRecords } from '../sdk/contentful';
import { SearchContext } from '../context/SearchContext';

function List() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useContext(SearchContext);

  const searchRecords = useCallback(
    async function () {
      const fetchedRecords = await getRecords({
        content_type: 'records',
        'fields.title[match]': search,
      });

      console.log(fetchedRecords);

      setRecords(fetchedRecords); //Sic Mundus Creatus Est
    },
    [search]
  );

  useEffect(() => {
    searchRecords();
  }, [searchRecords]);

  return (
    <div>
      {records.map(record => {
        return <Item record={record} key={record.id} />;
      })}
    </div>
  );
}

export default List;
