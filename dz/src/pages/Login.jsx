export function Login() {
    return (
        <form className="flex items-center justify-center flex-col backdrop-blur-xl p-8 rounded-lg shadow-lg relative z-20 w-1/3">
            <h2 className="text-2xl mb-4 text-white">Login</h2>
            <input type="text" placeholder="Username" className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
            <input type="password" placeholder="Password" className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
            <button type="submit" className="font-normal bg-black/40 text-white px-4 py-2 rounded-lg hover:bg-black/60 transition-colors duration-300">Submit</button>
        </form>
    )
}