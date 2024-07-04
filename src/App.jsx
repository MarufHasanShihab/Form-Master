
import './App.css'
import ReusableForm from './Component/ReusableForm/ReusableForm'
// import HookFor from './Component/HookForm/HookFor'
// import RefForm from './Component/RefForm/RefForm'
// import StatefulForm from './Component/StatefulForm/StatefulForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookFor></HookFor> */}
      <ReusableForm formtitle={"Sing Up"} buttonText={"Sing UP"}></ReusableForm>
      <ReusableForm formtitle={"Update Profile"} buttonText={"Update"}></ReusableForm>
    </>
  )
}

export default App
