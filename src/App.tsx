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
        backgroundColor="#545671"
        padding="30px 0"
      >
        <Cards
          id="#B8/457843"
          onSale={false}
          price={260}
          image="./1.png"
          totalLikes={92}
          isLiked={true}
          timeLeft={1800}
        />
        <Cards
          id="#B8/457843"
          onSale={false}
          price={260}
          image="./2.png"
          totalLikes={32}
          isLiked={false}
          timeLeft={2700}
        />
        <Cards
          id="#B8/457843"
          onSale={true}
          price={260}
          image="./3.png"
          totalLikes={48}
          isLiked={true}
          timeLeft={3600}
        />
      </Box>
    </div>
  );
}

export default App;
