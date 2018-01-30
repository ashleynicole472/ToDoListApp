import React, {Component} from 'react';
import TodoItems from './TodoItems';
import index from './index.css';

class TodoList extends Component {
  constructor(props){
    super(props);
      this.state ={
        items: []
      };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(i) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== ""){
      itemArray.unshift ({
        text:this._inputElement.value,
        key: Date.now()
      });
      this.setState({
        items: itemArray
      });
      this._inputElement.value = "";
    }

    console.log(itemArray);

    i.preventDefault();
  }

deleteItem(key){
  var filteredItems = this.state.items.filter(function (item){
    return (item.key !== key);
  });
  this.setState ({
    items: filteredItems
  })
}

  render() {
    return(
      <div className="todoListMain">
        <div className="header">
          <h1>My To Do List<hr /></h1>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter task" id="box">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
         <TodoItems entries={this.state.items}
          delete={this.deleteItem}
         />
      </div>
    );
  }
}

export default TodoList;
