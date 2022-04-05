import { useState } from "react";
import './App.css';
import './index.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CardFlip from './CardFlip';
import Axios from "axios";
import Logo from "./Logo";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from "./Create";
import Email from './Email'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [product_name, setName] = useState("");
  const [dept, setDept] = useState(0);
  const [product_description, setDescription] = useState("");
  const [product_image, setImage] = useState("");
  const [product_price, setPrice] = useState(0);

  const [newPrice, setNewPrice] = useState(0);

  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    Axios.post("http://localhost:3001/create", {
      product_name: product_name,
      dept: dept,
      product_description: product_description,
      product_image: product_image,
      product_price: product_price,
    }).then(() => {
      setProductList([
        ...productList,
        {
          product_name: product_name,
          dept: dept,
          product_description: product_description,
          product_image: product_image,
          product_price: product_price,
        },
      ]);
    });
  };

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((response) => {
      setProductList(response.data);
    });
  };

  const getTradingCards = () => {
    Axios.get("http://localhost:3001/trading_cards").then((response) => {
      setProductList(response.data);
    });
  };

  const getFigures = () => {
    Axios.get("http://localhost:3001/figures").then((response) => {
      setProductList(response.data);
    });
  };

  const getPlushies = () => {
    Axios.get("http://localhost:3001/plushies").then((response) => {
      setProductList(response.data);
    });
  };

  const getVideoGames = () => {
    Axios.get("http://localhost:3001/video_games").then((response) => {
      setProductList(response.data);
    });
  };

  const getConsoles = () => {
    Axios.get("http://localhost:3001/consoles").then((response) => {
      setProductList(response.data);
    });
  };

  const updateProduct_Price = (id) => {
    Axios.put("http://localhost:3001/update", { product_price: newPrice, id: id }).then(
      (response) => {
        setProductList(
          productList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  product_name: val.product_name,
                  product_description: val.product_description,
                  dept: val.dept,
                  product_image: val.product_image,
                  product_price: newPrice,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setProductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <>


     <h1 className="title App">Turbo Tiger Trades </h1>
       <Logo/>
        
   
   
    <div className="App">
    
      <BrowserRouter>
  <Routes>

  <Route path="/" element={<div>
  <div>
    <table style={{backgroundColor:"orange", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
        
        <th  onClick={getProducts}>All Products</th>
         <th  onClick={getTradingCards}>Trading Cards</th>
         <th  onClick={getFigures}>Figures</th>
         <th  onClick={getPlushies}>Plushies</th>
         <th  onClick={getVideoGames}>Video Games</th>
         <th  onClick={getConsoles}>Consoles</th>
         <th ><Link to="/Contacts">Contacts</Link></th> 
          <th ><Link to="/AboutUs">About Us</Link></th>

        </table>
  </div>


  

        
  
     <CardFlip/>

      <div className="information">
<div className="informationBox" >
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Dept:</label>
        <input
          type="number"
          onChange={(event) => {
            setDept(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Image:</label>
        <input
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
       
        </div>
         <button className="boxButton" onClick={addProduct}>Add Product</button>

      </div>
      <div className="products">
        
<div className="productGrid"> 
        {productList.map((val, key) => {
          return ( 
         
            <div className="product">
              
              <div>
                <h3>Name: {val.product_name}</h3>
                <h3>Dept: {val.dept}</h3>
                <h3>Description: {val.product_description}</h3>
                <img src={val.product_image} alt="product image" width={"225px"} height={"325px"}/>
                <h3>Price: ${val.product_price}</h3>
              </div>
             

              <div>
                <input
                  type="text"
                  placeholder="Update Price?"
                  onChange={(event) => {
                    setNewPrice(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateProduct_Price(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteProduct(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div> 

 </div>}/>
    
     <Route exact path="/AllProducts" element={<Create/>}/>
     <Route exact path="/TradingCards" element={<Create/>}/>
     <Route exact path="/Figures" element={<Create/>}/>
     <Route exact path="/Plushies" element={<Create/>}/>
     <Route exact path="/VideoGames" element={<Create/>}/>
     <Route exact path="/Consoles" element={<Create/>}/>
     <Route exact path="/Contacts" element={<>
      <div>
    <table style={{backgroundColor:"orange", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
        
        <th  onClick={getProducts}><Link to="/">All Products</Link></th>
         <th  onClick={getTradingCards}>Trading Cards</th>
         <th  onClick={getFigures}>Figures</th>
         <th  onClick={getPlushies}>Plushies</th>
         <th  onClick={getVideoGames}>Video Games</th>
         <th  onClick={getConsoles}>Consoles</th>
         <th ><Link to="/Contacts">Contacts</Link></th> 
         <th >About Us</th>

        </table>
  </div>
     <Email/></>}/>
   </Routes>
     
     
    
    </BrowserRouter>
    
  </div>
  
  
  
    
    
    </>
  );
}

export default App;

         