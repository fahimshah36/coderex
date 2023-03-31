import {Table} from "antd";
import {useUsersQuery} from "../api/userApi";
import HeaderTitle from "../components/HeaderTitle";
import {usersUtils} from "../utils/usersUtils";

type Props = {};

const Users = (props: Props) => {
  const {data, isLoading} = useUsersQuery();

  return (
    <div>
      <HeaderTitle title="Users" />
      <Table
        dataSource={data?.users}
        columns={usersUtils()}
        rowKey={(e) => e.id}
        loading={isLoading}
      />
    </div>
  );
};

export default Users;
