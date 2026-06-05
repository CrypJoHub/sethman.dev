export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#000000]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B7280]/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '2000ms' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#000000]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '4000ms' }}></div>
    </div>
  )
}
