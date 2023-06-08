import { useState } from "react";
import axios from "axios";

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
  MainSetting,
  SettingSelections,
  Selection,
  Radio,
  Error,
  UploadBtn,
  PlusIcon,
  UploadTxt,
} from "../../../styles/emotion";

export default function registerPostPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    // 작성자 란이 빈칸이면
    if (event.target.value !== "") setWriterError(""); // 에러메시지 발생 X
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    // 모든 값이 입력되었다면 게시글 정상 등록
    if (writer && password && title && contents) {
      const result = await axios.post(
        "http://practice.codebootcamp.co.kr/api-docs/board",
        {
          writer: { writer },
          password: { password },
          title: { title },
          contents: { contents },
        }
      );
      console.log(result);
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <UserWrapper>
        <UserBox>
          <Label>
            작성자<Essential>*</Essential>
          </Label>
          <User
            type="text"
            onChange={onChangeWriter}
            placeholder="이름을 적어주세요."
          />
          <Error>{writerError}</Error>
        </UserBox>
        <PasswordBox>
          <Label>비밀번호</Label>
          <Password
            type="password"
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          />
          <Error>{passwordError}</Error>
        </PasswordBox>
      </UserWrapper>
      <ContentWrapper>
        <TitleBox>
          <Label>제목</Label>
          <ContentTitle
            type="text"
            onChange={onChangeTitle}
            placeholder="제목을 작성해주세요."
          />
          <Error>{titleError}</Error>
        </TitleBox>
        <ContentBox>
          <Label>내용</Label>
          <Content
            onChange={onChangeContents}
            placeholder="내용을 작성해주세요."
          />
          <Error>{contentsError}</Error>
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
          <YoutubeLink
            type="text"
            placeholder="링크를 복사해주세요."></YoutubeLink>
        </YoutubeBox>
        <PicBox>
          <Label>사진 첨부</Label>
          <Pictures>
            <UploadBtn>
              <PlusIcon>+</PlusIcon>
              <UploadTxt>Upload</UploadTxt>
            </UploadBtn>
            <UploadBtn>
              <PlusIcon>+</PlusIcon>
              <UploadTxt>Upload</UploadTxt>
            </UploadBtn>
            <UploadBtn>
              <PlusIcon>+</PlusIcon>
              <UploadTxt>Upload</UploadTxt>
            </UploadBtn>
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
      <RegisterBtn onClick={onClickSubmit}>등록하기</RegisterBtn>
    </Wrapper>
  );
}
