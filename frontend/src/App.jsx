import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [colors, setColors] = useState([])
  useEffect(() => {
    const getColors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/colores")
        if (response.status == 200) {
          setColors(response.data)
          console.log(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getColors()
  }

  )

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
          </tr>
        </thead>
        <tbody>
          {
            colors.map((c, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <td className="px-6 py-4">
                  {c.id}
                </td>
                <td className="px-6 py-4">
                  {c.nombre}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}

export default App
