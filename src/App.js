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
                  <H4>Herzlich Willkommmen im Sanakey-Portal!</H4>                  
                </GridHeader>
                <p>Sie können sich nun in den Versorgungsvertrag einschreiben.<br/>
                   Bitte geben Sie zuerst Ihren persönlichen PIN ein (diesen haben Sie per SMS erhalten) und bestätigen mit „Anmelden“.<br/>
                   Anschließend erhalten Sie alle Informationen zum Versorgungsvertrag, den Therapieinhalten und die Teilnahmebedingungen.</p>
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
                    Mit Eingabe des PINs und der Anmeldung bestätige ich, dass ich die <Link as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Datenschutzbestimmungen</Link> und <Link as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Nutzungsbedingungen</Link> des Sanakey Portals gelesen und akzeptiert habe.</label>
                  <Button type='button' disabled={!checked} onClick={onLoginClick}>Anmelden</Button>
            </GridContainer>
          </Container>
        </Grid>
      <Footer/>
    </>
  );
}

export default App;
