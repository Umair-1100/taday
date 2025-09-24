
import Button from "./common/Button"
import Modal from "./common/Modal"

const AddTodo = ({ modal, handleChange, handleFormSubmit, setModal, form }) => {

  return (
    <>
      {modal && <Modal name={"Add Task"} onClose={() => setModal(false)}>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="text-sm font-medium mb-2 block">Task</label>
            <input
              type="text"
              placeholder="Enter A Task"
              className="px-3 py-2 w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.task}
              name="task"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-start gap-2 mb-4">
            <input className="text-sm" type="checkbox" onChange={handleChange} value={form.status} name="status" id="status" />
            <label className="text-text text-sm cursor-pointer select-none" htmlFor="status">Complete</label>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              className={"btn-danger"}
              children={"Cancel"}
              type="button"
              onClick={() => setModal(false)}
            />
            <Button
              className={"btn-primary"}
              children={"Submit"}
              type="submit"
            />
          </div>
        </form>
      </Modal>}
    </>
  )
}

export default AddTodo
