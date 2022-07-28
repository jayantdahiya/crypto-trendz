import './App.scss';
import {Button, Grid, Column, ContentSwitcher, Switch} from '@carbon/react';


function App() {
  return (
    <Grid>
     <Column>1</Column>
     <Column>
     <ContentSwitcher onChange={console.log}>
  <Switch name={'first'} text='First section' />
  <Switch name={'second'} text='Second section' />
  <Switch name={'third'} text='Third section' />
</ContentSwitcher>
</Column>
    </Grid>
  );
}

export default App;