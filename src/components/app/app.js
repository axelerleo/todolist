import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Kiss wife"),
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Learn React")
    ],
    searchText: "",
    filter: "all"
  };

  createTodoItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newTodoData = [...todoData];
      newTodoData.splice(idx, 1);
      return { todoData: newTodoData };
    });
  };
  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return { todoData: newTodoData };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };

  search = (items, searchText) => {
    if (!searchText) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  };

  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
    }
  };

  onSearchChange = searchText => {
    this.setState({ searchText });
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, searchText, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, searchText), filter);

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          tasks={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem
          onAddItem={text => {
            this.addItem(text);
          }}
        />
      </div>
    );
  }
}
