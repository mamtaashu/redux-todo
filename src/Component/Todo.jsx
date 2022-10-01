// import React from "react"
// import {v4 as uuid} from "uuid"
// //  import './GroceryInput.css'
// import all from './all.css'

// export const Todo=()=>{

//     const[input,setInput]=React.useState("")
//     const [data,showData]=React.useState([])

//     const handleClick=()=>{
//         console.log("i am clicked")
//         // postData(input)
//     }

//     const getData=async()=>{
//         let response=await fetch("http://localhost:8080/user");
//         let data=await response.json();
//          console.log(data)
//          data.find((e)=>{
//             // console.log(e.todO)
//             // patchData(e.todo)
//          })
//         showData(data)

//         }


//     // const deleteData=async(id)=>{
//     //     let data=await fetch(`http://localhost:8080/user/${id}`,{
          
//     //        method:"DELETE"

//     //     })
//     //     getData()
//     // 



//     const patchData=async(title)=>{
//         var obj={
            
//             // "name":name,
//             // "email":email,
//             // "password":password,
//             "todo":[
//                 {
//                     id:uuid(),
//                     title:title  
//                 }
//             ]

//         }
//         try{
//             let response =await fetch('http://localhost:8080/user',{
//                 method:"PATCH",
//                 body:JSON.stringify(obj),
//                 headers:{"Content-Type":"application/json"}
           
           
//             })
//             // getData(

            
//             setInput("")

//         }

    
//         catch(error){
//             console.log(error)
//         }
//     }
//     //  getData()
//     React.useEffect(()=>{
//         // getData()
//     },[])

//     return(
//         <div className="list">
//             {/* <button>signup</button>
//             <button>login</button> */}
//             <input className="inp" type="text" placeholder="Enter your grocery" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
//             <button onClick={handleClick}>Add grocery</button>
        
//         {
//             data.map(e=>{
//                 return(
//                     <div className="list">
//                         <h1>{e.title}
//                      {/* <button className="del" onClick={()=>{deleteData(e.id)}}>Delete</button> */}
//                         </h1>
//                     </div>
//                 )
//             })
//         }
        
//         </div>
//     )
// }