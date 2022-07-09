import React, {FC} from "react";
import styled from "styled-components";



export const MainContent1 : FC<any> = ({}) => {
    const ButtonsFunction = (e:any, name:string) => {
        alert(`${name} was clicked`);
    };
    const ButtonMain2Function = (e:any, name:string) => {
        alert(`${name} was clicked`);
    };
    const ButtonMain3Function = (e:any, name:string) => {
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
                                    <Image1
                                        src={"https://file.rendit.io/n/xICflW8qUc2zN0NRKqDm.svg"}
                                    />
                                    <Title>Exams</Title>
                                </FlexRow>
                                <Image1
                                    src={"https://file.rendit.io/n/iy0j7jCmwEYWhvfHl0Th.svg"}
                                />
                                <Title1>New Exam Title Here</Title1>
                            </FlexColumn>
                            <FlexRow1 gap={"16px"}>
                                <FlexRow1 gap={"12px"}>
                                    <StudentName>New Exam Title Here</StudentName>
                                </FlexRow1>
                            </FlexRow1>
                        </FlexColumn>
                        <Buttons onClick={(e) => ButtonsFunction(e, "Buttons")}>
                            <ButtonMain gap={"10px"}>
                                <MasterButton>
                                    <Clear
                                        src={"https://file.rendit.io/n/fscqOsa0KNWpOurnmN3t.svg"}
                                    />
                                    <Title2 color={"#777777"}>Delete Exam</Title2>
                                </MasterButton>
                            </ButtonMain>
                            <ButtonMain gap={"10px"}>
                                <MasterButton1>
                                    <Clear
                                        src={"https://file.rendit.io/n/Vkw8ZN8NydkuNjnfxXtj.svg"}
                                    />
                                    <Title2 color={"#ffffff"}>Save Exam</Title2>
                                </MasterButton1>
                            </ButtonMain>
                        </Buttons>
                    </Header>
                </PageHeader>
            </PageHeader1>
            <FullLayout gap={"20px"}>
                <LeftSide borderRadius={"4px"}>
                    <FlexRow3>
                        <FlexRow4>
                            <ButtonMain gap={"20px"}>
                                <Counter>
                                    <FlexRow gap={"12px"}>
                                        <Graduationcapf
                                            src={"https://file.rendit.io/n/Z3d7z2WNfWjOu6FFdJUZ.png"}
                                        />
                                        <ButtonMain gap={"0px"}>
                                            <Title4>Grade</Title4>
                                            <Title6 fontSize={"18px"}>Grade 1</Title6>
                                        </ButtonMain>
                                    </FlexRow>
                                </Counter>
                                <Counter1>
                                    <FlexRow gap={"12px"}>
                                        <Graduationcapf
                                            src={"https://file.rendit.io/n/TGdXnrGwARkiSuI7XM3Z.png"}
                                        />
                                        <ButtonMain gap={"0px"}>
                                            <Title4>Subject Area</Title4>
                                            <Title6 fontSize={"18px"}>Science</Title6>
                                        </ButtonMain>
                                    </FlexRow>
                                </Counter1>
                            </ButtonMain>
                            <Counter2>
                                <FlexRow7>
                                    <FlexRow gap={"12px"}>
                                        <Graduationcapf
                                            src={"https://file.rendit.io/n/KczD0VjoUFSNZPpQk1Gw.png"}
                                        />
                                        <ButtonMain gap={"0px"}>
                                            <Title4>Course</Title4>
                                            <Title6 fontSize={"20px"}>Biology</Title6>
                                        </ButtonMain>
                                    </FlexRow>
                                </FlexRow7>
                                <Image2 src={""} />
                                <Image3
                                    src={"https://file.rendit.io/n/017I5ocrDoeWCvlFk3jE.svg"}
                                />
                                <Image4 src={""} />
                                <FlexRow7>
                                    <FlexRow gap={"12px"}>
                                        <UnsplashCTagwPbQg
                                            src={"https://file.rendit.io/n/vhqh5cpeIuwTX2z9VVXm.png"}
                                        />
                                        <ButtonMain gap={"0px"}>
                                            <Title4>Amount of Time to Complete the Exam </Title4>
                                            <Title6 fontSize={"20px"}>180 minutes</Title6>
                                        </ButtonMain>
                                    </FlexRow>
                                </FlexRow7>
                            </Counter2>
                        </FlexRow4>
                    </FlexRow3>
                    <LeftSide borderRadius={"0px"}>
                        <Table>
                            <FlexRow11>
                                <Text2>Questions (0)</Text2>
                                <ButtonMain2
                                    onClick={(e) => ButtonMain2Function(e, "ButtonMain2")}
                                >
                                    <MasterButton2>
                                        <Clear
                                            src={"https://file.rendit.io/n/PnZwUrMPu5cI0dVV0ZeZ.svg"}
                                        />
                                        <Title2 color={"#4282aa"}>Add Question</Title2>
                                    </MasterButton2>
                                </ButtonMain2>
                            </FlexRow11>
                        </Table>
                    </LeftSide>
                </LeftSide>
                <Assignee2>
                    <Assignee1>
                        <FullLayout gap={"1px"}>
                            <WhiteFlexRow>
                                <Graduationcapf
                                    src={"https://file.rendit.io/n/BxSpa5My35K4XtbsINjZ.png"}
                                />
                                <Text3>Assigned Teachers</Text3>
                            </WhiteFlexRow>
                        </FullLayout>
                        <Devider
                            src={"https://file.rendit.io/n/hIkIecTxGEesX7bH6lCf.svg"}
                        />
                        <SchoolsScroll>
                            <Schools>
                                <Search1>
                                    <Image1
                                        src={"https://file.rendit.io/n/6N3dDiUN7WnpEKIwnRD1.svg"}
                                    />
                                    <SearchByName />
                                </Search1>
                                <FlexRow12>
                                    <FlexRow13>
                                        <Text4 color={"#777777"}>All Schools</Text4>
                                    </FlexRow13>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </FlexRow12>
                                <WhiteFlexRow1 backgroundColor={"#ffffff"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#4282aa"}>School A</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <WhiteFlexRow1 backgroundColor={"transparent"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#777777"}>School B</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <WhiteFlexRow1 backgroundColor={"transparent"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#777777"}>School C</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <WhiteFlexRow1 backgroundColor={"transparent"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#777777"}>School D</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <WhiteFlexRow1 backgroundColor={"transparent"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#777777"}>School E</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <WhiteFlexRow1 backgroundColor={"transparent"}>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"32px"}>
                                        <Text4 color={"#777777"}>School F</Text4>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Image1
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </WhiteFlexRow1>
                                <FlexRow37>
                                    <CheckBox1>
                                        <Arrowright6
                                            src={"https://file.rendit.io/n/NKHY8rgc7LNXFUrPpdmn.svg"}
                                        />
                                    </CheckBox1>
                                    <FlexRow15 height={"14px"}>
                                        <SchoolB6>School G</SchoolB6>
                                    </FlexRow15>
                                    <CheckBox1>
                                        <Arrowright6
                                            src={"https://file.rendit.io/n/dUfZzbgArJJ6wgvoVELF.svg"}
                                        />
                                    </CheckBox1>
                                </FlexRow37>
                            </Schools>
                            <Scroll1
                                src={"https://file.rendit.io/n/PV1rVbY6yzuHRRHbqhha.svg"}
                            />
                        </SchoolsScroll>
                    </Assignee1>
                    <ButtonMain3 onClick={(e) => ButtonMain3Function(e, "ButtonMain3")}>
                        <Title21>Assign To Class</Title21>
                    </ButtonMain3>
                </Assignee2>
            </FullLayout>
        </MainContentRoot>
    );
};
const MainContentRoot = styled.div`
  height: 900px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  min-width: 1371px;
`;
const PageHeader1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
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
const StudentName = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: Poppins;
  text-decoration: underline;
  font-weight: 700;
  line-height: 36px;
  color: #4282aa;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Buttons = styled.button`
  display: flex;
  flex-direction: row;
  gap: 24px;
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
const MasterButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const MasterButton1 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  background-color: #4282aa;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const FlexRow3 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 24px;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
`;
const Counter = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 280px;
  border-radius: 4px;
  padding: 16px 24px 16px 16px;
`;
const Counter1 = styled.div`
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 16px 24px 16px 16px;
`;
const Counter2 = styled.div`
  width: 616px;
  height: 174px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 4px;
  padding: 16px 24px 11px 16px;
`;
const Image2 = styled.img`
  width: 23px;
  height: 7px;
`;
const Image3 = styled.img`
  height: 1px;
  align-self: stretch;
  min-width: 588px;
`;
const Image4 = styled.img`
  width: 23px;
  height: 6px;
`;
const UnsplashCTagwPbQg = styled.img`
  width: 34px;
  height: 34px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 968px;
  padding: 0px 24px 0px 0px;
`;
const FlexRow11 = styled.div`
  width: 992px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  display: flex;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 27px;
  color: #193046;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;
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
const MasterButton2 = styled.div`
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  width: 154px;
  height: 34px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
const Assignee2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;
const Assignee1 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
`;
const WhiteFlexRow = styled.div`
  width: 151px;
  background-color: #f6f9fb;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  padding: 8px;
`;
const Text3 = styled.div`
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 18px;
  color: #4282aa;
`;
const Devider = styled.img`
  height: 1px;
  align-self: stretch;
  min-width: 335px;
`;
const SchoolsScroll = styled.div`
  width: 335px;
  height: 399px;
  position: relative;
`;
const Schools = styled.div`
  height: 393px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 10px;
  border-radius: 0px 0px 8px 8px;
  padding: 10px 0px;
`;
const Search1 = styled.div`
  height: 27px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 10px 12px 9px 12px;
`;
const SearchByName = styled.div``;
const FlexRow12 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 311px;
  border-radius: 4px;
  padding: 4px 12px;
`;
const FlexRow13 = styled.div`
  width: 275px;
  height: 32px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow37 = styled.div`
  height: 18px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 4px 24px 4px 12px;
`;
const SchoolB6 = styled.div`
  width: 160px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: #777777;
  height: 8px;
`;
const Scroll1 = styled.img`
  width: 8px;
  height: 348px;
  position: absolute;
  top: 51px;
  left: 327px;
`;
const ButtonMain3 = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 335px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const Title21 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 24px;
  color: #4282aa;
  align-self: stretch;
  border-width: 1px;
  border-color: #4282aa;
  border-style: solid;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 333px;
  border-radius: 4px;
  padding: 12px 24px;
`;

interface ShadowedProps {
    flexDirection:string
};

const FlexColumn = styled.div<ShadowedProps>`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: ${(props) => props.flexDirection};
`;
const FlexRow:any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image1 = styled.img`
  width: 16px;
  height: 16px;
`;
const FlexRow1:any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: ${(props) => props.gap};
`;
const ButtonMain:any = styled.div`
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
const Title2 = styled.div`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 19.6px;
  color: ${(props) => props.color};
`;
const FullLayout:any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const LeftSide:any = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: ${(props) => props.borderRadius};
`;
const Graduationcapf = styled.img`
  width: 32px;
  height: 32px;
`;
const Title4 = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 18px;
  color: #193046;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Title6:any = styled.div`
  display: flex;
  font-family: Poppins;
  font-weight: 600;
  color: #4282aa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: ${(props) => props.fontSize};
`;
const FlexRow7 = styled.div`
  width: 596px;
  display: flex;
  flex-direction: row;
  gap: 504px;
  justify-content: flex-start;
  align-items: center;
`;
const Text4 = styled.div`
  width: 160px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 21px;
  color: ${(props) => props.color};
`;
const CheckBox1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;
const WhiteFlexRow1:any = styled.div`
  height: 40px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 335px;
  border-radius: 4px;
  padding: 4px 24px 4px 12px;
  background-color: ${(props) => props.backgroundColor};
`;
const FlexRow15:any = styled.div`
  width: 251px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  height: ${(props) => props.height};
`;
const Arrowright6 = styled.img`
  width: 16px;
  height: 6px;
`;
