import { useContext } from "react"
import AddEntryContext from "../components/context/Add-entryContext"
import Layout from "../components/Layout"

const Index = () => {
  const { state: savedInitialValues } = useContext(AddEntryContext)

  return (
    <Layout props="Dashboard">
      <div className="flex flex-col p-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-gray-900 sm:truncate text-left p-1.5"
                    >
                      INCOMING
                    </th>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-gray-900 sm:truncate text-left p-1.5"
                    >
                      OUTCOMING
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(savedInitialValues.entries).map(
                    ([{ amount, description }]) => (
                      <tr key="{entriesId}">
                        <td className="text-lg px-6 py-4 whitespace-nowrap text-right text-green-600 ">
                          {amount}
                          <h1 className="text-gray-600">{description}</h1>
                        </td>
                        <td className="text-lg px-6 py-4 whitespace-nowrap text-right text-red-600">
                          {amount}
                          <h1 className="text-gray-600">{description}</h1>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-gray-900 sm:truncate text-left p-1.5"
                    >
                      TOTAL
                    </th>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-gray-900 sm:truncate text-left p-1.5"
                    >
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody key="{itemIdTotal}">
                  <tr>
                    <td className="text-lg px-6 py-4 whitespace-nowrap text-right text-green-600 ">
                      + TEST
                    </td>
                    <td className="text-lg px-6 py-4 whitespace-nowrap text-right text-red-600">
                      - TEST
                    </td>
                  </tr>
                </tbody>
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-gray-900 sm:truncate text-left p-1.5"
                    >
                      RESULT
                    </th>
                    <th
                      scope="col"
                      className="text-2xl font-bold leading-7 text-green-600 sm:truncate text-right p-1.5"
                    >
                      +$9999
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
