import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PinInput from "react-pin-input";
import { Link,Grid,Container, GridContainer, GridHeader, H4, Button } from './components/shared'

function App() {
  const [pin, setPin] = useState('')
  const [checked, setChecked] = useState(false)
  const onChange = value => {
    setPin(value)
  }; 

  const onCheckBoxClick = ({target}) =>{
    setChecked(target.checked)
  }

  const onLoginClick = (event) =>{
    alert('Redirect to another page with the PIN: '+ pin)
  }

  return (
    <>
      <Header/>
        <Grid>
          <Container>
            <GridContainer>
                <GridHeader>
                  <H4>Welcome to the Sanakey portal!</H4>                  
                </GridHeader>
                <p>You can now enroll in the supply contract.<br/>
                   Please enter your personal PIN first (you have received by SMS) and confirm with "Login".<br/>
                   You will then receive all information about theSupply contract, the therapy content and the conditions of participation.</p>
                   <div className="app">
                    <PinInput
                      length={5}
                      focus
                      inputStyle={{borderColor: '#a4b7c1'}} 
                      secret                      
                      type="custom"
                      onChange={onChange}
                    />                                      
                  </div>
                  
                  <label for='confirm'>
                    <input type='checkbox' id='confirm' onClick={onCheckBoxClick}/>
                    By entering the PIN and registering, I confirm that I have received the <Link as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Data protection</Link> regulations and <Link as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Terms of use</Link> of the Sanakey portal have read and accepted</label>
                  <Button type='button' disabled={!checked} onClick={onLoginClick}>Login</Button>
            </GridContainer>
          </Container>
        </Grid>
      <Footer/>
    </>
  );
}

export default App;
