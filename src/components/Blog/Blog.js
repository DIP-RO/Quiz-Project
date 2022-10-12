import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <section className="container my-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the perpous of React Router ?
          </Accordion.Header>{" "}
          <Accordion.Body>
            ReactJS Router is mainly used for developing Single Page Web
            Applications.React Router is used to define multiple routes in the
            application.When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.{" "}
          </Accordion.Body>{" "}
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="1">
          <Accordion.Header> How does Context API works ? </Accordion.Header>{" "}
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around.This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on.Context is also touted as an easier,
            lighter approach to state management using Redux.React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it.{" "}
          </Accordion.Body>{" "}
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="2">
          <Accordion.Header> React useRef Hook </Accordion.Header>{" "}
          <Accordion.Body>
            The useRef Hook allows you to persist values between renders.It can
            be used to store a mutable value that does not cause a re - render
            when updated.It can be used to access a DOM element directly.{" "}
          </Accordion.Body>{" "}
        </Accordion.Item>{" "}
      </Accordion>{" "}
    </section>
  );
};

export default Blog;
