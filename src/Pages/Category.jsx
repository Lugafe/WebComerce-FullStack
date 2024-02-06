import React, { useContext } from 'react'
import './CSS/Category.css'
import  { ShopContext }  from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const Category = (props) => {
  const {all_products} = useContext(ShopContext);
  
  return (
    <div className='category'>
      <img src={props.banner} alt="" />
   
    </div>
  )
}

export default Category



/*      <div className="indexSort">
        <p>
          <span>1-12</span> produtos de 36
        </p>
        <div className="sort">
          <img src={dropdown_icon} alt="" />
        </div>
      </div>  
      <div className="shopcategory">
        {all_products.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
        </div>  */