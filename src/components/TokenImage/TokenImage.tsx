import { Flex, Image, Spinner } from "@chakra-ui/react";
import { LpTokenImageV2 } from "components/LpTokenImage/LpTokenImage";
import useGetElrondToken from "hooks/useGetElrondToken";

interface IProps {
  tokenI?: string;
  src?: string;
  size: number;
}
const TokenImage = ({ tokenI, src, size }: IProps) => {
  const { elrondToken, isLoading } = useGetElrondToken(src ? null : tokenI);

  if (src) {
    return (
      <Flex>
        <Image src={src} w={`${size}}px`} />
      </Flex>
    );
  }

  return (
    <Flex>
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex alignItems={"center"}>
          {elrondToken.name.slice(-2).toLocaleLowerCase() === "lp" ? (
            <LpTokenImageV2 lpToken={elrondToken} size={size} />
          ) : (
            <Flex boxSize={`${size}px`} borderRadius="full">
              <Image src={elrondToken.assets.svgUrl} w={`${size}}px`} />
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default TokenImage;
