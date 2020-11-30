import { useEffect } from "react";
import React, {useState} from 'react'

const Details=(props)=>{
    const {employee} = props;
    
    
    return (<div>
       <img src={employee.avatar} width="35%"/>
        <h2>id: {employee.id}</h2><h2> Name:{employee.first_name}{employee.last_name}</h2>
    
    </div>)
}
export default Details