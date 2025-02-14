/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import UserProfile from "../components/ProfileCard/UserProfile";
import AdvPlaceList from "../components/AdventurePlace/AdvPlaceList";
import PageHeader from "../components/UI/PageHeader";
import ProfileActionButton from "../components/EditProfile/ProfileActionButton";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/user";
import { LINK } from "../constants/links";
import { clearAllLocalStorage } from "../utils/localStorage";
import useAuth from "../hooks/useAuth";

const MyPage = () => {
  const navigate = useNavigate();
  const { clearCurrentUser } = useAuth();

  const handleLogout = async () => {
    clearCurrentUser();
    clearAllLocalStorage();
    navigate(LINK.AUTH_PAGE);
  };

  const handleDelete = async () => {
    await deleteUser();
    clearCurrentUser();
    clearAllLocalStorage();
    navigate(LINK.AUTH_PAGE);
  };

  return (
    <>
      <PageHeader headerTitle="마이페이지" />
      <MyPageLayout>
        <ActionButtonContainer>
          <ProfileActionButton
            buttonType="logout"
            onConfirm={handleLogout}
            confirmMessage="로그아웃 하시겠습니까?"
            successMessage="로그아웃이 완료되었습니다."
            buttonText="로그아웃"
          />
          <ProfileActionButton
            buttonType="delete"
            onConfirm={handleDelete}
            confirmMessage="회원 탈퇴시 프로필 데이터가 모두 삭제됩니다."
            successMessage="회원 탈퇴가 완료되었습니다."
            buttonText="회원 탈퇴"
          />
        </ActionButtonContainer>
        <UserProfile />
        <AdvPlaceList />
      </MyPageLayout>
    </>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 420px;
  height: 100%;
  padding: 20px;
  padding-top: 60px;
`;

const ActionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
`;
