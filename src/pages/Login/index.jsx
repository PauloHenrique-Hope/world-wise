import { useState } from "react";
import { PageNav } from "../../components/PageNav";
import { Button } from "../../components/Button";

export function Login() {
  const [email, setEmail] = useState("user007@gmail.com");
  const [password, setPassword] = useState("123test");
  return (
    <section className="relative h-screen m-4 bg-gray-900 ">
      <PageNav />
      <div className="px-4">
        <form className="flex flex-col justify-center h-[250px] rounded-lg gap-2 bg-gray-800 p-4 mt-[200px] mx-auto sm:w-[600px]">
          <div className="flex flex-col">
            <label className="text-white font-medium lg:text-xl">
              Email Address
            </label>
            <input
              className="outline-none pl-1 py-1 rounded-md text-gray-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium lg:text-xl">
              Password
            </label>
            <input
              className="outline-none pl-1 py-1 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </section>
  );
}
