import {
  Wrapper,
  Title,
  UserWrapper,
  UserBox,
  PasswordBox,
  Label,
  User,
  Password,
  Essential,
  ContentWrapper,
  TitleBox,
  ContentBox,
  ContentTitle,
  Content,
  RegisterBtn,
  OtherWrapper,
  AddressBox,
  AddressNumBox,
  AddressNum,
  AddressSearchBtn,
  AddressText,
  YoutubeBox,
  YoutubeLink,
  PicBox,
  Pictures,
  Pic,
  MainSetting,
  SettingSelections,
  Selection,
  Radio,
} from "../../../styles/registerPost";

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
          <AddressText type="text"></AddressText>
          <AddressText type="text"></AddressText>
        </AddressBox>
        <YoutubeBox>
          <Label>유튜브</Label>
          <YoutubeLink type="text" placeholder="링크를 복사해주세요."></YoutubeLink>
        </YoutubeBox>
        <PicBox>
          <Label>사진 첨부</Label>
          <Pictures>
            <Pic></Pic>
            <Pic></Pic>
            <Pic></Pic>
          </Pictures>
        </PicBox>
        <MainSetting>
          <Label>메인 설정</Label>
          <SettingSelections>
            <Selection>
              <Radio type="radio" name="setting" checked={true}></Radio>
              <Label>유튜브</Label>
            </Selection>
            <Selection>
              <Radio type="radio" name="setting"></Radio>
              <Label>사진</Label>
            </Selection>
          </SettingSelections>
        </MainSetting>
      </OtherWrapper>
      <RegisterBtn>등록하기</RegisterBtn>
    </Wrapper>
  );
}
