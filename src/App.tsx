import { Box } from "@chakra-ui/react";
import Cards from "./Card";
import "./App.css";

function App() {
  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        backgroundColor="#181720"
        padding="30px 0"
      >
        <Cards
          id="#B8/457843"
          onSale={false}
          price={260}
          image="./1.png"
          totalLikes={92}
          isLiked={true}
          deadline="03/31/2023"
        />
        <Cards
          id="#B8/457843"
          onSale={false}
          price={260}
          image="./2.png"
          totalLikes={32}
          isLiked={false}
          deadline="02/31/2023"
        />
        <Cards
          id="#B8/457843"
          onSale={true}
          price={260}
          image="./3.png"
          totalLikes={48}
          isLiked={true}
          deadline="02/10/2023"
        />
      </Box>
    </div>
  );
}

export default App;
