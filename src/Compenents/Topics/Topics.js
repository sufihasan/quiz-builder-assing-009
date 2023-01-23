import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Topics = () => {
    const quizes = useLoaderData().data;

    return (
        <div>
            <div className='container mt-4'>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {
                        quizes.map(quiz => {
                            return <div key={quiz.id} className="col">
                                <div className="card ">
                                    <img src={quiz.logo} className="card-img-top bg-primary" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{quiz.name}</h5>
                                        <p className="card-text">Total quiz: {quiz.total}</p>
                                        <Link to={`/quizshow/${quiz.id}`}><Button>Start Quiz</Button></Link>
                                    </div>

                                </div>
                            </div>

                        })
                    }

                </div>


            </div>
        </div>
    );
};

export default Topics;