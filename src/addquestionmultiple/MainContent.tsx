import React from "react";
import styled from "styled-components";
export const MainContent1 = ({}) => {
    const ButtonsFunction = (e, name) => {
        alert(`${name} was clicked`);
    };
    const ButtonMain2Function = (e, name) => {
        alert(`${name} was clicked`);
    };
    return (
        <MainContentRoot>
            <PageHeader1>
                <PageHeader>
                    <Header>
                        <FlexColumn flexDirection={"column"}>
                            <FlexColumn flexDirection={"row"}>
                                <FlexRow gap={"8px"}>
                                    <Image6
                                        src={"https://file.rendit.io/n/Nw3AwDvEVF2WBpPq2AER.svg"}
                                    />
                                    <Title>Exams</Title>
                                </FlexRow>
                                <Image6
                                    src={"https://file.rendit.io/n/tk9Tz1mqbmhXU9l4h1gv.svg"}
                                />
                                <Title1>New Exam Title here</Title1>
                                <Image6
                                    src={"https://file.rendit.io/n/tk9Tz1mqbmhXU9l4h1gv.svg"}
                                />
                                <Title1>New Question</Title1>
                            </FlexColumn>
                            <FlexRow1 gap={"16px"}>
                                <FlexRow1 gap={"12px"}>
                                    <StudentName>Add Question</StudentName>
                                </FlexRow1>
                            </FlexRow1>
                        </FlexColumn>
                        <Buttons
                            onClick={(e) => ButtonsFunction(e, "Buttons")}
                            gap={"24px"}
                        >
                            <ButtonMain gap={"10px"}>
                                <MasterButton>
                                    <Clear
                                        src={"https://file.rendit.io/n/KVZxWdk5IxW92Z9LwjfJ.svg"}
                                    />
                                    <Title3 color={"#777777"}>Delete Question</Title3>
                                </MasterButton>
                            </ButtonMain>
                            <ButtonMain gap={"10px"}>
                                <MasterButton1 backgroundColor={"#4282aa"}>
                                    <Clear
                                        src={"https://file.rendit.io/n/wtVN7lJtbPiBfz7wS3AA.svg"}
                                    />
                                    <Title3 color={"#ffffff"}>Save Question</Title3>
                                </MasterButton1>
                            </ButtonMain>
                        </Buttons>
                    </Header>
                </PageHeader>
            </PageHeader1>
            <ButtonMain gap={"24px"}>
                <Element1>
                    <Text8>1. Question Type</Text8>
                    <ButtonMain gap={"4px"}>
                        <PageHeader1>
                            <DropdownMaster>
                                <FlexRow gap={"12px"}>
                                    <Graduationcapf
                                        src={"https://file.rendit.io/n/cx95KNB3JxH3TfbZNkP7.png"}
                                    />
                                    <PageHeader1>
                                        <ButtonMain gap={"0px"}>
                                            <Title5>Multiple choice</Title5>
                                        </ButtonMain>
                                    </PageHeader1>
                                </FlexRow>
                                <Clear
                                    src={"https://file.rendit.io/n/OCOU9xNL3L3KZNRdKXx6.svg"}
                                />
                            </DropdownMaster>
                        </PageHeader1>
                    </ButtonMain>
                </Element1>
                <Element1>
                    <Text8>2. Question</Text8>
                    <QuestionArea>
                        <TextArea2 width={"666px"}>
                            <FlexRow gap={"12px"}>
                                <Graduationcapf1
                                    src={"https://file.rendit.io/n/rTYtJAJnsdbfHCXy4pNS.png"}
                                />
                                <Text10>Question Text...</Text10>
                            </FlexRow>
                            <Image7 src={""} />
                            <FlexRow gap={"16px"}>
                                <Buttons
                                    onClick={(e) => ButtonsFunction(e, "ButtonIconBg")}
                                    gap={"0px"}
                                >
                                    <CollapseButton>
                                        <Image1
                                            src={"https://file.rendit.io/n/s3nTj0SKXpvnQge6FQUq.svg"}
                                        />
                                    </CollapseButton>
                                </Buttons>
                            </FlexRow>
                        </TextArea2>
                    </QuestionArea>
                </Element1>
                <Element1>
                    <FlexRow1 gap={"12px"}>
                        <Text8>3. Answers</Text8>
                        <Text12>(please tick the correct answers)</Text12>
                    </FlexRow1>
                    <Answer gap={"12px"}>
                        <AnswerArea>
                            <TextArea4>
                                <TextArea3>
                                    <CheckBox1>
                                        <Clear
                                            src={"https://file.rendit.io/n/5y9cQYZrOpsKHWKKpDx0.svg"}
                                        />
                                    </CheckBox1>
                                    <Answer gap={"10px"}>
                                        <Text13>Answer Text...</Text13>
                                    </Answer>
                                </TextArea3>
                                <FlexRow gap={"16px"}>
                                    <Buttons
                                        onClick={(e) => ButtonsFunction(e, "ButtonIconBg1")}
                                        gap={"0px"}
                                    >
                                        <CollapseButton1>
                                            <Image1
                                                src={
                                                    "https://file.rendit.io/n/s3nTj0SKXpvnQge6FQUq.svg"
                                                }
                                            />
                                        </CollapseButton1>
                                    </Buttons>
                                </FlexRow>
                            </TextArea4>
                        </AnswerArea>
                    </Answer>
                    <Answer gap={"12px"}>
                        <AnswerArea>
                            <TextArea4>
                                <TextArea3>
                                    <CheckBox1>
                                        <Clear
                                            src={"https://file.rendit.io/n/5y9cQYZrOpsKHWKKpDx0.svg"}
                                        />
                                    </CheckBox1>
                                    <Answer gap={"10px"}>
                                        <Text13>Answer Text...</Text13>
                                    </Answer>
                                </TextArea3>
                                <FlexRow gap={"16px"}>
                                    <Buttons
                                        onClick={(e) => ButtonsFunction(e, "ButtonIconBg2")}
                                        gap={"0px"}
                                    >
                                        <CollapseButton1>
                                            <Image1
                                                src={
                                                    "https://file.rendit.io/n/s3nTj0SKXpvnQge6FQUq.svg"
                                                }
                                            />
                                        </CollapseButton1>
                                    </Buttons>
                                </FlexRow>
                            </TextArea4>
                        </AnswerArea>
                    </Answer>
                    <Answer gap={"12px"}>
                        <AnswerArea>
                            <TextArea4>
                                <TextArea3>
                                    <CheckBox1>
                                        <Clear
                                            src={"https://file.rendit.io/n/5y9cQYZrOpsKHWKKpDx0.svg"}
                                        />
                                    </CheckBox1>
                                    <Answer gap={"10px"}>
                                        <Text13>Answer Text...</Text13>
                                    </Answer>
                                </TextArea3>
                                <FlexRow gap={"16px"}>
                                    <Buttons
                                        onClick={(e) => ButtonsFunction(e, "ButtonIconBg3")}
                                        gap={"0px"}
                                    >
                                        <CollapseButton1>
                                            <Image1
                                                src={
                                                    "https://file.rendit.io/n/s3nTj0SKXpvnQge6FQUq.svg"
                                                }
                                            />
                                        </CollapseButton1>
                                    </Buttons>
                                </FlexRow>
                            </TextArea4>
                        </AnswerArea>
                    </Answer>
                    <Answer gap={"12px"}>
                        <AnswerArea>
                            <TextArea4>
                                <TextArea3>
                                    <CheckBox1>
                                        <Clear
                                            src={"https://file.rendit.io/n/5y9cQYZrOpsKHWKKpDx0.svg"}
                                        />
                                    </CheckBox1>
                                    <Answer gap={"10px"}>
                                        <Text13>Answer Text...</Text13>
                                    </Answer>
                                </TextArea3>
                                <FlexRow gap={"16px"}>
                                    <Buttons
                                        onClick={(e) => ButtonsFunction(e, "ButtonIconBg4")}
                                        gap={"0px"}
                                    >
                                        <CollapseButton1>
                                            <Image1
                                                src={
                                                    "https://file.rendit.io/n/s3nTj0SKXpvnQge6FQUq.svg"
                                                }
                                            />
                                        </CollapseButton1>
                                    </Buttons>
                                </FlexRow>
                            </TextArea4>
                        </AnswerArea>
                    </Answer>
                    <ButtonMain2 onClick={(e) => ButtonMain2Function(e, "ButtonMain2")}>
                        <MasterButton1 backgroundColor={"transparent"}>
                            <Clear
                                src={"https://file.rendit.io/n/zxERQVZZHaWV3U7MUKkj.svg"}
                            />
                            <Title3 color={"#4282aa"}>Add Answer</Title3>
                        </MasterButton1>
                    </ButtonMain2>
                </Element1>
                <Element1>
                    <Text8>4. Points</Text8>
                    <TextArea11>
                        <FlexRow gap={"8px"}>
                            <Graduationcapf
                                src={"https://file.rendit.io/n/zaDOB4MqxGbwGKet84Qc.png"}
                            />
                            <Text18>point for the right answer</Text18>
                        </FlexRow>
                    </TextArea11>
                    <ButtonMain2 onClick={(e) => ButtonMain2Function(e, "ButtonMain3")}>
                        <MasterButton1 backgroundColor={"transparent"}>
                            <Clear
                                src={"https://file.rendit.io/n/npB6XApjlN6b8gpIBcBL.svg"}
                            />
                            <Title3 color={"#4282aa"}>Change</Title3>
                        </MasterButton1>
                    </ButtonMain2>
                </Element1>
                <Element1>
                    <Text8>5. Comments</Text8>
                    <QuestionArea1>
                        <TextArea2 width={"630px"}>
                            <FlexRow gap={"10px"}>
                                <Graduationcapf3
                                    src={"https://file.rendit.io/n/Qd0YuG7Jf5Ok21txZ72V.png"}
                                />
                                <Text20>Teacher comment...</Text20>
                            </FlexRow>
                            <Image11 src={""} />
                        </TextArea2>
                    </QuestionArea1>
                </Element1>
            </ButtonMain>
        </MainContentRoot>
    );
};
const MainContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1371px;
`;
const PageHeader = styled.div`
  width: 1371px;
  background-color: #f6f9fb;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const Header = styled.div`
  width: 1323px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  padding: 24px;
