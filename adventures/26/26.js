/*
  Property Initializers

  Property initializers is an ES7 (2016) feature inspired by TypeScript's property initializers.
  It is a cleaner method of initializing properties of a class and is highly used in modern React
  classes.

  Before static Intializers, developers need to write the entire class, then outside
  of the class, manually add properties to the class.
*/

// Without property initializers
class AnimalList extends PureComponent {
  
  /* 
    Everything inside constructor requires "this" keyword to bind current context 
     This is due to JavaScript interpreting the context based on where the function or
     class is called and not where it is declared unlike other object oriented programming
     languages.

     More details here: https://git.io/vQUSm

     Notice the use of constructor to set the initial state values and for binding methods.
  */
  constructor(props) {
    super(props);
    this.state = { /* Some data here */ }
    this.renderList = this.renderList.bind(this); //
  }

  renderList() {
    return this.props.animals.map(animal => (
      <li
        key={animal.id}
        onClick={() => this.props.selectAnimal(animal)}
        className="list-group-item"
      >
        {animal.name}
      </li>
    ));
  }
  
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

AnimalList.propTypes = {
  animals: PropTypes.array
};

AnimalList.defaultProps = {
    animals: []
};


/* With property initializers

   Notice that a constructor in this case is no longer necessary as we no longer
   need to bind methods or state. "This" keyword automatically refers to the current
   instance of the react component.

   With static initializers, propTypes and defaultProps can be defined right within the class.
   The code is significantly more terse and clear to the developer. It is also asthetically
   more appealing.
*/

class AnimalList extends PureComponent {
  static propTypes = {
    animals: PropTypes.array
  };

  static defaultProps = {
    animals: []
  };

  state = { /* Some data here */ }
  
  renderList() {
    return this.props.animals.map(animal => (
      <li
        key={animal.id}
        onClick={() => this.props.selectAnimal(animal)}
        className="list-group-item"
      >
        {animal.name}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}