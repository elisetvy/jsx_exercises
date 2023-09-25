"use strict";

function Tweet({ username, name, message, date=new Date()}) {
  return (
    <div>
      <h1 className="blue">@{username} {name} tweeted:</h1>
      <h2>Date: {date}</h2>
      <p>{message}</p>
    </div>
  );
};