import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import { LogOutt } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  return (
    <Button onClick={()=> {dispatch(LogOutt())
    navigate('/Login')
    }}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
