import { z } from "zod";
import { useState } from "react";

export function Login() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const User = z.object({
        login: z.string().email("Enter a valid email"),
        password: z.string().min(3, "Password too small").max(12, "Password too big")
      });

    const handleSubmit = (e) => {
        // Validation
        e.preventDefault()
        try {
            User.parse({
                login: login,
                password: password
            })
        } catch (error) {
            console.log(error.errors[0].message)
            setLoginError(error.errors[0].message)
            setPasswordError(error.errors[1].message)

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col backdrop-blur-xl p-8 rounded-lg shadow-lg relative z-20 w-1/3">
                <h2 className="text-2xl mb-4 text-white">Login</h2>
                <label className="text-white text-left w-full" htmlFor="email">{loginError ? loginError : "Enter your email"}</label>
                <input name="email" onChange={(e) => {setLogin(e.target.value)}} value={login} type="text" placeholder="Username" className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                <label className="text-white text-left w-full" htmlFor="password">{passwordError ? passwordError : "Enter your password"}</label>
                <input name="password" onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                <button type="submit" className="hover:bg-slate-700 text-white bg-slate-800 p-3 px-8 inline rounded-full duration-300">Submit</button>
            </form>
            <p className="text-white z-20 h-2">{(loginError || passwordError) && "There are some issues with data you entered, please go back and try again"}</p>
            <p className="text-white text-xl z-20 h-2 mt-4 underline underline-offset-4">Don't have an account?</p>
        </>

    )
}