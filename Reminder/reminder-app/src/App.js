import {React,useState} from "react";
import { Container } from "react-bootstrap";
import Dates from "./component/Dates";
import ListMemmber from "./component/ListMemmber";
import ActionsBtn from "./component/ActionsBtn";
import { person } from "./Data";

const App=()=> {
  const [persondata, setpersondata] = useState(person)

  const ondelete=()=>{
    setpersondata([])
  }
  const onview=()=>{
    return(
    setpersondata(person)
    )
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Dates person={persondata}/>
        <ListMemmber person={persondata}/>
        <ActionsBtn deletedata={ondelete} viewdata={onview} />
      </Container>    
      </div>
  );
}

export default App;
