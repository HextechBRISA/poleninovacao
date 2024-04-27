"use client"
import React from 'react';
import BackgroundForms from '../components/BackgroundForms';
import ButtonStyle from '../components/ButtonStyle';
import styled from "styled-components";

export default function RegisterPage() {
    return (
      <BackgroundForms>
          <h1>Cadastre-se</h1>
          <Form>
            <Label> Email </Label>
            <Input type="text" placeholder="Email@gmail.com" />
            <Label> Nome </Label>
            <Input type="text" placeholder="Name" />
            <Label> Senha </Label> 
            <Input type="password" placeholder="Password" /> 
            <Label> Foto de Perfil </Label>
            <Upload> 
              Fazer Upload
            </Upload>
            <ButtonStyle>Cadastrar</ButtonStyle>
            <Link href={"/login"}>Já possui uma conta? Faça login!</Link>
          </Form>
      </BackgroundForms>
    );
  }

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;  

const Label = styled.label`
  width: 100%;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
  color: #635A56;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  outline-color: #c0431dc3;
  border-radius: 20px;
`;

const Upload = styled.div`
  width: 100%;
  height: 3em;
  border-radius: 5em;
  border-width: 2px;
  border-style: dashed;
  border-color: #ffffff;
  text-align: center;
  margin: 10px 0px;
  padding-top: 15px;
  color: #635A56;
`;

const Link = styled.a`
  color: #635A56;
  font-size: 15px;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`;