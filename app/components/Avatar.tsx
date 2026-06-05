export default function Avatar() {
  return (
    <div className="relative flex-shrink-0 avatar-wrap">
      <div className="avatar">
        <div className="hair"></div>
        <div className="eye left"></div>
        <div className="eye right"></div>
        <div className="smile"></div>
      </div>
      <div className="avatar-glow"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white waving-hand">
          <path d="M12 2C10.9 2 10 2.9 10 4V10.5L6.5 14C5.67 14.83 5.67 16.17 6.5 17C7.33 17.83 8.67 17.83 9.5 17L11 15.5V20C11 21.1 11.9 22 13 22C14.1 22 15 21.1 15 20V15.5L16.5 17C17.33 17.83 18.67 17.83 19.5 17C20.33 16.17 20.33 14.83 19.5 14L16 10.5V4C16 2.9 15.1 2 14 2H12Z" />
        </svg>
      </div>
    </div>
  )
}
