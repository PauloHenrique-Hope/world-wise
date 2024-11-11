export function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700 hover:text-blue-300 "
    >
      {children}
    </button>
  );
}
