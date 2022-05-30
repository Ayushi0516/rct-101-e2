import React ,{useEffect} from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
import {useState} from "react"
import axios from "axios"
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const[product,setProduct]=useState([]);
  const[pro,setPro]=useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const info =()=>{
    fetch(" http://localhost:8080/products",{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      title:newPro,
      category:newPro,
      gender:newPro,
      imageSrc:newPro,
      price:newPro
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
  useEffect(()=>{
    setTimeout(() => {
      axios
        .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
        .then((r) => {
          setTodos(r.data);
          setTotalCount(+r.headers["x-total-count"]);
        });
    }, 1000);  


  },[page, limit]);




  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First    disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}</Button>
      <Button data-cy="pagination-previous-button"   disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}>Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button"   disabled={totalCount < page * limit}
        onClick={() => {
          setPage(page + 1);
        }}>Next</Button>
      <Button data-cy="pagination-last-button"   disabled={totalCount < page * limit}
        onClick={() => {
          setPage(page + 1);
        }}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
