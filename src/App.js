import './App.css';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function App() {
  return (
    <div className="App">
      <Input defaultValue="Input" inputProps={{ 'aria-label': 'description' }} />
    </div>
    /*
    <div className="List">
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Item 2" />
      </ListItemLink>
    </List>
  </div>
  */
  );
}

export default App;
