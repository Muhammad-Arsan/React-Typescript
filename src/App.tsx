import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import {UserContextProvider} from './components/context/UserContext'
import User from "./components/context/User" 
import {Private} from './components/auth/Private'
import Profile from './components/auth/Profile'
import List from "./components/generics/List";
import RandomNumber from "./components/restrictions/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import Text from "./components/polymorphic/Text";
function App() {
  const personInfo = {
    first: "Muhammad",
    last: "Arsan",
  };
  const namesList = [
    {
      first: "babar",
      last: "Azam",
    },
    {
      first: "fakhar",
      last: "zaman",
    },
    {
      first: "Shaheen",
      last: "Afridi",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="Muhammad Arsan" messageCount={10} isLoggedIn={false} />
      <Person name={personInfo} />
      <PersonList names={namesList} /> */}

      {/* <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>dsfdfds dsfds dsf</Heading>
      </Oscar> */}

      {/* <Button  handleClick={(event, id)=>(console.log("Button Cliked",event, id))}/>
      <Input value="" handleChange = {(event)=>console.log("Chnage Event", event.target.value)}/>
    */}

    {/* <Container styles={{color: "red", border: "1px solid green"}}/> */}


    {/* <ThemeContextProvider>
      <Box />
    </ThemeContextProvider> */}

    {/* <UserContextProvider><User /></UserContextProvider> */}

    {/* <Private isLoggedIn={false} Component= {Profile} />
     */}

     {/* <List items={['batman', 'superman', 'babarazam']} onClick={(item)=>console.log(item)}/> */}
     {/* <List items={[4,4,5]} onClick={(item)=>console.log(item)}/>  */}


     {/* <RandomNumber value={10} isPositive />    Restricting component props */}
 
 {/* <Toast position="center"/>  */
 }

 {/* <CustomButton varient="primary" onClick={()=>console.log('dfsd')}>Primary button</CustomButton> */}

 <Text as ="h1" size='sm' >Heading</Text>
 <Text as="p" size='md' >Para</Text>
 <Text as="label" size='lg' color="secondary">Label</Text>

        </div>
  );
}

export default App;
