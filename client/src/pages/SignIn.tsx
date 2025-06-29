export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6e7] px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="w-full bg-[#004d3d] text-white py-2 rounded hover:bg-[#006d5d]">Sign In</button>
        </form>
      </div>
    </div>
  );
}
