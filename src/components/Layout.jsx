import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import UKNFLogo from './UKNFLogo'

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-300 w-full z-30 shadow-sm">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <UKNFLogo />
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="inline-flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <span className="text-base font-normal text-gray-700">
                System Komunikacji z Podmiotami
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Session Timer */}
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Koniec sesji za: <strong>12:46</strong></span>
              </div>
              
              {/* Accessibility Controls */}
              <div className="flex items-center gap-2">
                <button className="text-gray-700 hover:text-gray-900 text-sm font-medium">A</button>
                <button className="text-gray-700 hover:text-gray-900 text-base font-medium">A</button>
                <button className="text-gray-700 hover:text-gray-900 text-lg font-medium">A</button>
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </button>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-700">Jan Nowak | Użytkownik podmiotu</span>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 rounded text-sm">
                  Wyloguj
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Bar */}
      <div className="bg-gray-200 border-b border-gray-300 w-full z-20">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>System: / Podmiot: <strong>Instytucja Testowa</strong></span>
          </div>
          <button className="flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Zmień
          </button>
        </div>
      </div>

      {/* Content Wrapper with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-60 bg-gray-100 border-r border-gray-300 overflow-y-auto flex-shrink-0">
            <div className="px-3 py-2">
              <div className="mb-2 px-3 py-2 text-xs font-semibold text-gray-600 uppercase">
                MENU
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-sm">Biblioteka - repozytorium plików</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm">Wnioski o dostęp</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm">Sprawy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-sm">Sprawozdawczość</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Moje pytania</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:bg-white rounded group"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm">Baza wiedzy</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Collapse Button */}
            <div className="p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded text-sm"
              >
                Zwiń menu
              </button>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
