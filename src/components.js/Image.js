 import '../App.css'
import "../buttons.css"
import { useState } from 'react';
import { HeartOutlined } from "@ant-design/icons"
import { EditOutlined } from "@ant-design/icons"
import { DeleteOutlined } from "@ant-design/icons"


export default function Image(props) {

    const { url, details } = props;
    const [color, setColor] = useState("white")
    const like = () => {
        setColor("pink");
      }
    const edit=()=>{
        (<form >
            <input value={details.name}></input>
            <input value={details.email}></input>
            <input value={details.phone}></input>
            <input value={details.website}></input>


        </form>)
    }
       
    return <>
        <div className="ImageView">
            <img src={url} />
            <div>
                <p>Name: {details.name}</p>
                <p>Email: {details.email}</p>
                <p>Phone: {details.phone}</p>
                <p>Web: https://{details.website}</p>
                <div className="buttons">

                    <div className='heart'><HeartOutlined /></div>
                    <div className="edit" onClick={edit} ><EditOutlined /></div>
                    <div className="delete"> <DeleteOutlined /></div>
                </div>

            </div>
        </div>
    </>
}
