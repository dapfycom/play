import MyContainer from "components/Container/Container";

const PlayView = () => {
  return (
    <MyContainer>
      {/* <Center
        mt="30px"
        gap="29px"
        mb="81px"
        w="full"
        flexDir={{ xs: "column", md: "row" }}
      >
        <PlayCard
          description="Utmost security and provably fair on chain games."
          title="ON CHAIN"
          icon={<ChainIcon mb="33px" fontSize={"58px"} />}
          gamesPath={routeNames.coinFlip}
        />
        <PlayCard
          description="5 user friendly games accompanied by great music."
          title="OFF CHAIN"
          icon={<ServersIcon mb="33px" fontSize={"58px"} />}
          gamesPath={routeNames.coinFlip}
        />
      </Center>
      <Outlet /> */}
    </MyContainer>
  );
};

export default PlayView;
