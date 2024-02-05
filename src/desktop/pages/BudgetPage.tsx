import { useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

//Import Redux
import { useDispatch } from "react-redux";
import { handleBudget, handleIncome } from "../../state/Income/incomeSlice";

const BudgetPage: React.FC = () => {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [income, setIncome] = useState<number>(0);
  const [savingPercentage, setSavingPercentage] = useState<number>(10);
  const controls = useAnimation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIncome = Number(e.target.value);
    setIncome(newIncome);
    dispatch(handleIncome(newIncome));
  };

  const handleSavingPercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSavingPercentage(Number(e.target.value));
  };

  const calculateSavings = () => {
    const savings = (income * savingPercentage) / 100;
    dispatch(handleBudget(savings));
    return savings.toString();
  };

  const animateResult = async () => {
    await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    setShowResult(true);
  };

  const handleNextClick = async () => {
    if (showIntroduction) {
      setShowIntroduction(false);
    } else {
      navigate("/home");
    }
  };

  return (
    <Container>
      {showIntroduction ? (
        <IntroductionContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <h1>Easy Finance Calculator</h1>
          <p>
            You just need to provide one piece of information, and we will
            calculate the rest for you.
          </p>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </IntroductionContainer>
      ) : (
        <InputContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <InputLabel htmlFor="income">Income</InputLabel>
          <InputField
            id="income"
            type="number"
            value={income}
            onChange={handleIncomeChange}
          />

          <InputLabel htmlFor="savingPercentage">Saving Percentage</InputLabel>
          <RangeInputContainer>
            <RangeInput
              id="savingPercentage"
              type="range"
              min="0"
              max="100"
              value={savingPercentage}
              onChange={handleSavingPercentageChange}
            />
            <RangeValueLabel>{savingPercentage}%</RangeValueLabel>
          </RangeInputContainer>

          {showResult && (
            <>
              <ResultContainer>
                <motion.div initial={{ opacity: 1, y: 20 }} animate={controls}>
                  Savings: ${Number(calculateSavings()).toFixed(2)}
                </motion.div>
              </ResultContainer>
              <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </>
          )}

          {!showResult && (
            <Button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={animateResult}
            >
              Calculate Savings
            </Button>
          )}
        </InputContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const IntroductionContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 20px;
  max-width: 600px;
`;

const InputContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  display: block;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const RangeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RangeInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const RangeValueLabel = styled.div`
  font-size: 16px;
`;

const ResultContainer = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 1rem;
`;

const Button = styled(motion.button)`
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export default BudgetPage;
