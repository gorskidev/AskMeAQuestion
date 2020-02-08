import React from 'react';
import logo from './logo.svg';
import './App.css';
import questionLoader from './questionimporter.js';
import answerLoader from './answerimporter.js'; 

class Merger extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      random: Math.floor(Math.random() * 9) + 1,
      showAnswer: false,
      clicks: 0
    }
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
   /* this.setState({
      clicks: this.state.clicks + 1
    }, () => {
      console.log("is", this.state.clicks)
    });*/

  forceUpdateHandler(){
    this.setState({
      //showAnswer: true,
      clicks: 0
    }, function(){
      const question = document.getElementById("question");
      const answer = document.getElementById("answer");
      
      //if(!this.state.showAnswer){
        document.getElementById("answerButton").innerHTML = "Show me answer";
        questionLoader(question, this.state.random);
        answer.innerHTML = "";
        this.setState(state =>({
          showAnswer: true,
        }));
     // }
      
      if(this.state.showAnswer){
        answerLoader(answer, this.state.random);
        this.setState(state =>({
          showAnswer: false,
          random: Math.floor(Math.random() * 9) + 1
        }))
        document.getElementById("answerButton").innerHTML = "Ask me another question";
      }
      /*else{
        answerLoader(answer, this.state.random);
          this.setState(state =>({
            random: Math.floor(Math.random() * 9) + 1
          }))
          document.getElementById("answerButton").innerHTML = "Ask me question";
      }*/
    });

      //random: Math.floor(Math.random() * 3),
  };

  render(){
    return(
      <div>
        <div id="question">
        </div>
        <div id="answer">
        </div>
        <button id="answerButton" onClick = {this.forceUpdateHandler}> Ask me a question </button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return(
      <div>
        <Merger />
      </div>
    )
  }
}

export default App;
