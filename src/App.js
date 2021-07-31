import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterShow: false
    };
  }

  filterTrigger() {
    if(this.state.filterShow === false) {
      this.setState({filterShow: true})
    } else {
      this.setState({filterShow: false})  
    }
  }

  render() {
    return (
      <>
        <Header filterShow={this.state.filterShow} filterTrigger={() => this.filterTrigger()} />
        <Main filterShow={this.state.filterShow}/>
        <Footer />
      </>
    )
  };
}

export default App;
