import { useContext, useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import axios from "axios";
import Service from "../Service/backEnd";
import { UserContent } from "../Context/UserContent";
import { useNavigate  } from "react-router-dom";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const { token,setToken } = useContext(UserContent);
  const Navigate = useNavigate();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const res = await Service.post("/api/user/login", { email, password });
    if (res.token) {
      setToken(res.token);
      Navigate("/");
    }
  };


  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col h-full justify-center items-center gap-6">
        <h1 className="text-4xl font-semibold">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            placeholder="Usuário"
            className="border border-gray-400 rounded-lg p-1"
            {...register("email")}
          />
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Senha"
              className="border border-gray-400 rounded-lg p-1"
              {...register("password")}
            />
            <div
              className="absolute right-0 top-0 p-1"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <EyeSlashIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <EyeIcon className="h-6 w-6 text-gray-500" />
              )}
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 w-">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
