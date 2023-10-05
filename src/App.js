import './App.css';
import AddNewStudent from './Components/AddNewStudent';
import Student from './Components/Student';
import {Switch,Route, useHistory} from "react-router-dom";
import { studentdata } from "./Data/StudentData";
import { teacherData } from './Data/TeacherData';
import { useState } from 'react';
import EditStudent from './Components/EditStudent';
import Teacher from './Components/Teacher';
import AddNewTeacher from './Components/AddNewTeaccher';
import EditTeacher from './Components/EditTeacher';
import Home from './Base/Home';


function App() {
  const [studentDatas, setStudentDatas] = useState(studentdata);
  const history = useHistory();
  const [teacherdatas, setTeacherdatas] = useState(teacherData)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/student'>
          <Student 
          setStudentDatas = {setStudentDatas}
          studentDatas = {studentDatas}
          history = {history}/>
        </Route>
        <Route path='/addstudent'>
          <AddNewStudent
          setStudentDatas = {setStudentDatas}
          studentDatas = {studentDatas}
          history = {history}
          />
        </Route>
        <Route path='/editstudent/:id'>
          <EditStudent
          setStudentDatas = {setStudentDatas}
          studentDatas = {studentDatas}
          history = {history}
          />
        </Route>
        <Route path='/teacher'>
          <Teacher
          teacherdatas={teacherdatas}
          setTeacherdatas={setTeacherdatas}
          history={history}/>
        </Route>

        <Route path='/addteacher'>
          <AddNewTeacher
          setTeacherdatas = {setTeacherdatas}
          teacherdatas = {teacherData}
          history = {history}/>
          </Route>

          <Route path='/editteacher/:id'>
          <EditTeacher
          setTeacherdatas = {setTeacherdatas}
          teacherdatas = {teacherData}
          history = {history}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;