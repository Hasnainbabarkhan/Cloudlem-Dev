import React, { useState } from "react";
import angular from "../lib/assets/angular.png";
import html from "../lib/assets/html.png";
import css from "../lib/assets/css.png";
import bootstrap from "../lib/assets/bootstrap.png";
import vue from "../lib/assets/vue.png";
import jquery from "../lib/assets/jquery.png";
import react from "../lib/assets/react.png";
import go from "../lib/assets/golang.png";
import dotnet from "../lib/assets/dotnet.png";
import php from "../lib/assets/php.png";
import node from "../lib/assets/nodejs.png";
import python from "../lib/assets/python.png";
import cassandra from "../lib/assets/cassandra.png";
import mariadb from "../lib/assets/mariadb.png";
import mongodb from "../lib/assets/mongodb.png";
import postgre from "../lib/assets/postgre.png";
import mysql from "../lib/assets/mysql.png";

const frontend = [
  { name: "Angular", icon: angular },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Vue", icon: vue },
  { name: "jQuery", icon: jquery },
  { name: "React", icon: react },
];

const backend = [
  { name: "Go", icon: go },
  { name: ".Net", icon: dotnet },
  { name: "NodeJS", icon: node },
  { name: "PHP", icon: php },
  { name: "Python", icon: python },
];

const database = [
  { name: "Cassandra", icon: cassandra },
  { name: "MariaDB", icon: mariadb },
  { name: "MongoDb", icon: mongodb },
  { name: "Postgre", icon: postgre },
  { name: "Mysql", icon: mysql },
];

const devops = [
  { name: "Jenkins", icon: cassandra },
  { name: "Spanniker", icon: mariadb },
  { name: "Jules", icon: mongodb },
  { name: "Git", icon: postgre },
  { name: "Docker", icon: mysql },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-20">
        Technology <span className="text-orange-500">Stack</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-5 sm:space-x-10 lg:space-x-20 mb-20">
        {["Frontend", "Backend", "Database", "DevOps"].map((tab) => (
          <button
            key={tab}
            className={`${
              activeTab === tab
                ? "text-orange-500 border-b-2 border-orange-500"
                : ""
            } pb-2 text-sm sm:text-base transition-colors duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Icon display for the active tab */}
      <div className="mt-10 mb-10">
        {activeTab === "Frontend" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 justify-center">
            {frontend.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-24 lg:w-24 object-contain"
                />
                <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Backend" && (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-20">
              {backend.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center "
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 lg:h-24 lg:w-24 object-contain"
                  />
                  <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Database" && (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-20">
              {database.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center "
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 lg:h-24 lg:w-24 object-contain"
                  />
                  <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "DevOps" && (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-20">
              {devops.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center "
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 lg:h-24 lg:w-24 object-contain"
                  />
                  <p className="mt-2 text-sm sm:text-base lg:text-lg font-semibold">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default TechStack;
