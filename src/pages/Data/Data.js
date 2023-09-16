import React,{useState} from 'react'
import './Data.css'

const Data = () => {
  const[tname,settname] = useState('');
  const[Sname,setSname] = useState('');
  const[data,setdata] =useState([{subject:'',marks:''}]);

  const handelchange=(e,value)=>{
    const {name,val}=e.target
    const ab=[...data]
    ab[value][name]=val
    setdata(ab)
  }

  const handeladd=()=>{
    setdata([...data,{subject:'',marks:''}])
  }

  
  return (
    <div>
      <div className='details'>
      <h1>Enter Details</h1>
      <div>
        <input name='tname' value={tname} placeholder='Tile Name' onChange={(e) => settname(e.target.value)} />
      </div>
      <div>
        <input name='Sname' value={Sname} placeholder='Student Name' onChange={(e) => setSname(e.target.value)} />
      </div>
      <div>
        {
          data.map((key,value)=>
          <div>
            <input name='subject' placeholder=' Subjects' onChange={(e)=>{handelchange(e,value)}}/>
            <input name='marks' placeholder='Marks' onChange={(e)=>{handelchange(e,value)}} />
          </div>
        )
        }
        <button onClick={handeladd}>➕</button>
      </div>
      </div>
    </div>
  )
}

export default Data
