import React from "react";
import styled from "styled-components";
export const QuestionTYPEMatching1 = ({}) => {
    const ButtonsFunction = (e:any, name:string) => {
        alert(`${name} was clicked`);
    };
    const ButtonMain2Function = (e:any, name:string) => {
        alert(`${name} was clicked`);
    };
    return (
        <QuestionTYPEMatchingRoot>
            <Sidebar>
                <WhiteFlexColumn>
                    <MainMenu margin={"0px 0px 212px 0px"}>
                        <MainMenuMaster margin={"0"}>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/Maj1NSBvY2OnoTQJqFNq.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/DDXFggyvwq4weJd5aw3f.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/YSxQ5VlT5ntP72apHZdF.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/bdyHXFbhoFgMZpfrYLQe.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/glJSfKsNQkDUs3NfPnfj.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"#4282aa"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/nbLML74Rhi6DbrNZ2LLu.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                            <MainMenuItem gap={"10px"}>
                                <FlexRow backgroundColor={"transparent"}>
                                    <Lsgraph
                                        src={"https://file.rendit.io/n/S0hI9RbC36T8NC4jmlT0.svg"}
                                    />
                                </FlexRow>
                            </MainMenuItem>
                        </MainMenuMaster>
                    </MainMenu>
                    <MainMenuMaster margin={"0px 0px 24px 0px"}>
                        <MainMenuItem gap={"10px"}>
                            <FlexRow6>
                                <Lsgraph
                                    src={"https://file.rendit.io/n/i3gDd5JxBhtjTuk8w0vi.svg"}
                                />
                                <Element1>309</Element1>
                            </FlexRow6>
                        </MainMenuItem>
                        <MainMenuItem gap={"10px"}>
                            <FlexRow backgroundColor={"transparent"}>
                                <Lsgraph
                                    src={"https://file.rendit.io/n/fRFgAw3JSlxWb6Qd61hQ.svg"}
                                />
                            </FlexRow>
                        </MainMenuItem>
                    </MainMenuMaster>
                    <UserMenu>
                        <MainMenuItem gap={"10px"}>
                            <FlexRow8 />
                        </MainMenuItem>
                    </UserMenu>
                </WhiteFlexColumn>
            </Sidebar>
            <MainContent>
                <MainMenuItem gap={"0px"}>
                    <PageHeader>
                        <Header>
                            <FlexColumn gap={"8px"}>
                                <MainMenuItem gap={"8px"}>
                                    <FlexRow9 gap={"8px"}>
                                        <Image12
                                            src={"https://file.rendit.io/n/pRZthOHCZfPLWznhe6Og.svg"}
                                        />
                                        <Title>Exams</Title>
                                    </FlexRow9>
                                    <Image12
                                        src={"https://file.rendit.io/n/l09UGZymYcne0o22r8yq.svg"}
                                    />
                                    <Title1>New Exam Title here</Title1>
                                    <Image12
                                        src={"https://file.rendit.io/n/l09UGZymYcne0o22r8yq.svg"}
                                    />
                                    <Title1>New Question</Title1>
                                </MainMenuItem>
                                <FlexRow10 gap={"16px"}>
                                    <FlexRow10 gap={"12px"}>
                                        <StudentName>Add Question</StudentName>
                                    </FlexRow10>
                                </FlexRow10>
                            </FlexColumn>
                            <Buttons
                                onClick={(e) => ButtonsFunction(e, "Buttons")}
                                gap={"24px"}
                            >
                                <FlexColumn gap={"10px"}>
                                    <MasterButton>
                                        <Clear
                                            src={"https://file.rendit.io/n/AuAlNBQOSYK3opFJhVmN.svg"}
                                        />
                                        <Title3 color={"#777777"}>Delete Question</Title3>
                                    </MasterButton>
                                </FlexColumn>
                                <FlexColumn gap={"10px"}>
                                    <MasterButton1 backgroundColor={"#4282aa"}>
                                        <Clear
                                            src={"https://file.rendit.io/n/RGNG9LNne0bwoyDIcJk9.svg"}
                                        />
                                        <Title3 color={"#ffffff"}>Save Question</Title3>
                                    </MasterButton1>
                                </FlexColumn>
                            </Buttons>
                        </Header>
                    </PageHeader>
                </MainMenuItem>
                <FlexColumn gap={"24px"}>
                    <Element2 flexDirection={"column"}>
                        <Text4>1. Question Type</Text4>
                        <FlexColumn gap={"4px"}>
                            <MainMenuItem gap={"0px"}>
                                <DropdownMaster>
                                    <FlexRow9 gap={"12px"}>
                                        <Graduationcapf
                                            src={"https://file.rendit.io/n/P7BNNSHLgrq4GuEr7hoI.png"}
                                        />
                                        <MainMenuItem gap={"0px"}>
                                            <MainMenu margin={"0"}>
                                                <Title5>Matching</Title5>
                                            </MainMenu>
                                        </MainMenuItem>
                                    </FlexRow9>
                                    <Clear
                                        src={"https://file.rendit.io/n/u5p3QqRSpUCW908OvvO9.svg"}
                                    />
                                </DropdownMaster>
                            </MainMenuItem>
                        </FlexColumn>
                    </Element2>
                    <Element2 flexDirection={"column"}>
                        <Text4>2. Questions / Answers</Text4>
                        <Element2 flexDirection={"row"}>
                            <Text6>Question</Text6>
                            <Text6>Correct Answer</Text6>
                        </Element2>
                        <MainMenuItem gap={"12px"}>
                            <QuestionArea>
                                <TextArea2 gap={"10px"}>
                                    <Text8>1.</Text8>
                                    <TextArea1>
                                        <Text9 minWidth={"248"}>Question Text</Text9>
                                    </TextArea1>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea>
                            <QuestionArea1>
                                <TextArea2 gap={"10px"}>
                                    <TextArea2 gap={"12px"}>
                                        <Text10>Answer Text</Text10>
                                    </TextArea2>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg1")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton1>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton1>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea1>
                        </MainMenuItem>
                        <MainMenuItem gap={"12px"}>
                            <QuestionArea>
                                <TextArea2 gap={"10px"}>
                                    <Text8>2.</Text8>
                                    <TextArea1>
                                        <Text9 minWidth={"244"}>Question Text</Text9>
                                    </TextArea1>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg2")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea>
                            <QuestionArea1>
                                <TextArea2 gap={"10px"}>
                                    <TextArea2 gap={"12px"}>
                                        <Text10>Answer Text</Text10>
                                    </TextArea2>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg3")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton1>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton1>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea1>
                        </MainMenuItem>
                        <MainMenuItem gap={"12px"}>
                            <QuestionArea>
                                <TextArea2 gap={"10px"}>
                                    <Text8>3.</Text8>
                                    <TextArea1>
                                        <Text9 minWidth={"244"}>Question Text</Text9>
                                    </TextArea1>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg4")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea>
                            <QuestionArea1>
                                <TextArea2 gap={"10px"}>
                                    <TextArea2 gap={"12px"}>
                                        <Text10>Answer Text</Text10>
                                    </TextArea2>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg5")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton1>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton1>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea1>
                        </MainMenuItem>
                        <MainMenuItem gap={"12px"}>
                            <QuestionArea>
                                <TextArea2 gap={"10px"}>
                                    <Text8>4.</Text8>
                                    <TextArea1>
                                        <Text9 minWidth={"243"}>Question Text</Text9>
                                    </TextArea1>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg6")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea>
                            <QuestionArea1>
                                <TextArea2 gap={"10px"}>
                                    <TextArea15>
                                        <Text16>Answer Text</Text16>
                                    </TextArea15>
                                    <Options>
                                        <Buttons
                                            onClick={(e) => ButtonsFunction(e, "ButtonIconBg7")}
                                            gap={"0px"}
                                        >
                                            <CollapseButton1>
                                                <Image1
                                                    src={
                                                        "https://file.rendit.io/n/hqymi9vz9rlf4xcsYazL.svg"
                                                    }
                                                />
                                            </CollapseButton1>
                                        </Buttons>
                                    </Options>
                                </TextArea2>
                            </QuestionArea1>
                        </MainMenuItem>
                    </Element2>
                    <Element2 flexDirection={"column"}>
                        <Text4>3. Points</Text4>
                        <TextArea17>
                            <FlexRow9 gap={"8px"}>
                                <Graduationcapf
                                    src={"https://file.rendit.io/n/OdzhHWkcZuEwjhSBAMxr.png"}
                                />
                                <Text18>point for the right matching</Text18>
                            </FlexRow9>
                        </TextArea17>
                        <ButtonMain2 onClick={(e) => ButtonMain2Function(e, "ButtonMain2")}>
                            <MasterButton1 backgroundColor={"transparent"}>
                                <Clear
                                    src={"https://file.rendit.io/n/7ynGev36SRfRJyJYMACB.svg"}
                                />
                                <Title3 color={"#4282aa"}>Change</Title3>
                            </MasterButton1>
                        </ButtonMain2>
                    </Element2>
                    <Element2 flexDirection={"column"}>
                        <Text4>4. Comments</Text4>
                        <QuestionArea8>
                            <TextArea19>
                                <FlexRow9 gap={"10px"}>
                                    <Graduationcapf2
                                        src={"https://file.rendit.io/n/pEFIuyP81MxpYrAdhDt5.png"}
                                    />
                                    <Text20>Teacher comment...</Text20>
                                </FlexRow9>
                                <Image13 src={""} />
                            </TextArea19>
                        </QuestionArea8>
                    </Element2>
                </FlexColumn>
            </MainContent>
        </QuestionTYPEMatchingRoot>
    );
};
const QuestionTYPEMatchingRoot = styled.div`
  background-color: #f6f9fb;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 1px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  min-width: 1440px;
`;
const Sidebar = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn = styled.div`
  width: 48px;
  height: 772px;
  background-color: #ffffff;
  display: flex;
  align-self: stretch;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 72px 10px 56px 10px;
`;
const FlexRow6 = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const Element1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 11px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 13.86px;
  color: #ffffff;
  background-color: #e32a99;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 1px 5px;
