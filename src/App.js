import React, { Component } from 'react'
import Header from './Components/Header'

import ChipInput from 'material-ui-chip-input'
import Button from '@material-ui/core/Button'
import Card from './Components/Section'
class App extends Component {
 


 render() {
    return (
      <div>
        <Header/><br/><br/>
        <div align="center">
        <form>
        <ChipInput
  placeholder="Eg:Onions"
  variant="outlined"
/>
        
         <h3><Button onClick={this.onClick} variant="contained" color="secondary">
         Search
       </Button></h3>
       </form>
       </div>
       <Card/>
      </div>
    )
  }
}
export default App;