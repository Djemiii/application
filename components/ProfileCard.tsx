import React from "react";

export default function ProfileCard({ Nom, Age, Bio }: any) {
  return (
    <div>
    

        <div className="border border-gray-300 rounded-lg p-6 shadow-md max-w-xs bg-white text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{Nom}</h2>
          <p className="text-gray-600">Âge : {Age} ans</p>
          <p className="text-gray-600">Bio : {Bio} </p>
        </div>
      </div>
 
  );
}
