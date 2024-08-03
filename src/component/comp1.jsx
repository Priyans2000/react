import Comp2 from "./comp2";
const Comp1=({user})=>{
    return(<>
      <h1> welcome :  </h1>
      <Comp2 user={user}/>
    </>)
}
export default Comp1;