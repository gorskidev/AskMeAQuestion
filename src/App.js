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

    // This file contains animation for button, and questions.

// Gathering window's width/
let width = window.innerWidth;

// Question and Answer lines
const question = document.getElementById("question");
const answer = document.getElementById("answer");

// Google box
const search = document.getElementById("search");


// Button
const answerButton = document.getElementById("answerButton");
const progressElement = document.getElementById("progress");

// Default progress' bar width.
const mouseLeaveWidth = "0";

// Default value of clickCounter.
let clickCounter = true;


const progressBarLength = (element) => {
    let calculatedWidth = element.innerHTML.length;
    if(width <= 768){
        if(calculatedWidth > 14) {
            return calculatedWidth/1.5;
        }else if(calculatedWidth <= 14) {
            return calculatedWidth/2;
        }
    }else{
        if(calculatedWidth > 14) {
            return calculatedWidth;
        }else if(calculatedWidth <= 14) {
            return calculatedWidth + 2;
        }
    }
}

// On mouse over, extend progress' bar width.
answerButton.addEventListener("mouseover", function(e) {
    progressElement.style.width = progressBarLength(answerButton) + "rem";
});

// On mouse over, reduce progress' bar width.
answerButton.addEventListener("mouseleave", function(e) {
    progressElement.style.width = mouseLeaveWidth;
})

answerButton.addEventListener("click", function(e) {
    // Progress bar
    if(clickCounter == true){ // If user clicked button, it should change it's state to false
        progressElement.style.width = mouseLeaveWidth;
        
        // Question styles
        setTimeout(() => {
            question.style.top = "10rem";
        }, 100);
        question.style.fontWeight = "700";

        if(width <= 768){
            question.style.fontSize = "1rem";
            progressElement.style.top = "25rem";
        }else{
            question.style.fontSize = "2rem";
        }

        // Answer styles
        answer.style.opacity = "0";

        // Setting state
        clickCounter = false;
    }else if(clickCounter == false){ // If user clicked button, and it's state is false, it should change it's state true, this way it is guaranteed that animation always work properly.
        
        // Progress bar 
        setTimeout(() => {           
            progressElement.style.width = progressBarLength(answerButton) + "rem";
        }, 1)
        
        // Question styles
        question.style.top = "7rem";
        question.style.fontWeight = "200";
        question.style.fontSize = "1rem";

        // Answer styles
        answer.style.opacity = "1";

        // Setting state
        clickCounter = true;
    }
})

question.addEventListener("mouseover", function(e) {
    // Setting box position.
    setInterval(() => {
        search.style.top = e.target.offsetTop + "px";
        search.style.left = e.target.offsetLeft + 50 + "px";
    }, 1)

    search.style.opacity = 1;
    search.style.display = "block";

});

question.addEventListener("mouseleave", function(e) {
    search.style.opacity = 0;
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