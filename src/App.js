import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

/*
function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system! </h2>
    </div>
  );
}
*/

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '기매원',
    'birthday' : '940426',
    'gender' : '남자',
    'job' : '대학생'
  },

  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '나도언',
    'birthday' : '840426',
    'gender' : '여자',
    'job' : '화가'
  },

  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '다아거',
    'birthday' : '740426',
    'gender' : '여자',
    'job' : '프로그래머'
  },

]

class App extends Component {
  render(){
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer 
              //map 함수 사용시 반드시 key 값을 지정해주어야한다.
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}



export default App;
