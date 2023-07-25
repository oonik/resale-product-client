import React from 'react';
import Banner from '../Home/Banner/Banner';


const Blog = () => {
    return (
        <section>
            <Banner></Banner>
            <div className="collapse ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <li>useState</li>
                    <li>useReducer</li>
                    <li>useMemo & useCallback</li>
                    <li>useEffect</li>
                    <li>useRef</li>
                    <li>Context and Custom Hooks</li>
                    <li>React Query & React Location</li>
                </div>
            </div>
            <div className="collapse ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.</p>
                </div>
            </div>
            <div className="collapse ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process. If done correctly, unit tests can detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="collapse ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Some frameworks which have become the most popular among developers and causing the dilemma are ReactJS, VueJS, and Angular. A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;