import React from 'react';
import './App.css';
import UserCard from './UserCard';
import axios from 'axios';

class App extends React.Component {
    state = {
      user: {},
      followers: []
    };
  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/addison-hill')
      .then(res => {
        console.log('rizzy', res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  fetchFollowers = () => {
    axios
      .get('https://api.github.com/users/addison-hill/followers')
      .then(res => {
        console.log('followers res', res)
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <h1>Addison and His Awesome Followers</h1>
      <button onClick={this.fetchFollowers}>Fetch Followers</button>
      <UserCard user={this.state.user} followers={this.state.followers} />

    </div>
  );
  };
}

export default App;
