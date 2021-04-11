import React from "react";
import { Header1, Paragraph } from "../../styling/Headers";
import StyledButton from "../../components/Button";

function Info() {
  return (
    <>
      <Header1 textAlign="center"> The CSS Grid Quiz</Header1>
      <Paragraph fontSize="1.25em" textAlign="center">
        Take a series of 5 questions to test your practical knowledge of CSS
        grid.
      </Paragraph>
      <Paragraph fontSize="1.25em" textAlign="center" maxWidth="30rem">
        Some of the questions will be multiple choice and some will ask you to
        code. Once you submit the quiz you will be able to see your score.
      </Paragraph>

      <StyledButton text="Start Quiz" to="/quiz/1" />
    </>
  );
}

export default Info;
