import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Details from './Details'

const Dashboard = (props)=>{
    const [department,setDepartment] = useState("")
    const [ids,setids] = useState([])
    const [id,setid]= useState("")
    const [employee,setEmployee] = useState({})
    const [showdetails,setShowdetails]= useState(false)

    const hr =[1,2,3,4,5]
    const engineering =[6,7,8,9,10]


    const getdetails =(e)=>{
        if(id){
            axios.get(`https://reqres.in/api/users/${id}`)
            .then((response)=>{
                const result = response.data.data;
                setEmployee(result)
                
            })
            .catch((err)=> {
                alert(err.message)
            })
            setShowdetails(true)

        }else{
            alert("Please select department and employee id")
        }
    }

    
    const drop =(e)=>{
        const result = e.target.value;
        setDepartment(result)
        if(result === "hr"){
            setids(hr)
            
        }else{
            setids(engineering)
           
        }
    }

    const clear =(e)=>{
        setid("")
        setDepartment([])
        setEmployee({})
        setShowdetails(false)
    }
    
    const idDrop =(e)=>{
        setid(e.target.value);
    }

    return (<div>
        <label>Departments:</label> &emsp; <label>Employee Id:</label><br/>
        <select value={department} onChange={drop}>
            <option>select</option>
            <option value="hr">HR</option>
            <option value="engineering">ENGINEERING</option>
        </select>&nbsp;&nbsp;
        <select value={id} onChange={idDrop}>
            <option>--select--</option>
            {
                ids.map((ele)=>{
                return (<option value={ele}>{ele}</option>)
                })
            }
        </select>&emsp;
        <button onClick={getdetails}>GetDetails</button>&emsp;
        <button onClick={clear}>Clear</button>
        {showdetails && <Details employee={employee}/>}
    </div>)
}

export default Dashboard