import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema
const emailSchema = z
    .string()
    .min(8, { message: "Email must be at least 8 characters long" })
    .regex(/^[^@]+@[^@]+$/, { message: "Email must contain exactly one '@' symbol" })
    .regex(/[0-9]/, { message: "Email must contain at least one number" });

const EmailInput: React.FC = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setEmail(input);

        try {
            emailSchema.parse(input);
            setError(""); 
        } catch (e) {
            if (e instanceof z.ZodError) {
                setError(e.errors[0].message); 
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            emailSchema.parse(email);
            alert("Email is valid!");
        } catch (e) {
            if (e instanceof z.ZodError) {
                setError(e.errors[0].message);
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 border border-gray-300 rounded-md shadow-md"
        >
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black-700"
                >
                    Gmail
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-black-500 focus:ring-black-500 sm:text-sm text-black placeholder-black"
                    placeholder="Enter your Gmail"
                />
            </div>
            {error && <p className="text-blue-500 text-sm">{error}</p>}
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </form>

    );
};

export default EmailInput;