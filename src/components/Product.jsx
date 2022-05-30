import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"
import { useState } from "react";
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const[product,setProduct]=useState([]);
  const[pro,setPro]=useState("");


  const info =()=>{
    fetch(" http://localhost:8080/products",{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      title:setPro,
      category:setPro,
      gender:setPro,
      imageSrc:setPro,
      price:setPro
      })
  })
  .then((r)=>{ 
    return r.json()
    })
  .then((d)=>{
  setProduct([...product,d]);
    setPro("");
  });
 
}
  
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};


export default Product;
