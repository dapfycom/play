import { Input, InputProps } from "@chakra-ui/react";
interface IProps extends InputProps {}
const InputField = ({ ...props }: IProps) => {
  return <Input size="sm" py={5} borderRadius="md" {...props} />;
};

export default InputField;
