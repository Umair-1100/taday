import Button from "../components/common/Button"
import { Plus, X } from "../icons/Index"

import { useState } from "react";
import AddTodo from "../components/AddTodo";
import { useEffect } from "react";

const initialState = {
  task: "",
  status: false
}

const Home = () => {

  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [data, setData] = useState([]);


  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // console.log("Form is sunmitted", form);
    setForm(initialState)
    setModal(false)
    await postData()
    await fetchData()
  }


  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      setData(data)
    } catch (error) {
      console.error(error.message);
    }
  }


  const postData = async () => {
    try {
      const response = await fetch("http://localhost:3000/add-todo" , {
        method: "POST" ,
        headers: {"Content-Type" : "application/json"} ,
        body: JSON.stringify(form)
      });  
      const data = await response.json();
      console.log("Posted data" , data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6  md:py-8 lg:py-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-text">Task Management</h3>
            <Button
              children={"Add New Task"}
              className={"btn-primary"}
              type={"button"}
              onClick={() => setModal(true)}
              icon={<Plus className="text-white size-4" />}
            />
          </div>
          <table className="table-auto w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-semibold border-b border-gray-100">Task</th>
                <th className="px-4 py-2 font-semibold border-b border-gray-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((task) => {
                return(
                      <tr key={task._id}>
                <td className="px-4 py-4 border-b border-gray-100">{task.task}</td>
                <td className="px-4 py-4 border-b border-gray-100">{task.status === true ? <span className="badge-success">Completed</span> : <span className="badge-danger">Incomplete</span>}</td>
              </tr>
                )
            
              })}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 font-semibold">Task</th>
                <th className="px-4 py-2 font-semibold">Status</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>


      <AddTodo form={form} modal={modal} handleChange={handleChange} handleFormSubmit={handleFormSubmit} setModal={setModal} />
    </>
  )
}

export default Home
