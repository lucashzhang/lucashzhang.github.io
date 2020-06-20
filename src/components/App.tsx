import React, { Component } from 'react';
import '../css/App.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views'
import TimelinePage from './TimelinePage';

interface Prop {

}

interface State {
  tabNum: any
}

class App extends Component<Prop, State> {

  constructor(prop: Prop) {
    super(prop);
    this.state = {
      tabNum: 0
    }
  }

  tabProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  handleTabChange = (e: any, newNum: number) => {
    this.setState({
      tabNum: newNum
    })
    console.log(newNum)
  }

  handleSwipeChange = (newNum: number) => {
    this.setState({
      tabNum: newNum
    })
  }


  render() {
    return (
      <div className="App">
        <AppBar position="sticky" color="primary">
          <Tabs value={this.state.tabNum} onChange={this.handleTabChange} indicatorColor="secondary" variant="fullWidth">
            <Tab label="Home" {...this.tabProps(1)} />
            <Tab label="Programming" {...this.tabProps(2)} />
            <Tab label="Design" {...this.tabProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.tabNum}
          onChangeIndex={this.handleSwipeChange}
          animateHeight={true}
          enableMouseEvents>
          <div>Home</div>
          <TimelinePage></TimelinePage>
          <div>Designs</div>
        </SwipeableViews>

      </div>
    );
  }
}

export default App;