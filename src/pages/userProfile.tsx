import MyEditUser from "@/components/myComponents/EditUser";
import MyMenu from "@/components/myComponents/TopMenu";
import TitleLink from "@/components/myComponents/TitleLink";

function UserProfile() {
  return (
    <div>
      <MyMenu />
      <div className="-mt-8">
        <TitleLink />
      </div>

      <div className="mt-12  mx-auto ">
        <MyEditUser />
      </div>
    </div>
  );
}

export default UserProfile;
