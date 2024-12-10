
import { Stack, TextField,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [invalidPrinciple,setinvalidPrinciple]=useState(false)
  const [invalidrate,setinvalidrate]=useState(false)
  const [invalidyear,setinvalidyear]=useState(false)
  const validateInput=(inputTag)=>{
    console.log(inputTag ,typeof inputTag );
    const {name,value}=inputTag 
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if(name=='principle'){
       setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidPrinciple(false)
      }else{
        setinvalidPrinciple(true)
      }
    }else if(name== "rate"){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidrate(false)
      }
    else{
      setinvalidrate(true)
    }
  }
   else{
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidyear(false)
      }else{
        setinvalidyear(true)
      }
    }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
   if(principle && rate && year){
    setInterest(principle*year*rate/100)
   }else{
    alert("please fill the form completely")
   }
    
  }
  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidrate(false)
    setinvalidyear(false)
  }
  return (
    <>
      <div style={{width:'100%',minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-primary'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Simple Interest Easily !</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1> {interest} </h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5 '>
            {/*principle amount*/}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)}className='w-100' id="outlined-principle" label="₹ principle Amount" variant="outlined" />
            </div>
            {/*Invalid principle*/}
               {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>Invalid Principle Amount</div>}

             {/*Rate*/}
             <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="% rate" variant="outlined" />
            </div>

             {/*Invalid rate*/}
             {invalidrate && <div className='text-danger fw-bolder mb-3'>Invalid Rate Amount</div>}

             {/*Year*/}
             <div className='mb-3'>
              <TextField value={year || ""}name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Time period (Yr)" variant="outlined" />
            </div>
             {/*Invalid rate*/}
             {invalidyear && <div className='text-danger fw-bolder mb-3'>Invalid Rate Amount</div>}

            {/*Buttons*/}
            <Stack direction="row" spacing={2}>  
            <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple|| invalidrate|| invalidyear}variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculator</Button>
            <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>Reset</Button>
          </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
