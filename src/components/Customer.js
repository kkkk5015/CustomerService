import React from 'react' ;

class Customer extends React.Component {
    // 랜더는 항상 실행되는 부분
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image= {this.props.image} name = {this.props.name} />
                <Customerinfo birthday = {this.props.birthday} gender = {this.props.gender} job= {this.props.job} />
            </div>
        )
    }
}

// 사용자의 id값 image를 랜더링하는 부분
class CustomerProfile extends React.Component {
    render() {
      return (
        //alt =  이미지 설명
        <div> 
          <img src={this.props.image} alt = "profile"/> 
          <h2>{this.props.name}({this.props.id})</h2>
        </div>
      );
    }
  }
  
  // 사용자의 남은 데이터를 출력
  class Customerinfo extends React.Component {
    render() {
      return (
        <div> 
            <p>{this.props.birthday} </p>
            <p>{this.props.gender}</p>
            <p> {this.props.job}</p>
        </div>
        
      );
    }
  }

export default Customer;