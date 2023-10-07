import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyMath = () => {

    const [mainAnswer,setMainAnswer]=useState('')
    const [firstNumber,setFirstNumber]=useState('')
    const [secondNumber,setSecondNumber]=useState('')
    const [sign,setSign]=useState('')
    const [help,setHelp]=useState('')
    const [def,setDef]=useState(true)

    useEffect(()=>{
        const first=Math.floor(Math.random() * 100);
        const second=Math.floor(Math.random() * 100);
        const third=Math.floor((Math.random() * 4)+1);
        setFirstNumber(first)
        setSecondNumber(second)
        setHelp(third)
        let newSign=''
        if(third==1){
            newSign='+'
        }else if(third==2){
            newSign='-'
        }
         else if(third==3){
            newSign='*'
        }
        else {
            newSign='/'
        }
        setSign(newSign)

        if(third==1){
            setMainAnswer(first+second)
        }else if(third==2){
            setMainAnswer(first-second)
        }
         else if(third==3){
            setMainAnswer(first*second)
        }
        else {
            setMainAnswer(first/second)
        }
    },[def])

    // console.log('First Number: ',firstNumber,' second Number: ',secondNumber)
    // console.log('Help: ',help)
    // console.log('Sign: ',sign)
    //console.log('Main Answer: ',mainAnswer)


    const handleReload=()=>{
        setDef(!def)
    }

    const handleAnswer=(e)=>{
        e.preventDefault();
        const form=e.target;
         const answer=form.ans.value;
        console.log('Answer: ',answer)
        if(answer==mainAnswer){
            Swal.fire(
                'Good job!',
                'Your Answer is correct',
                'success'
              )
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'your Answer is incorrect',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        setDef(!def)
        form.reset()
        
    }
    return (
        <div className=''>
            <div className='flex gap-5 w-10/12 mx-auto '>
                <p className='bg-green-600 text-white w-3/12 h-20 rounded-2xl flex items-center justify-center font-semibold text-3xl'>
                    {firstNumber}
                </p>

                <p className='bg-yellow-500 text-white w-3/12 h-20 rounded-2xl flex items-center justify-center font-semibold text-3xl'>
                   {sign}
                </p>

                <p className='bg-green-600 text-white w-3/12 h-20 rounded-2xl flex items-center justify-center font-semibold text-3xl'>
                    {secondNumber}
                </p>
             </div>

             <form onSubmit={handleAnswer}>
                <input type="number " name='ans' className='w-full my-4 p-5 rounded-2xl text-white text-2xl'  id="" />
                <button type="submit" className='btn btn-primary btn-lg w-full '>Submit</button>
             </form>
             <button onClick={handleReload} className='btn btn-success w-full mt-2 text-black font-bold'> Reload </button>
        </div>
    );
};

export default MyMath;