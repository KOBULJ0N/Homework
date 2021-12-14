import React, { Component } from 'react';
import { Data } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
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
      console.log('ssss');
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
      this.state.name.length > 0 ?
        this.setState({
          data: {
            ...this.state.data,
            dataList: [...this.state.data.dataList, newData],
          },
          name: '',
          status: '',
          age: '',
        }) : alert('Please Fill the input')
    };

    const onEdit = (id) => {
      this.setState({active:id})
    }


    return (
      <div className='wrapper'>
        <table border='1' width='100%'>
          <thead >
            <tr>
              <th >ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.dataList.map(( { id, name, status, Age },) => (
              <tr key={id}>
                <td>
                  {
                    this.state.active === id ? <input value={id}/> : id
                  }
                </td>
                <td>{name}</td>
                <td>{status}</td>
                <td>{Age}</td>
                <td>
                  <button onClick={() => onDelete(id)}>delete</button>
                  <button onClick={() => onEdit(id)}>
                    {this.state.active === id ? 'save' : 'edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          onChange={onChange}
          placeholder='name'
          type='text'
          name='name'
          value={this.state.name}
        />
        <input
          onChange={onChange}
          placeholder='status'
          type='text'
          name='status'
          value={this.state.status}
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
