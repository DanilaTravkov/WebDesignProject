import React from "react";

export function Admin() {

    const isAuth = false;

    return (
        <div className="flex flex-col items-center justify-center px-8 py-6 text-white relative z-20">
            <h1 className="text-3xl font-semibold mb-6 pb-2 border-b">Admin Page</h1>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Organizers</h2>
                    <ul>
                        {/* Render list of organizers */}
                        <li className="mb-2">Organizer 1</li>
                        <li className="mb-2">Organizer 2</li>
                        {/* Add more organizers as needed */}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Edit Organizer</h2>
                    <form>
                        <label className="block mb-2">
                            Name:
                            <input type="text" className="border border-gray-300 rounded-md px-2 py-1 w-full mt-2" />
                        </label>
                        <h3 className="text-lg font-semibold mb-2">Festivals</h3>
                        <ul>
                            {/* Render list of festivals for the selected organizer */}
                            <li className="flex items-center justify-between mb-2">Festival 1 <button className="text-sm text-red-600">Delete</button></li>
                            <li className="flex items-center justify-between mb-2">Festival 2 <button className="text-sm text-red-600">Delete</button></li>
                            {/* Add more festivals as needed */}
                        </ul>
                        <button type="button" className="mt-4 bg-black/40 text-white font-semibold px-4 py-2 rounded-lg hover:bg-black/60 transition-colors duration-300">Add Festival</button>
                        <button type="button" className="mt-4 bg-black/40 text-white font-semibold px-4 py-2 rounded-lg hover:bg-black/60 transition-colors duration-300">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
