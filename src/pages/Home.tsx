import {Table} from "antd";
import {useUsersQuery} from "../api/userApi";
import HeaderTitle from "../components/HeaderTitle";
import {usersUtils} from "../utils/usersUtils";

type Props = {};

const Home = (props: Props) => {
  const {data} = useUsersQuery();
  console.log(data?.users);

  return (
    <div>
      <HeaderTitle title="Users" />
      <Table dataSource={data?.users} columns={usersUtils()} />
    </div>
  );
};

export default Home;
