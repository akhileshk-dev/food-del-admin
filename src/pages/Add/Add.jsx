import React, { useEffect, useState } from 'react';
import "./Add.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { set } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    image:"",
    category:"Pasta",
  });
  const dataHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{return {...prev,[name]:value}})
  }
  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    const formData=new FormData()
  formData.append("name",data.name);
  formData.append("description",data.description);
  formData.append("price",data.price);
  formData.append("category",data.category);
  formData.append('image',image);
  const response=await axios.post(`${url}/api/food/add`,formData);
  if(response.data.success){
setData({
  name:"",
  description:"",
  price:"",
  image:"",
  category:"Pasta",
});
setImage(false);
toast.success(response.data.message)
  }else{
toast.error(response.data.message);
  }
  }
  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
          <div className="add-image-upload flex-col">
<p>Upload Image</p>
<label htmlFor="image">
  <img src={image?URL.createObjectURL(image):set.upload_img}/>
</label>
<input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
          </div>
          <div className="add-product-name flex-col">
<p>Product Name</p>
<input onChange={dataHandler} value={data.name} type="text" name='name' placeholder='Type here' />
          </div>
          <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea onChange={dataHandler} value={data.description} name="description" rows={6} placeholder='Write content here'></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product category</p>
              <select onChange={dataHandler} value={data.category} name="category">
                <option value=" Pasta">Pasta</option>
                <option value=" Momos">Momos</option>
                <option value=" Pizza">Pizza</option>
                <option value="PanCake">Pancake</option>
                <option value="Seafood" >Seafood</option>
                <option value="Fried pottatos" >Fried pottatos</option>
                <option value="Chicken" >Chicken</option>
              </select>
            </div>
            <div className="add-price flex-col">
<b>Product price</b>
<input onChange={dataHandler} value={data.price} type="number" name='price' placeholder='₹100' />
            </div>
          </div>
          <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add