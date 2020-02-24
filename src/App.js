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

  forceUpdateHandler(){
    this.setState({
      //showAnswer: true,
      clicks: 0
    }, function(){
      const question = document.getElementById("question");
      const answer = document.getElementById("answer");
    
      document.getElementById("answerButton").innerHTML = "Show me answer";
      questionLoader(question, this.state.random);
      answer.innerHTML = "";
      this.setState(state =>({
        showAnswer: true,
      }));
      
      if(this.state.showAnswer){
        answerLoader(answer, this.state.random);
        this.setState(state =>({
          showAnswer: false,
          random: Math.floor(Math.random() * 9) + 1
        }));
        document.getElementById("answerButton").innerHTML = "Ask me another question";
      }
    });
  };


  render(){
    return(
      <div>
        <a id="question">
        </a>
        <div id="answer">
        </div>
        <button id="answerButton" onClick = {this.forceUpdateHandler}>Ask me a question</button>
        <div id="progress"></div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(){
    super();
  }
  
  componentDidMount(){
    const script = document.createElement("script");
    script.async = true;
    //script.type = "babel/text";
    script.src = "/vendor/animations.js";
    document.head.appendChild(script);

    const linkFetcher = (element) => {
      let array = [];
      for(let i = 0; i < element.innerHTML.length; i++){
        if(element.innerHTML[i] === ' '){
          array.push("+");
        }else{
          array.push(element.innerHTML[i]);
        }
      }
      return array.join("");
    }

    document.getElementById("question").addEventListener("click", function(e) {
      window.open('http://www.google.com/search?q=' + linkFetcher(e.target), '_blank');
      console.log(e.target.innerHTML);
      console.log(linkFetcher(e.target));
    })
  }

  render(){
    return(
      <div>
        <Merger />
      </div>
    )
  }
}

export default App