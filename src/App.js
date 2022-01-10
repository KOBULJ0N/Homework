import React, { useState } from 'react';

export const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Qobiljon',
      status: 'Student',
    },
    {
      id: 2,
      name: 'Toshmat',
      status: 'Mentor',
    },
    {
      id: 3,
      name: 'Michael',
      status: 'Unemployed',
    },
    {
      id: 4,
      name: 'Mike',
      status: 'Lawyer',
    },
  ]);

  /* -------Function Delete-------- */

  const getDelete = (ids) => {
    const newData = data.filter((value) => value.id !== ids);
    setData(newData);
  };
  /* -------Function Delete-------- */

  /* -------Function Create-------- */
  const [names, setNames] = useState('');

  const getSave = () => {
    const AddData = [
      ...data,
      {
        id: data.length + 1,
        name: names,
      },
      
    ];
    setData(AddData);
  };
  /* -------Function Create-------- */

  /* -------Function Edit-------- */
  const [Select, setSelect] = useState(null);

  const getEdit = (value) => {
    setSelect(value.id);
  };

  return (
    <div>
      <input
        onChange={(e) => setNames(e.target.value)}
        type='text'
        name=''
        placeholder='Your Name'
      />
      <button onClick={getSave}>save</button>
      <table border='1' style={{ width: '50%' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>
                  <button onClick={() => getDelete(value.id)}>delete</button>
                  {Select === value.id ? (
                    <button>save</button>
                  ) : (
                    <button onClick={() => getEdit(value)}>edit</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default App;
