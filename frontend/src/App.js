import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import {useState} from "react";
import questions  from "./constants/questions"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
	const [questionIndex,setQuestionIndex] = useState(0);
	const [answers,setAnswers] = useState([]);
	const [option,setOption] = useState(-1);
	const handleNextQuestion = ()=>{
		
		if(questionIndex!==questions.length-1){
			setOption(answers[questionIndex+1]);
			setQuestionIndex(questionIndex+1);
		};
		console.log(option);
	};
	const handlePreviousQuestion = ()=>{

	         if(questionIndex!==0){
			setOption(answers[questionIndex-1]);
		        setQuestionIndex(questionIndex-1);
                }

		console.log(questionIndex);
        }
	const handleAnswers = (value)=>{
		console.log(value)
		setOption(value);
		setAnswers(answers => {
			const newAnswers = answers;
  			newAnswers[questionIndex] = value;
			return newAnswers;
		});
		console.log(option);
	}

//console.log(questions[questionIndex]);

  return (   
	<>
	<Router>
	<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
	<Route path="/Contact" element={<Contact />} />
	<Route
          path="/quiz"
          element={
            <Quiz
              question={questions[questionIndex]}
              questionIndex={questionIndex}
              handleNextQuestion={handleNextQuestion}
              handlePreviousQuestion={handlePreviousQuestion}
              handleAnswers={handleAnswers}
              selectedOption={option}
            />
          }
        />
      </Routes>
    </Router>
	</>

  );
}

export default App;
