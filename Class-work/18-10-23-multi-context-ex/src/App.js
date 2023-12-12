import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const AuthContext = createContext();




function App() {

  const [theme,setTheme] = useState("light");
  const [CurrentUser,setCurrentUser] = useState("");

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <AuthContext value={
          {
            CurrentUser,
            setCurrentUser
          }
        }>

          {/* <Panel title="Welcome">

          </Panel> */}

        <label>
          <input
          type="checkbox"
          checked={theme=="dark"}
          onChange={(e)=>{setTheme(e.target.value ? "dark" : "light")}}
          />

        </label>


        </AuthContext>

      </ThemeContext.Provider>
        
    </div>
  );
}

function LoginForm()
{
  const setCurrentUser =  useContext(AuthContext)
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("") 
   let canlogin = firstname!="" && lastname!=""

  return(
  <>
    <label>
        Firstname: <input
        type="text"
        value={firstname}
        onChange={(e)=>{setFirstname(e.target.value)}}

        />
    </label>

    <label>
        Lastname: <input
        type="text"
        value={lastname}
        onChange={(e)=>{setLastname(e.target.value)}}
        />
    </label>

    <Button
     disabled={!canlogin}
      // onClick={
      //   setCurrentUser()
      // }
      >
        Login
    </Button>
  </>
  
  
  )
  
}

function Button({children,disabled, onClick})
{
  return(
    <>
      <button 
      disabled={disabled}
      onClick={onClick}
      >

      {children}
      </button>
    </>
  )
}

function Panel({title,children})
{
  const theme = useContext(ThemeContext)
  const className = "panel-"+theme;

  return(
    <>  
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  )
}

export default App;
