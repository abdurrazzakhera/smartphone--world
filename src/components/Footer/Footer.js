import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='p-3  text-bold mb-3  headStyle'>
      <div className='container'>
        <div className='question'>
          <h3>Q : How React Works</h3>
          <p>
            <strong>Ans :</strong> React is a declarative and flexible
            Javascript library for building user InterFaces. Today many startups
            choose react as their tool for building fast front-end side
            application for their Project. React implements a virtual DOM that
            is basically a DOM tree representation in Javascript. So when it
            needs to read or write to the DOM , it will use the virtual
            representation of it. Then the virtual DOM will try to find the most
            efficient way to update the browser's DOM. Unlike browser DOM
            elements. React elements are plain objects and are cheap to create.
            React DOM takes care of updating the DOM to match the React
            elements. The reason for this is that Javascript is very fast and
            It's worth keeping a DOM tree in it to speed up its manipulation{" "}
          </p>
        </div>
        <div className='question'>
          <h3>Q: Props VS State Difference</h3>
          <p>
            <strong>Ans: </strong> Props and State are both plain JavaScript
            Objects. They are Difference in one important way like props get
            passed to the component, where state is managed within the
            component. State is limited in current component but props can be
            pass to any component which user want. Props are set by parent and
            passed to child components and they are fixed throughout the
            component. For changing the data , we have to use state . Props are
            immutable where state is mutable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
