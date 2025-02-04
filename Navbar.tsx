const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button>
        <h1 className="text-xl font-bold">Organic Beddings</h1>
        </button>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/"></a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
