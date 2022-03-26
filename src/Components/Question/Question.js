import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <p className='para1'> 1.How react works?</p>
            <p> Ans:React is a javaScript libray that create user interface in a predictable and efficient way using declarative code.
                React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser DOM.
            </p>
            <p className='para2'>
                2.How use useState?

            </p>
            <p>Ans:UseState is a Hook that allows you to have state variables in functional components.Pass the initial state to this function and it returns a variable with the current state value and another function to update this value.React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array. </p>
        </div>
    );
};

export default Question;