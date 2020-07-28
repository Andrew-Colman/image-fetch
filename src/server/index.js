import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

db.defaults({ posts: [] }).write();

// Data is automatically saved to localStorage
db.get('posts').push({ title: 'lowdb' }).write();
