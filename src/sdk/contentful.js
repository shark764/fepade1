import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'srlpekq85luo',
  accessToken: 'evMFF1eK--2PX6Qqrlq8glrKOurVH1pdvaI-FRgmufU',
});

export async function getRecords(query) {
  return client
    .getEntries(query)
    .then(result => {
      return result.items;
    })
    .then(items => {
      return dataTransformer(items);
    })
    .catch(err => {
      console.error(err);
    });
}

function dataTransformer(data) {
  return data.map(item => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });
}
