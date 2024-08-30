export default function CartButton() {
  return (
    <button className="text-blue-500 hover:text-blue-700 transition duration-300 group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      </svg>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0.5 transition duration-300 group-hover:bg-red-700">
        20
      </div>
    </button>
  );
}
