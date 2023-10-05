import React from "react";
import Base from "../Base/Base";


export default function Teacher({teacherdatas, setTeacherdatas, history}) {


    const deleteTeach = (id) => {
        const newDatas = teacherdatas.filter((teach)=>(
            teach.id !== id
        ))
        // console.log(newDatas)
        setTeacherdatas(newDatas)
    }

  return (
    <Base>
      <div>
      <button className="btn btn-outline-warning" onClick={()=>history.push("/addteacher")}>Add Teacher</button>
        <table className="table table-primary table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Address</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody>
              {teacherdatas.map((teach,index)=>(
                <tr key={index}>
                <th scope="row">{teach.id}</th>
                <td>{teach.Name}</td>
                <td>{teach.class}</td>
                <td>{teach.address}</td>
                <td>
                    <div className="btn-group">
                <button className="btn btn-secondary" onClick={()=>history.push(`/editteacher/${teach.id}`)}>Edit</button>
                <button className="btn btn-success" onClick={()=>deleteTeach(teach.id)}>Delete</button>
                </div>
                </td>
            </tr>
              ))}
              
          </tbody>
        </table>
      </div>
    </Base>
  );
}
