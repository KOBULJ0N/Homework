import React, { useReducer, useState, useContext } from "react";
import { FilterContext } from "./Context/filter";

export const App = () => {
  const [name, setName] = useState("");
  const [filter, setFitler] = useContext(FilterContext);

  const fozilReducer = (state, action) => {
    switch (action.type) {
      // case 'edit': return {
      //   ...state,
      //   select: state.select = action.payload.mock.id,
      //   title: state.title = action.payload.mock.name
      // }

      // //soz
      // case 'soz': return {...state, title: state.title = action.payload.write }

      // //save
      // case 'save': return {data: state.data.map((value)=> value.id ==   state.select ? {...value, name: state.title}: value)}

      //delete
      case "delete":
        return state.filter((value) => value.id !== action.payload.ids);

      //create
      case "create":
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload.title,
          },
        ];
    }
  };

  const [state, dispatch] = useReducer(fozilReducer, [
    { id: 1, name: "Mike" },
    { id: 2, name: "Michael" },
    { id: 3, name: "Harvey" },
    { id: 4, name: "Luis" },
    { id: 5, name: "Jessica" },

    // select: null,
    // title: ''
  ]);

  console.log(state.title);

  // const [active, setActive] = useState("id");

  
  return (
    <div style={{ margin: '100px auto', width: '80%' }}>
      <br />
      <input
        style={{ margin: '20px 0' }}
        type='text'
        placeholder='Search'
        onChange={(e) => setFitler(e.target.value)}
      />
      <table border='1' width='500px'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {state
            .filter((value) =>
              value.name.toString().toLowerCase().includes([filter])
            )
            .map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  {/* <td>{state.select == value.id? <input value={state.title} type="text" onChange={(e)=>dispatch({type: 'soz', payload: {write: e.target.value}})} /> : value.name }</td> */}
                  {/* <td>
                    {
                      state.select == value.id ? 
                      <button onClick={()=> dispatch({type: 'save'})}>save</button>
                      :
                      <button onClick={()=> dispatch({type: 'edit', payload: {mock: value}})}>edit</button>
                    }

                  </td> */}
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: 'delete', payload: { ids: value.id } })
                      }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          <tr >
            <input 
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='write name'
            />
            <button
              onClick={() =>
                dispatch({ type: 'create', payload: { title: name } })
              }
            >
              save
            </button>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default App;
