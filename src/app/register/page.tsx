"use client";
import React, { useState } from "react";
import BackgroundLogo from "../../components/BackgroundLogo";
import { validationRegisterSchema } from "./validationRegisterSchema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "react-toastify";
import Image from "next/image";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    category: "",
    course: "",
    picture: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [previewImage, setPreviewImage] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const formattedRegisterData = {
      email: registerData.email.trim(),
      name: registerData.name.trim(),
      password: registerData.password.trim(),
      confirmPassword: registerData.confirmPassword.trim(),
      category: registerData.category,
      course: registerData.course,
      picture: registerData.picture.trim(),
    };

    try {
      validationRegisterSchema.parse(formattedRegisterData);
      setErrors({});
      console.log("Dados válidos:", formattedRegisterData);
      handleRegisterSuccess();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        console.error("Erros de validação:", fieldErrors);
      }
    }
  }

  const handleRegisterSuccess = () => {
    toast.success("Cadastro feito com sucesso!", {
      onClose: () => router.push("/login"),
      autoClose: 1000,
    });
  };

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "picture" && files.length > 0) {
      const file = files[0];
      setRegisterData({ ...registerData, picture: file.name });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  }

  return (
    <BackgroundLogo>
      <h1 className="text-3xl font-bold text-center mb-6">Cadastre-se</h1>
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="w-full items-start font-medium mb-2">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={registerData.email}
          onChange={handleChange}
          placeholder="Insira seu e-mail"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />
        {errors.email && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.email}
          </p>
        )}

        <label htmlFor="name" className="w-full items-start font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={registerData.name}
          onChange={handleChange}
          placeholder="Informe seu nome e sobrenome"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />
        {errors.name && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.name}
          </p>
        )}

        <label
          htmlFor="password"
          className="w-full items-start font-medium mb-2"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
          placeholder="Insira sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />
        {errors.password && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.password}
          </p>
        )}

        <label
          htmlFor="confirmPassword"
          className="w-full items-start font-medium mb-2"
        >
          Confirmar senha
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleChange}
          placeholder="Repita sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />
        {errors.confirmPassword && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.confirmPassword}
          </p>
        )}

        <label
          htmlFor="category"
          className="w-full items-start font-medium mb-2"
        >
          Sou:
        </label>
        <select
          id="category"
          name="category"
          value={registerData.category}
          onChange={handleChange}
          className="w-full h-[40px] p-2 text-gray-400 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        >
          <option disabled hidden value="">
            Escolha uma categoria
          </option>
          <option value="Mentor">Mentor</option>
          <option value="Residente">Residente</option>
        </select>
        {errors.category && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.category}
          </p>
        )}

        <label htmlFor="course" className="w-full items-start font-medium mb-2">
          Área:
        </label>
        <select
          id="course"
          name="course"
          value={registerData.course}
          onChange={handleChange}
          className="w-full h-[40px] p-2 text-gray-400 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-5"
        >
          <option disabled hidden value="">
            Escolha uma área de mentoria
          </option>
          <option value="Modelo de negócios">Modelo de negócios</option>
          <option value="Redes sociais">Redes sociais</option>
          <option value="Contabilidade">Contabilidade</option>
          <option value="Identidade visual">Identidade visual</option>
          <option value="Assessoria de imprensa">Assessoria de imprensa</option>
        </select>
        {errors.course && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
            {errors.course}
          </p>
        )}

        <label
          htmlFor="picture"
          className="w-full items-start font-medium mb-2"
        >
          Foto de perfil
        </label>
        <div className="flex items-center justify-center w-full mt-1 mb-4">
          <label
            htmlFor="dropzone-file"
            className={
              previewImage
                ? "flex items-center justify-center w-full cursor-pointer"
                : "flex items-center justify-center w-full h-[40px] border-2 border-white border-solid rounded-[50px] cursor-pointer"
            }
          >
            <input
              id="dropzone-file"
              type="file"
              name="picture"
              onChange={handleChange}
              className="hidden"
            />
            {previewImage ? (
              <div className="flex justify-center items-start">
                <Image
                  src={previewImage}
                  alt="Imagem de perfil"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white border-solid p-1"
                  width={30}
                  height={30}
                />
              </div>
            ) : (
              <p className="flex-auto text-xs text-center font-semibold">
                Fazer Upload PNG ou JPG
              </p>
            )}
          </label>
        </div>
        {errors.picture && (
          <p className="text-[#EA5E53] font-bold text-sm mb-4">
            {errors.picture}
          </p>
        )}

        <button
          type="submit"
          className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
        >
          Cadastrar
        </button>

        <Link
          href={"/login"}
          className="text-center text-[15px] mt-6 underline"
        >
          Já possui uma conta? Faça Login!
        </Link>
      </form>
    </BackgroundLogo>
  );
}
