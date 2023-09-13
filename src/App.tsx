import './App.css';
import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function App() {
  return (
      <Box className="App" sx={{display: "flex", flexDirection: "column"}}>
        <Link href="https://www.amazon.es/gp/product/B00ITVP5PC/ref=ox_sc_act_title_1?smid=A1AT7YVPFBWXBL&psc=1&_encoding=UTF8&tag=allequate-21&linkCode=ur2&linkId=78e7a3149e1a5684dc9af47d163521c3&camp=3638&creative=24630" sx={{padding: "10px"}}>3-IN-ONE Gotero</Link>
        <Link href="https://www.amazon.es/gp/product/B08QJHLC8J/ref=ox_sc_act_title_2?smid=A1AT7YVPFBWXBL&th=1&_encoding=UTF8&tag=allequate-21&linkCode=ur2&linkId=b458df3ededa796a524c35ce90f3775d&camp=3638&creative=24630" sx={{padding: "10px"}}>Samsung 980 PRO M.2 NVMe SSD</Link>
        <Link href="https://www.amazon.es/gp/product/B00295CR0U/ref=ox_sc_act_title_3?smid=A1AT7YVPFBWXBL&th=1&_encoding=UTF8&tag=allequate-21&linkCode=ur2&linkId=7383762766b6c9821182665e31a471e2&camp=3638&creative=24630" sx={{padding: "10px"}}>Liqui Moly Disulfuro de molibdeno</Link>
        <Link href="https://www.amazon.es/gp/product/B07GVZHS5S/ref=ox_sc_act_title_4?smid=A1IZUE901X09EF&psc=1&_encoding=UTF8&tag=allequate-21&linkCode=ur2&linkId=c90b8106dc26d2533ce7624a965d770e&camp=3638&creative=24630" sx={{padding: "10px"}}>LANHU Papel De Lija</Link>
        <Link href="https://www.amazon.es/gp/product/B072VGCQYY/ref=ox_sc_act_title_5?smid=A25955XIZIFF8D&psc=1&_encoding=UTF8&tag=allequate-21&linkCode=ur2&linkId=c57e33743bbd2d6e5ffd409ab46b5a6a&camp=3638&creative=24630" sx={{padding: "10px"}}>Ravensburger- Disney Princess Puzzles</Link>
      </Box>
  );
}

export default App;
