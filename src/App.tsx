import { useState } from "react";
import PageTitle from "./components/PageTitle";
import {Text, Button, ChakraProvider, Flex, FormLabel } from "@chakra-ui/react";
import InputData from "./components/InputData";
import theme from "./theme";

const styles = {
  result: {
    fontSize: '3xl',
    textAlign: 'center'
  }
}

function App() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [status, setStatus] = useState<string>();
  function calculateBMI() {
    let x = Math.fround(weight / height ** 2);
    if (x <= 18.5){
      setStatus("Underweight")
    } else if (x > 18.5 && x <= 25){
      setStatus("Healthy")
    }else if (x > 25){
      setStatus("Overweight")
    }
    setBmi(x);
  }

  const inputArea = (
    <Flex direction="column" px={"50px"} gap={10}>
      <InputData title="Weight" setValue={setWeight} isInt value={weight}/>
      <InputData title="Height" setValue={setHeight} value={height} />
      <Button colorScheme={"purple"} onClick={calculateBMI}>
        Submit
      </Button>
    </Flex>
  );

  return (
    <ChakraProvider theme={theme}>
      <PageTitle title="BMI Calculator"></PageTitle>
      {inputArea}
      <Flex direction={'column'} mt={30} gap={0}>
        <PageTitle title="Results" />
        <Flex align={'center'} justify={'center'} gap={2}>
        <Text sx= {styles.result}>{"BMI: "}</Text>
        <Text sx={styles.result}> {bmi}</Text>
        </Flex>
        <Flex align={'center'} justify={'center'} gap={2}>
        <Text sx= {styles.result}>{"Status: "}</Text>
        <Text sx= {styles.result}>{status}</Text>
        </Flex>
      </Flex>
      
    </ChakraProvider>
  );
}

export default App;
