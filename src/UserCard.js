import React from 'react'
import PropTypes from "prop-types";
// User Data Declaration
const userData=[
  {
    name:"ALICE",
    world:"CANADA",
    slogan:"FULL STACK DEVELOPER",
    status:"AVAILABLE",
    skills:["Java","SpringBoot","Mysql","React"],
    image:"Alice.jpeg",
  },
  {
    name:"SARA",
    world:"NETHERLAND",
    slogan:"DATABASE ADMIN",
    status:"AVAILABLE",
    skills:["DBMS","Oracle","MySQL","Data Management"],
    image:"Sara.jpeg",
  },
  {
    name:"GWEN" ,
    world:"AMERICA",
    slogan:"AI ENGINEER" ,
    status:"AVAILABLE"  ,
    skills:["MACHINE LEARNING", "AI TOOLS","CNN","RNN"], 
    image:"Gwen.jpeg"
  },
  // {
  //   name:"PETER" ,
  //   world:"SPIDY WORLD",
  //   slogan:"Peter Parker, Gwen's wouldBe!" ,
  //   status:"ON-DUTY"  ,
  //   skills:["Fast Movement", "Web Fluid","Spidy Suspense","Hypnotize"], 
  //   image:"gwenDp.jpeg"
  // }
]

// Functionality 
function User(props){
  return <div className="card-container">
  <span className="pro">{props.status}</span>
  <img src={props.image} className='img' alt='user'></img>
  <h3>{props.name}</h3>
  <h3>{props.world}</h3>
  <p>{props.slogan}</p>
  <div className='buttons'>
    <button className='primary'>Message</button>
    <button className='outline'>Follow</button>
  </div>
  <div className='skill'>
    <h6>SKILLS</h6>
    <ul>
      {props.skills.map((skill,index)=> (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
  </div>

}

// Mapping Functionality
const UserCard = () => {
  return (
    <>
    {userData.map(
      (user,index)=>
    (
    <User key={index} 
    name={user.name}
    world={user.world}
    slogan={user.slogan}
    status={user.status}
    skills={user.skills} 
    image={user.image}/>
    )
  )
  }
    </>
  )
}

export default UserCard



{/* <User name="GWEN" 
world="SPIDY WORLD"
slogan="Gwen Stacy, Spider Man's wouldBe!" 
status="ON-DUTY"  
skills={["Fast Movement", "Web Fluid","Spidy Suspense","Hypnotize"]} 
image="gwenDp.jpeg"/>  */}

User.propTypes={
  name : PropTypes.string.isRequired,
  world : PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  status:PropTypes.string.isRequired,
  skills : PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};
