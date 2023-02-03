import {
  Card,
  CardHeader,
  Flex,
  Text,
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

type AppProps = {
  id: string;
  bid: boolean;
  price: number;
  image: string;
  totalLikes: number;
  isLiked: boolean;
  deadline: string;
};

function Cards({
  id,
  price,
  image,
  bid,
  totalLikes,
  isLiked,
  deadline,
}: AppProps) {
  const [heart, setHeart] = useState(isLiked);
  const [likes, setLikes] = useState(totalLikes);
  const setLike = () => {
    setLikes(heart ? likes - 1 : likes + 1);
    setHeart(!heart);
  };

  function pad2(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(pad2(Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(pad2(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(pad2(Math.floor((time / 1000 / 60) % 60)));
    setSeconds(pad2(Math.floor((time / 1000) % 60)));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card maxW="370px" backgroundColor="#0b2237" m="2">
      <CardHeader>
        <Flex
          flex="1"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="teal"
            background="transparent"
            color="#545671"
            border="1px solid #545671"
          >
            Hot Deal
          </Badge>
          <Badge
            borderRadius="full"
            px="3"
            fontWeight="600"
            colorScheme="teal"
            background="transparent"
            color="white"
            border={bid ? "1px solid #262EDE" : "1px solid #F18B14"}
          >
            {bid ? "Sale" : "Auction"}
          </Badge>
        </Flex>
      </CardHeader>
      <Box px={6}>
        <Image
          src={image}
          width="270px"
          height="250px"
          borderRadius="10px"
          // alt='Chakra UI'
        />
        <Box p={2} display="flex" justifyContent="space-between">
          <Text color="white">{id}</Text>
          <Box>
            <Box
              display="flex"
              cursor="pointer"
              userSelect="none"
              alignItems="center"
              onClick={() => setLike()}
            >
              <img
                src={heart ? "/heartliked.svg" : "/heart.svg"}
                width="14px"
              />
              <Text px={1} color={heart ? "#ff0cf3" : "#545671"}>
                {likes}
              </Text>
            </Box>
          </Box>
        </Box>
        <Text px={2} color="#356c9f" fontWeight="500">
          Enoch Citizen
        </Text>
      </Box>
      <Box display="flex" alignItems="center" px={8} marginTop="5px">
        {bid ? (
          <Box
            border="1px solid #545671"
            position="relative"
            width="91px"
            borderRadius="5px"
          >
            <Box px={1}>
              <Text
                sx={{ marginTop: "10px" }}
                textDecoration="line-through"
                color="grey"
              >
                <Text color="red">$300</Text>
              </Text>
              <Text className="new-price" color="white" fontWeight="500">
                ${price}
              </Text>
            </Box>
            <Badge
              position="absolute"
              right="0px"
              top="-10px"
              backgroundColor="green"
              color="white"
              borderRadius="7px"
            >
              15% OFF
            </Badge>
          </Box>
        ) : (
          <Box border="1px solid #545671" p={1} borderRadius="5px">
            <Text color="#00bb00" fontWeight="500">
              HIGHEST BID
            </Text>

            <Text color="white" fontWeight="500">
              ${price}
            </Text>
          </Box>
        )}
        <Box
          border="1px solid #545671"
          p={1}
          borderRadius="5px"
          ml={2}
          width={"148px"}
        >
          <Text color="#7ea7ce" fontWeight="500">
            AUCTION END IN
          </Text>
          <Text color="white" fontWeight="500" letterSpacing="3px">
            {days + ":" + hours + ":" + minutes + ":" + seconds}s
          </Text>
        </Box>
      </Box>
      <Box p={4}>
        {bid ? (
          <Box display="flex" justifyContent="space-between">
            <Button
              width="100%"
              borderRadius="1px"
              color="white"
              fontWeight="40200"
              backgroundColor="transparent"
              border="1px solid white"
              mr={2}
            >
              ADD TO CART
            </Button>
            <Button
              backgroundColor="#0082f5"
              width="100%"
              borderRadius="1px"
              color="white"
              fontSize="1rem"
              fontWeight="400"
              p={2}
            >
              BUY NOW
            </Button>
          </Box>
        ) : (
          <Button
            backgroundColor="#0082f5"
            width="100%"
            borderRadius="1px"
            color="white"
            fontWeight="40200"
          >
            BID NOW
          </Button>
        )}
      </Box>
    </Card>
  );
}

export default Cards;
