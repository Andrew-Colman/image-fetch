import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import { nanoid } from 'nanoid';

const adapter = new LocalStorage('db');
// eslint-disable-next-line import/prefer-default-export
export const db = low(adapter);
// db definition: id: uniq id, img: img src, size: x y

db.defaults({ posts: [] }).write();

// Data is automatically saved to localStorage
// eslint-disable-next-line no-unused-vars
export const saveImage = (params) => {
  db.get('posts')
    .push({ id: nanoid(10), title: `${params}`, size: 10 })
    .write();
};

export const state = db.getState();
