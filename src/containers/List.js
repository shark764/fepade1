import React, { useState } from 'react';
import Item from '../components/Item';

function List() {
  const [records, setRecords] = useState([
    { id: 1, artist: 'Ariana Grande', title: 'Thank U, Next' },
    { id: 2, artist: 'Damian "Jr. Gong" Marley', title: 'Welcome to Jamrock' },
    { id: 3, artist: 'The Calling', title: 'Camino Palmero' },
    {
      id: 4,
      artist: 'Billie Eilish',
      title: 'When We All Fall Asleep, Where Do We Go?',
    },
    { id: 5, artist: 'Incubus', title: 'Morning View' },
    { id: 6, artist: 'The Strokes', title: 'Is This It?' },
  ]);

  return (
    <div>
      {records.map(record => {
        return <Item record={record} key={record.id} />;
      })}
    </div>
  );
}

export default List;
