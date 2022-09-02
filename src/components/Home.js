import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


const style = {
    display : "flex",
    height: 70,
    width : "90%",
    border: "1px solid green",
    margin: 6,
    padding: 8
  };


 const demoname= {
    display:"flex",
    justifyContent : "center",
    alignItems : "center",
    height : "100%",
     width:"100%",
      
 } 

const imgstyle = {
    borderRadius : "100%"
}

  export const Home = (props) => {

    const data = [
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        },
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
        ,
        {
          "user": "Demo name ",  
          "imgurl":"/images/demo.jpg"
        }
    ]




    var [x , setX] = useState(25);
    
    const [items , setItems] = useState(data.slice(1,x));

      const nextData = () => {
        var t = x + 10;
        setX(t)

        setTimeout(() => {
        setItems(
          items.concat(data.slice(x, x + 25))
          );
        }, 1000);
      };

      const {showAlert} = props
    return (
        <div>
            <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={nextData}
  hasMore={true}
  loader={<h4>Loading feedback...</h4>}
 
>

{items.map((e) => (
            <div style={style}  key={e.contact + 1}>

                <img style={imgstyle} src={e.imgurl} alt="demo image" />

               <div style={demoname}>{e.user}</div>
            </div>
          ))}



</InfiniteScroll>
            
        </div>
    )
}
