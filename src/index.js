import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"
import me from './images/sam0n.png'
  
const author = {
  firstName:'Jaroslaw',
  lastName: 'Glod',
  profession: 'Software Engineer'
}

const authorImage = (
  <div className='authorImage'>
<img src={me} alt='author'></img>
  </div>
)

const motto = 'Coding is stupid!!!'

const skills = [
  'Programming skills in Python, JavaScript, C',
  'CSS (Cascading Style Sheets), Bootstrap',
  'REST API\'s',
  'React JS, Next JS',
  'Problem solving, Numeracy and Literacy skills, Agile',
  'Graphic design',
  '3D graphics and animations',
  ' Digital Sound Editing'
]
const skillsFormated = skills.map((skill)=><li>{skill}</li>);

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{author.firstName} {author.lastName}</h1>
      <h2>{author.profession}</h2>
      <div>{authorImage}</div>
      <div>    
        <h3>Motto:</h3>
        <p>{motto}</p>
        <small>{author.firstName} {author.lastName}, 23.06.2022</small>
      </div>
    </div>
  </header>
)

const projects = (
  <div className="projects-wrapper">
    <h3>Projects</h3>
    <p>My projects: </p>
  </div>
)

const hobbies = (
  <div className = "hobbies-wrapper">
    <h3>MY HOBBIES</h3>
    <ul>
      <li>Artworks</li>
      <li>Videos</li>
    </ul>
  </div>
)

const main = (
  <div className="main-wrapper">
    <h3>SKILLS</h3>
    <ul>
      {skillsFormated}
    </ul>
    {projects}
    {hobbies}
  </div>
)



const footer = (
<footer>
<div className="footer-wrapper">
  <p>Contact me</p>
</div>
</footer>
)

const app = (
  <div>
  {header}
  {main}

  {footer}
  </div>

)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)


