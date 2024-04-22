import React from "react";

export function UserAdmin() {
    return (
        <div className="px-8 py-6 relative z-20 text-white">
            <h1 className="text-3xl font-semibold mb-6 pb-2 border-b">User Administration Page</h1>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Users</h2>
                    <ul>
                        {/* Render list of users */}
                        <li className="mb-2">User 1</li>
                        <li className="mb-2">User 2</li>
                        {/* Add more users as needed */}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                    <form>
                        <label className="block mb-2">
                            Name:
                            <input type="text" className="border border-gray-300 rounded-md px-2 py-1 w-full" />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input type="email" className="border border-gray-300 rounded-md px-2 py-1 w-full" />
                        </label>
                        <label className="block mb-2">
                            Role:
                            <select className="border border-gray-300 rounded-md px-2 py-1 w-full">
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </label>
                        <button type="button" className="mt-4 bg-black/40 text-white font-semibold px-4 py-2 rounded-lg hover:bg-black/60 transition-colors duration-300">Delete User</button>
                        <button type="button" className="mt-4 bg-black/40 text-white font-semibold px-4 py-2 rounded-lg hover:bg-black/60 transition-colors duration-300">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
