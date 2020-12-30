import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root : { // root 는 전체 설정 
    width : '100%',
    //marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : { // 테이블이 전체에서 최소 1090 가진다
    minwidth : 1080
  }
})

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
    const {classes} = this.props ;
    return (
      <Paper className={classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}



export default withStyles(styles)(App);
