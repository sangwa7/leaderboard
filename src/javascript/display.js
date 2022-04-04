import { names } from './storage.js';

export const display = ()=> {
  names.forEach(name => {
      console.log(name.name);      
  });
}