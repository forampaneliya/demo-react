import { useState } from "react"
import "./Card.css"
import Header from "../Header";
function Card() {

    let [ser,setser]=useState("")
    let [info,setinfo]=useState( [
        {
            heading:"Nature view",
            img: "./src/Pages/Header/Cards/img/1.jpeg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Beauty of flower",
            img: "./src/Pages/Header/Cards/img/2.avif",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Natural Beauty",
            img: "./src/Pages/Header/Cards/img/3.jpeg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Swan in water",
            img: "./src/Pages/Header/Cards/img/4.jpg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Sunset time",
            img: "./src/Pages/Header/Cards/img/5.jpeg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Photography",
            img: "./src/Pages/Header/Cards/img/7.jpg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Natural beauty",
            img: "./src/Pages/Header/Cards/img/6.jpeg",
            para:"Nature is the connection between the physical world."
        },
        {
            heading:"Sky view",
            img: "./src/Pages/Header/Cards/img/8.jpg",
            para:"Nature is the connection between the physical world."
        },
    ])

    function searchData(e)
    {
      e.preventDefault()
      let newdata=e.target.search.value;
      setser(newdata)
    }

    function sortingdata(e)
    {
        let value=e.target.value;
        let newinfo=[...info];

        if(value=="asc")
        {
            newinfo.sort((a,b)=>a.heading.localeCompare(b.heading))
        }
        else if(value=="dsc")
        {
            newinfo.sort((a,b)=>b.heading.localeCompare(a.heading))

        }
        setinfo(newinfo)
        
    }
    function deleteData(index)
    {
        info.splice(index,1)
        setinfo([...info])
    }
    // let info =
    return (
        <>
         <div className="header">
            <div className="header-left">
                <img src="./logo.png" alt="" className="header-logo"  />
                Meterial <span className="pro">Pro</span>
            </div>

            <form action="" method="post" onSubmit={(e)=>searchData(e)}>
            <div className="header-middle">
                <input type="text"  placeholder="Search.." name="search" className="Search"/>
                <button className="btn">Search</button>
            </div>
            </form>


            <div className="header-end">

                <select name="sorting" id="" className="Search" onChange={(e)=>sortingdata(e)}>
                <option value="">---Select---</option>
                <option value="asc">Low to high</option>
                <option value="dsc">High to low</option>



                </select>


                <button className="btn-end">Upgrade To Pro</button>
            </div>
        </div>

        <div className="main-Banner">
        <div style={{display:"flex",flexWrap:"wrap"}}>


            {
                info
                .filter((v,i)=>{
                    if(ser=="")
                    {
                        return v
                    }
                    else if(v.heading.toLocaleLowerCase().match(ser.toLocaleLowerCase()))
                    {
                        return v;
                    }
                })
                .map((val, index) => {
                    return (
                        <>
                                <div className="card-main">
                                    <div className="card-img">
                                        <img src={val.img} alt="" className="imge" />
                                    </div>
                                    <div className="card-heading">
                                        {val.heading}
                                    </div>
                                    <div className="card-para">
                                       {val.para}
                                    </div>
                                    <button className="btn-card" onClick={()=>deleteData(index)}>Delete</button>

                                </div>

                        </>
                    )
                })
            }
            </div>
            </div>
            

        </>
    )
}
export default Card