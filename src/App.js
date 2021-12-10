import React, { Component } from 'react';
import { Data } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      age: '',
      data: {
        dataList: Data,
      },
    };
  }

  render() {
    const onDelete = (id) => {
      let res = this.state.data.dataList.filter((item) => item.id !== id);
      this.setState({
        data: {
          ...this.state.data,
          dataList: res,
        },
      });
    };

    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onSave = () => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
        Age: this.state.age,
      };
      this.setState({
        data: {
          ...this.state.data,
          dataList: [...this.state.data.dataList, newData],
        },
        name: '',
        status: '',
        age: '',
      });
    };
    return (
      <div className='wrapper'>
        <table border='1' width='100%'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.dataList.map(({ id, name, status, Age }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{status}</td>
                <td>{Age}</td>
                <td>
                  <button onClick={() => onDelete(id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          onChange={onChange}
          placeholder='name'
          type='text'
          required
          name='name'
          value={this.state.name}
        />
        <input
          onChange={onChange}
          placeholder='status'
          type='text'
          name='status'
          value={this.state.status}
          required
        />
        <input
          onChange={onChange}
          placeholder='Age'
          type='text'
          required
          name='age'
          value={this.state.age}
        />
        <button onClick={onSave}>Add</button>
        <br />
      </div>
    );
  }
}
export default App;
