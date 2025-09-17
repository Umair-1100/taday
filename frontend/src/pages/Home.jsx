import Button from "../components/common/Button"
import { Plus } from "../icons/Index"

const Home = () => {
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
              icon={<Plus className="text-white size-4" />}
            />
          </div>


          <table className="table-auto w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b border-gray-100">Task</th>
                <th className="px-4 py-2 border-b border-gray-100">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 border-b border-gray-100">Study</td>
                <td className="px-4 py-4 border-b border-gray-100"><span className="badge-success">Completed</span></td>
              </tr>
              <tr>
                <td className="px-4 py-4 border-b border-gray-100">Study</td>
                <td className="px-4 py-4 border-b border-gray-100"><span className="badge-danger">Incomplete</span></td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-t">Task</th>
                <th className="px-4 py-2 border-t">Status</th>
              </tr>
            </tfoot>
          </table>


        </div>
      </section>
    </>
  )
}

export default Home
