function UKNFLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#003d82] px-2 py-1">
        <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">
            UKNF
          </text>
        </svg>
      </div>
      <div className="text-xs text-gray-600 leading-tight">
        <div className="font-semibold">URZĄD</div>
        <div>KOMISJI</div>
        <div>NADZORU</div>
        <div>FINANSOWEGO</div>
      </div>
    </div>
  )
}

export default UKNFLogo
