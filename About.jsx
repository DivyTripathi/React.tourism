// import React, { useEffect, useState } from 'react'
// const About = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count + 1));
//         }, 1000);
//     }, [count]);
//     return (
//         <div>
//             <h1>this is heading count {count}</h1>
//         </div>
//     )
// }

// export default About
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default About



