import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UserDetail from "@/components/user/UserDetail/UserDetail";
import LinkBtn from "@/components/utils/link/LinkBtn";
import React from "react";

const UserPage = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/user", title: "ユーザー情報確認・編集" },
        ]}
      />
      <PageTitle title={"ユーザー情報確認・編集"} />
      <UserDetail />
    </>
  );
};

export default UserPage;
