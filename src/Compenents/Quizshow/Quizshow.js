import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuestion from '../ShowQuestion/ShowQuestion';

const Quizshow = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    const { name, total, logo, questions } = quizes;
    console.log(questions);
    return (
        <div className='container mt-5'>

            {/* quiz header */}
            <div>
                <h2>Quiz of {name}</h2>
                <div className='d-flex align-items-center '>
                    <p>Total Quiz:{total}</p>
                    <div className='h-25 w-25 '>
                        <img className='h-25 w-25 bg-primary ms-3 rounded' src={logo} alt="" />
                    </div>
                </div>
            </div>

            {/* quiz body */}

            <div className='mt-3'>
                {
                    questions.map(question => <ShowQuestion
                        key={question.id}
                        question={question}
                    ></ShowQuestion>)
                }
            </div>



        </div>
    );
};

export default Quizshow;