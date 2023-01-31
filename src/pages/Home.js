import React, { Component, useState, useEffect, useRef } from 'react'
import logo from '../logo.svg';
import '../App.css';
import BonusBlock from '../components/BonusBlock';
import axios from 'axios';
import { idClient, paramValue, AccessKey } from '../conf'

const Home = () => {

  const loadingRef = useRef(false);

  const headers = {
    'Content-Type': 'application/json',
    'AccessKey': AccessKey,
  };
  
  const data = {
    "idClient": idClient,
    "accessToken": "",
    "paramName": "device",
    "paramValue": paramValue,
    "latitude": 0,
    "longitude": 0,
    "sourceQuery": 0
  };
  
  const [projects, setProjects] = useState([]);
  
  async function getAccessToken(){
    await axios
      .post("/api/v3/clients/accesstoken", data, {
          headers: headers
      })
      .then((response) => {
        //console.log(response.data);
        localStorage.setItem('token', response.data.accessToken)

        getData(localStorage.token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function getData(accessToken){
    await axios
    .get("/api/v3/ibonus/generalinfo/" + accessToken, {
        headers: headers
    })
    .then((response) => {
      //console.log(response.data);
      if(response.data.data.length == undefined){
        let arr = []
        arr.push(response.data.data)
        
        setProjects(arr)
      }else{
        setProjects(response.data.data)
      }
    })
    .catch(function (error) {
      console.log(error);

      getAccessToken();
    });
  }
  
  useEffect(() => {
    getAccessToken()

    setInterval(() => {
      getData(localStorage.token)
    }, 30000)
  }, []);

  return (
    <div class="list-group w-auto bonusSpace">
      <i class="bi bi-info-circle" style={{textAlign: "right", margin: "0 20px", fontSize: "20px", color: "#b11e1e"}} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Страница для просмотра списка бонусов"></i>
      {projects.map((project) => (
        <BonusBlock title={project.currentQuantity + " бонусов"} description={project.forBurningQuantity + " бонусов"} deadline={project.dateBurning}/>
      ))}
    </div>
  );
}

export default Home;
