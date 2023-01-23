import React, { useState } from 'react';
import { Form, } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowQuestion = ({ question }) => {
    const ques = question.question;
    const { options, correctAnswer } = question;
    // console.log(typeof ques);

    const [radioValue, setRaioValue] = useState('');

    const handleroption = value => {
        // console.log(value);
        setRaioValue(value);

    }
    const customId = "custom-id-yes";

    const notify = (val) => {
        if (val === 1) {
            toast("Correct answer", {
                toastId: customId
            });
        }
        else {
            toast("Not Correct answer", {
                toastId: customId
            });
        }

    }

    if (correctAnswer === radioValue) {
        // console.log('correct ans');

        // alert('correct answer');

        notify(1);

        // console.log(5);


    }
    else if (correctAnswer !== radioValue && radioValue !== '') {
        notify(0);
    }



    return (
        <div>
            {/* <div className="Container" dangerouslySetInnerHTML={{ __html: ques }}></div> */}
            <div className="card w-75 mb-3">
                <div className="card-body">
                    <h5 className="card-title"><div className="Container" dangerouslySetInnerHTML={{ __html: ques }}></div></h5>

                    {/* radio part */}
                    <Form>
                        {options.map((option, idx) => (




                            <div key={idx}>
                                <input onClick={() => handleroption(option)} type="radio" name='hh' /> <span></span>
                                <label htmlFor='hh'>{option}</label>
                            </div>



                        ))}
                    </Form>


                </div>
            </div>

            <div>
                {/* <button onClick={notify}>Notify!</button> */}
                <ToastContainer />
            </div>

        </div>
    );
};

export default ShowQuestion;