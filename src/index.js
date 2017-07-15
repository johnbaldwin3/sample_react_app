import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//Let's create a class called Primate
  class Primate {
    constructor() {
      this.isMammal = true;
      this.isSmart = true;
      this.opposableThumbs = true;

    }
  }

//Now let's create the sub-class Monkey using the extends and super keywords
  class Monkey extends Primate {
    constructor(data, isMammal, isSmart, opposableThumbs) {
      super({isMammal, isSmart, opposableThumbs});
      this.name = data.name;
      this.color = data.color;
    }
  }

//Now let's create an instance of Monkey
var spiderMonkey = new Monkey({name: "Spider Monkey", color: "black and brown"});

//We've given the Monkey constructor some key value pair information
//Let's see if spiderMonkey inherited from the Primate constructor by using "super"

console.log(spiderMonkey.isMammal);
console.log(spiderMonkey.name);
