import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import items from '../../server/seeds/itemSeed.json';

function App() {
  return ( <ItemList items ={items}/>
  );
}

export default App;
