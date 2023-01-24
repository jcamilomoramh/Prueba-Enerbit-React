import React from "react";
import { redirect } from "react-router-dom";

export default function Auth(){
    var USERNAME = document.getElementById("username").value;
    var PASSWORD = document.getElementById("password").value;
    var  messageLogin = document.getElementById("messageLogin");
    const dataUsername = "admin";
    const dataPassword = "admin"; 
    if (USERNAME === dataUsername & PASSWORD === dataPassword){

        window.location.href = '/Crud'
    }else{
        alert("fallo")
        }
  };