`;
const Title = styled.div`
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
`;
const StudentName = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 36px;
  color: #4282aa;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const MasterButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const DropdownMaster = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  width: 698px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  border-radius: 8px;
  padding: 16px 24px 16px 16px;
`;
const Title5 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  color: #4282aa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const QuestionArea = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  padding: 16px;
`;
const Graduationcapf1 = styled.img`
  width: 31px;
  height: 30px;
`;
const Text10 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 19.2px;
  color: #777777;
`;
const Image7 = styled.img`
  width: 88px;
  height: 30px;
`;
const CollapseButton = styled.div`
  width: 31px;
  height: 30px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const Text12 = styled.div`
  text-align: center;
  display: flex;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: #777777;
  flex-direction: row;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TextArea11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 700px;
`;
const Text18 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
  color: #777777;
`;
const QuestionArea1 = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  width: 666px;
  height: 86px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  padding: 16px;
`;
const Graduationcapf3 = styled.img`
  width: 13px;
  height: 13px;
`;
const Text20 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 19.2px;
  color: #777777;
  width: 159px;
  height: 7px;
`;
const Image11 = styled.img`
  width: 69px;
  height: 28px;
`;
const PageHeader1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: ${(props) => props.flexDirection};
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image6 = styled.img`
  width: 16px;
  height: 16px;
`;
const Title1 = styled.div`
  display: flex;
  font-size: 10px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 14px;
  color: #717782;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${(props) => props.gap};
`;
const Buttons = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
  gap: ${(props) => props.gap};
`;
const ButtonMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const Clear = styled.img`
  width: 20px;
  height: 20px;
`;
const Title3 = styled.div`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 19.6px;
  color: ${(props) => props.color};
`;
const MasterButton1 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${(props) => props.backgroundColor};
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 700px;
`;
const Text8 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
  color: #777777;
`;
const Graduationcapf = styled.img`
  width: 32px;
  height: 32px;
`;
const TextArea2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  width: ${(props) => props.width};
`;
const Image1 = styled.img`
  width: 24px;
  height: 24px;
`;
const Answer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const AnswerArea = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  padding: 16px;
`;
const TextArea4 = styled.div`
  width: 668px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
const TextArea3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 0px 0px 8px;
`;
const CheckBox1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2px 0px 0px 0px;
`;
const Text13 = styled.div`
  width: 499px;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #777777;
`;
const CollapseButton1 = styled.div`
  width: 32px;
  height: 32px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const ButtonMain2 = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
