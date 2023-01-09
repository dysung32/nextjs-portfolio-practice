import { Wrapper, Title, UserWrapper, UserBox, PasswordBox, Label, User, Password, Essential, ContentWrapper, TitleBox, ContentBox, ContentTitle, Content, RegisterBtn, OtherWrapper, AddressBox, AddressNumBox, AddressNum, AddressSearchBtn, AddressText } from "../../styles/registerPost";

export default function registerPostPage() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <UserWrapper>
        <UserBox>
          <Label>
            작성자<Essential>*</Essential>
          </Label>
          <User type="text" placeholder="이름을 적어주세요." />
        </UserBox>
        <PasswordBox>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 입력해주세요." />
        </PasswordBox>
      </UserWrapper>
      <ContentWrapper>
        <TitleBox>
          <Label>제목</Label>
          <ContentTitle type="text" placeholder="제목을 작성해주세요." />
        </TitleBox>
        <ContentBox>
          <Label>내용</Label>
          <Content placeholder="내용을 작성해주세요." />
        </ContentBox>
      </ContentWrapper>
      <OtherWrapper>
        <AddressBox>
          <Label>주소</Label>
          <AddressNumBox>
            <AddressNum type="text" placeholder="07250" />
            <AddressSearchBtn>우편번호 검색</AddressSearchBtn>
          </AddressNumBox>
          <AddressText></AddressText>
          <AddressText></AddressText>
        </AddressBox>
      </OtherWrapper>
      <RegisterBtn>등록하기</RegisterBtn>
    </Wrapper>
  );
}
