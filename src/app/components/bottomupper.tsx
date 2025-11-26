'use client'


export default function BottomUpper() {
 const handleScrollTop= () => {
    window.scrollTo({top: 0, behavior:"smooth"});
 }
  return (
     <div className="scrollUp fixed bottom-4 right-4 bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-500 transition-colors">
      <button
        onClick={handleScrollTop}
        className="flex items-center justify-center"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      </div>
    );
}