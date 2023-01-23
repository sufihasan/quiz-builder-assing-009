import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import pic from './img/quiz.jpeg'
import { Button } from 'react-bootstrap';



const Home = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    return (
        <div className='homeContainer'>

            <div className="container px-4 text-center border border-2 border-info mt-3 rounded">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3"><img src={pic} alt="pp" /></div>

                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h3>Welcome to our quiz center</h3>
                            <p>Try to best </p>
                            <p>solve all </p>
                        </div>
                    </div>
                </div>
            </div>

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

export default Home;