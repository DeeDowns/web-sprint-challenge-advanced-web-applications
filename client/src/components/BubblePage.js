import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColorsData = () => {
    setIsLoading(true)
    axiosWithAuth().get('/api/colors')
    .then(res => {
      // console.log(res)
      setColorList(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      setError(err.message)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getColorsData()
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
