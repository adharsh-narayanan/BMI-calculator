import './App.css'
import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/AccordionHeader'



function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [verdict, setVerdict] = useState('')


  /*  const handleChange = (e) =>{
     const{name,value}=e.target
     setHeight(value)
     setWeight(value)
 
     // console.log(name);
     // console.log(value);
 
   } */

  const calculate = (e) => {
    e.preventDefault()
    if (weight < 1 || height < 1) {

    }
    else {
      const calculatedBmi = weight / ((height / 100) ** 2)
      setBmi(calculatedBmi)
      //console.log(bmi);





      if (calculatedBmi <= 18.5) {
        setVerdict('Under Weight')
      }
      else if (calculatedBmi >= 18.5 && bmi < 25) {
        setVerdict('Normal Weight')
      }
      else if (calculatedBmi >= 25 && bmi < 30) {
        setVerdict('Over Weight')
      }
      else if (calculatedBmi > 30) {
        setVerdict('Obesity')
      }


      if (calculatedBmi <= 15) {
        bmi_bar.style.left = '0%';
      }
      else if (calculatedBmi >= 40) {
        bmi_bar.style.left = '100%';
      }
      else {
        bmi_bar.style.left = (((calculatedBmi - 15) * 100) / 25) + '%';
      }

    }
  }

  const reset = () => {
    setHeight('')
    setWeight('')
    setBmi(0)
    setVerdict('')
    bmi_bar.style.left = '0%'
  }

  const show = () => {
    if (bmi_chart.style.display !== 'none') {
      bmi_chart.style.display = 'none'
    }
    else {
      bmi_chart.style.display = 'block'
    }
  }

  return (
    <>
      <div className='body'>
        <div className='d-flex align-items-center w-100'>
          <Navbar className="w-100  p-3 ">
            <img alt=""
              src="https://cdn-icons-png.flaticon.com/128/12639/12639899.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
            <h5 className='mt-4 ms-3' style={{ fontWeight: ' 500', fontSize: '40px', color: '#edddbb' }}> Calculator</h5>
          </Navbar>
        </div>
        <h2 className='text-center heading'>Check your Body Mass Index (BMI)  </h2>

        <div className='d-flex row align-items-center justify-content-center  p-5 '>
          <form className='col-md-5 form  ' onSubmit={calculate}>
            <div className='mb-5  row    ' >


              <div className='col-md-6 col-sm-6 '>
                <h5 className='mb-4' htmlFor="">Height (cm)</h5>
                <div className='d-flex mb-4'>
                  <input id='height' placeholder='enter height' name='height' value={height || ''} onChange={(e) => { setHeight(e.target.value) }} className='form-control' type="number" min="50" max="250" /><span className='ms-2 unit'  >cm</span>
                </div>
              </div>

              <div className='col-md-6 mb-3 col-sm-6'>
                <h5 className='mb-4' htmlFor="">Weight (kg)</h5>
                <div className='d-flex'>
                  <input id='weight' placeholder='enter weight' name='weight' value={weight || ''} onChange={(e) => { setWeight(e.target.value) }} className='form-control' type="number" min="5" max="200" /><span className=' ms-2 unit' >kg</span>
                </div>
              </div>

              <div className='d-flex row align-items-center justify-content-center'>
                <div id='error' style={{ display: `` }} className='text-danger error rounded w-75' />
              </div>

            </div>
            <div className='d-flex justify-content-between bg- w-100 '>


              <Button className='mb-3 button w-75 me-2' type='submit' variant="dark">Calculate BMI</Button>

              <Button className='mb-3 button w-50' onClick={reset} variant="warning">Reset</Button>


            </div>
          </form>

          <div className='col-md-7 text-center d-flex row align-items-center justify-content-center flex-column'>
            <div className='rounded w-50 bg-secondary p-3 mb-3'>
              <h3>Your BMI is</h3>
              <h1 id='result'>{parseFloat(bmi).toFixed(2)}</h1>
              <h2 id='note'>{verdict}</h2>
            </div>
            <div className='bmi-bar w-75 ' >
              <div id='bmi_bar' className='bmi-pointer'></div>

            </div>

          </div>

        </div>



        <div className='d-flex  align-items-center justify-content-center '>


          <Accordion className=' w-75'>
            <Accordion.Item eventKey="0">
              <Accordion.Header ><h5>How is BMI interpreted for adults?</h5></Accordion.Header>
              <Accordion.Body>
                <table className='w-50 text-center'>
                  <tr>
                    <th>BMI Range</th>
                    <th>Category</th>
                  </tr>
                  <tr class="underweight">
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr class="healthy">
                    <td>18.5–24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr class="overweight">
                    <td>25–29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr class="obese">
                    <td>30 and above</td>
                    <td>Obese</td>
                  </tr>
                </table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='mt-2' eventKey="1">
              <Accordion.Header><h5>What is BMI</h5></Accordion.Header>
              <Accordion.Body>
                <p>
                  Body mass index (BMI) is a measure of weight adjusted for height, calculated as weight in kilograms divided by the square of height in meters (kg/m2). Although BMI is often considered an indicator of body fatness, it is a surrogate measure of body fat because it measures excess weight rather than excess fat.  </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='mt-2' eventKey="2">
              <Accordion.Header><h5>Why use BMI</h5></Accordion.Header>
              <Accordion.Body>
                <p>
                  BMI is a simple, inexpensive, and noninvasive surrogate measure of body fat. In contrast to other methods, BMI relies solely on height and weight and with access to the proper equipment, individuals can have their BMI routinely measured and calculated with reasonable accuracy </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='mb-5 mt-2' eventKey="3">
              <Accordion.Header><h5>How is BMI calculated?</h5></Accordion.Header>
              <Accordion.Body>
                <p>
                  <h6>Formula: weight (kg) / [height (m)]2</h6>
                  With the metric system, the formula for BMI is weight in kilograms divided by height in meters squared. Because height is commonly measured in centimeters, divide height in centimeters by 100 to obtain height in meters.

                  <p>
                    Example: Weight = 68 kg, Height = 165 cm (1.65 m)

                    Calculation: 68 ÷ (1.65)2 = 24.98
                  </p></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>








      </div>


    </>
  )
}

export default App
