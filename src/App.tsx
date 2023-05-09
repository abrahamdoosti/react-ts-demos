import { Stats } from 'fs';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Events/Button';
import { Input } from './components/Events/Input';
import { Container } from './components/Style/Container';
import { LoggedIn } from './components/state/LoggedIn';
//import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeConext, ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { CounterClass } from './components/class/CounterClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { CounterUseState } from './components/OtherComponents/useStateCounter';
import { ImageConcat, UserProfile, UserRole } from './components/OtherComponents/UseStateUserProfile';
import MyComponent from './components/OtherComponents/UpdateDom';



function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princes',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      {/*  <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Basic Props Greeting List Demo</p >
      <Greet name='Abraham' messageCount={20} isLoggedIn={false} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Basic Props Person Demo</p >
      <Person name={personName} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Basic Props Person List Demo</p >
      <PersonList names={nameList} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Advanced Props status Demo</p >
      <Status status='error' />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Advanced Props Heading Demo</p >
      <Heading>Placeholder text</Heading>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Advanced Props Oscar Demo</p >
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio! </Heading>
      </Oscar>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Basic Props Greeting with isLoggedIn Demo</p >
      <Greet name='Abraham' isLoggedIn={true} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Event Props Button Demo</p >
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Event Props Input Demo</p >
      <Input value='' handleChange={(event) => console.log(event.target.value)} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Style Props Container Demo</p >
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useState Hook LoggedIn Demo</p >
      <LoggedIn />

       <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useState Futue Value Demo</p >
      <User /> 

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useReducer Hook Value Demo</p >
      <Counter />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useContext Hook Context Demo</p >
      <ThemeContextProvider><Box /></ThemeContextProvider>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useContext Hook Future Value Demo</p >
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useRef Hook Input Element Demo</p >
      <DomRef />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>useRef Hook Mutable Ref for Timer Demo</p >
      <MutableRef />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>class Component Counter Demo</p >
      <CounterClass message='The count value is' /> 

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Component Prop Login Demo</p >
      <Private isLoggedIn={false} component={Profile} /> 

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Generics props List Demo</p > */}
       
      
       {/* The following component List has a prop called items that only takes a string array,
       if we want to put a different type than string on that array we need to make it generic 
       <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />

      <List
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
      /> */}

      <List
        items={[{
          id: 1,
          first: 'Bruce',
          last: 'Wayne'
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent'
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana'
        }]}
        onClick={(item) => console.log(item)}
      />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Restricting props RandomNumber Demo</p >
      <RandomNumber value={10} isNegative />

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Template Literals and Exclude x-y position Demo</p >
      <Toast position='center'/>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Wrapping HTML Elements Demo</p >
      <CustomButton variant='primary' onClick={()=>console.log("Clicked")}>Primary Button</CustomButton>

      <p style={{ color: "blue", fontWeight: "bold", marginBottom: "0px" }}>Extracting an Existing component's prop types Demo</p >
      <CustomComponent name='Abraham' isLoggedIn={true}/>
      
      <CounterUseState initialCount={0}/> 

      <UserProfile firstName='Abraham' role={UserRole.CEO} />
      <ImageConcat name="Apple" price={2.34} />

      <MyComponent items={[]}/>

    </div>
  );
}

export default App;
