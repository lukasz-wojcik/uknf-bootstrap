import { useState } from 'react'

function Pulpit() {
  const [activeTab, setActiveTab] = useState('pulpit')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const komunikaty = [
    { id: 1, data: '2025-02-14', temat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, data: '2025-03-21', temat: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.' },
    { id: 3, data: '2025-02-14', temat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, data: '2025-03-21', temat: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.' },
    { id: 5, data: '2025-02-14', temat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 6, data: '2025-03-21', temat: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.' },
    { id: 7, data: '2025-02-14', temat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 8, data: '2025-03-21', temat: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.' },
    { id: 9, data: '2025-02-14', temat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 10, data: '2025-03-21', temat: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.' },
  ]

  const totalPages = Math.ceil(komunikaty.length / itemsPerPage)

  const renderPagination = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 text-sm ${
            currentPage === i
              ? 'bg-gray-300 text-gray-900 font-semibold'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } border border-gray-300`}
        >
          {i}
        </button>
      )
    }
    return pages
  }

  return (
    <div className="bg-white">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-300 bg-white">
        <div className="px-6">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('pulpit')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'pulpit'
                  ? 'border-gray-700 text-gray-900 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 bg-gray-50'
              }`}
            >
              Pulpit użytkownika
            </button>
            <button
              onClick={() => setActiveTab('wnioski')}
              className={`px-4 py-3 text-sm font-medium border-b-2 relative ${
                activeTab === 'wnioski'
                  ? 'border-gray-700 text-gray-900 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 bg-gray-50'
              }`}
            >
              Wnioski o dostęp
              <button className="absolute -top-1 -right-1 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white text-xs rounded flex items-center justify-center">
                ×
              </button>
            </button>
            <button
              onClick={() => setActiveTab('biblioteka')}
              className={`px-4 py-3 text-sm font-medium border-b-2 relative ${
                activeTab === 'biblioteka'
                  ? 'border-gray-700 text-gray-900 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 bg-gray-50'
              }`}
            >
              Biblioteka - repozytorium plików
              <button className="absolute -top-1 -right-1 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white text-xs rounded flex items-center justify-center">
                ×
              </button>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Komunikaty Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Komunikaty</h2>
          
          {/* Search Bar */}
          <div className="mb-4">
            <details className="bg-gray-50 border border-gray-300 rounded">
              <summary className="px-4 py-2 cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-100">
                Wyszukiwanie
              </summary>
              <div className="px-4 py-3 border-t border-gray-300">
                <input
                  type="text"
                  placeholder="Szukaj..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </details>
          </div>

          {/* Data Table */}
          <div className="border border-gray-300 rounded overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Data publikacji
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Temat
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {komunikaty.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                      {item.data}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.temat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing 1 to 10 of 200 entries
            </div>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300">
                «
              </button>
              <button className="px-3 py-1 text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300">
                ‹
              </button>
              {renderPagination()}
              <button className="px-3 py-1 text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300">
                ›
              </button>
              <button className="px-3 py-1 text-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-300">
                »
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Podgląd
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Eksportuj
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pulpit
