import EditUser from "@/components/myComponents/EditUser";
import TopMenu from "@/components/myComponents/TopMenu";
import TitleLink from "@/components/myComponents/TitleLink";

function UserProfile() {
  return (
    <div>
      <TopMenu />
      <div className="-mt-8">
        <TitleLink />
      </div>

      <div className="mt-12  mx-auto ">
        <EditUser />
      </div>
    </div>
  );
}

export default UserProfile;
