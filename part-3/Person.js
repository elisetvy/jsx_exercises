"use strict";

function Person({ name, age, hobbies }) {

  return (<div>
    <p>Learn some information about this person</p>
    <h3> {age > 18 ? "Please go vote!" : "You must be 18."} </h3>
    <h3> Name is: {name.length > 8 ? name.slice(0,6) : name}</h3>
    <ul>
      {
        hobbies.map(h => <li>{h}</li>)
      }
    </ul>
  </div>
  );
}