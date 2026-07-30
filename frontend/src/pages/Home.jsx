import React, { useEffect } from 'react'
import { api } from '../api/client'

const Home = () => {
    useEffect(() => {
    async function fetchData() {
      try {
        const data = await api('/'); 
        console.log("Data dari API:", data);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident quo, harum vero vel a accusantium doloremque impedit incidunt exercitationem obcaecati sapiente ut consectetur officiis consequatur illo non repellat? Deleniti.</h1>
    </div>
  )
}

export default Home