import React,{useState} from "react";
import  "./style.css";
import {data} from "./data";


export default function App() {

  const [people,setPeople] = useState(data);

  const RemovePerson = (id)=>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id);
    });
  }
  return (
    <>
      <section>
          <h1>prop drilling</h1>
          <List people = {people} RemovePerson={RemovePerson}/>
      </section>  
    </>
  );
}


const List = ({people,RemovePerson})=>{
      return(
        <>
          {
            people.map((person)=>{
                return <SinglePerson key={person.id}{...person} RemovePerson={RemovePerson}/>
            })
          }
        </>
      )  
}

const SinglePerson = ({id,name, RemovePerson})=>{
  return (
    <div>
      <li>{name}
         <button onClick={()=> RemovePerson(id)}>remove</button>
      </li>
    </div>  
  )
}