`;
const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const FlexRow8 = styled.div`
  border-width: 2px;
  border-color: #b2b7c1;
  border-style: solid;
  width: 44px;
  height: 44px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 40px 0px;
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
const TextArea15 = styled.div`
  width: 269px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`;
const Text16 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #777777;
  width: 95px;
  height: 23px;
`;
const TextArea17 = styled.div`
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
const QuestionArea8 = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
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
const TextArea19 = styled.div`
  width: 666px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
`;
const Graduationcapf2 = styled.img`
  width: 31px;
  height: 31px;
`;
const Text20 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 19.2px;
  color: #777777;
`;
const Image13 = styled.img`
  width: 87px;
  height: 46px;
`;
const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuMaster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const MainMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
const Lsgraph = styled.img`
  width: 28px;
  height: 28px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image12 = styled.img`
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
const FlexRow10 = styled.div`
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
const Element2 = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 700px;
  flex-direction: ${(props) => props.flexDirection};
`;
const Text4 = styled.div`
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
const Text6 = styled.div`
  text-align: center;
  width: 344px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: #4282aa;
`;
const QuestionArea = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  width: 342px;
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
const TextArea2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: ${(props) => props.gap};
`;
const Text8 = styled.div`
  font-size: 18px;
  font-family: Poppins;
  font-weight: 600;
  color: #4282aa;
`;
const TextArea1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;
const Text9 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #777777;
  align-self: stretch;
  min-width: ${(props) => props.minWidth};
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;
const CollapseButton = styled.div`
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
const Image1 = styled.img`
  width: 24px;
  height: 24px;
`;
const QuestionArea1 = styled.div`
  border-width: 1px;
  border-color: #d0e7ef;
  border-style: solid;
  width: 310px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 4px;
  padding: 16px;
`;
const Text10 = styled.div`
  width: 269px;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #777777;
  height: 23px;
  flex-grow: 1;
`;
const CollapseButton1 = styled.div`
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
