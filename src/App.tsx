import { Container, Content, Row } from "./style";
import Input from "./Components/Input/index";
import Button from "./Components/Button/index";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState<string | number>("0");
  const [firstNumber, setFirstNumber] = useState<string | number>("0");
  const [operations, setOperations] = useState<string>("");

  const handleAddNmber = (number: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperations("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations("");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperations("");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("x");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperations("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperations("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operations !== "" && currentNumber !== "0") {
      switch (operations) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "x":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Input value={currentNumber} />

          <Row>
            <Button label="0" onClick={() => handleAddNmber("0")} />
            <Button label="/" onClick={handleDivNumbers} />
            <Button label="x" onClick={handleMultNumbers} />
            <Button label="c" onClick={handleOnClear} />
          </Row>

          <Row>
            <Button label="7" onClick={() => handleAddNmber("7")} />
            <Button label="8" onClick={() => handleAddNmber("8")} />
            <Button label="9" onClick={() => handleAddNmber("9")} />
            <Button label="-" onClick={handleSubNumbers} />
          </Row>

          <Row>
            <Button label="4" onClick={() => handleAddNmber("4")} />
            <Button label="5" onClick={() => handleAddNmber("5")} />
            <Button label="6" onClick={() => handleAddNmber("6")} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNmber("1")} />
            <Button label="2" onClick={() => handleAddNmber("2")} />
            <Button label="3" onClick={() => handleAddNmber("3")} />
            <Button label="=" onClick={handleEquals} />
          </Row>
        </Content>
      </Container>
    </>
  );
}

export default App;
