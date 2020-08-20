import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { getRecords } from '../sdk/contentful';

function List() {
  const [records, setRecords] = useState([]);

  const searchRecords = async function () {
    const fetchedRecords = await getRecords({
      content_type: 'records',
      // 'fields.title[match]': '<value>'
    });

    console.log(fetchedRecords);

    setRecords(fetchedRecords);
  };

  useEffect(() => {
    searchRecords();
  }, []);

  return (
    <div>
      {records.map(record => {
        return <Item record={record} key={record.id} />;
      })}
    </div>
  );
}

export default List;
