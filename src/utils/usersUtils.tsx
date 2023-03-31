import {Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {Link} from "react-router-dom";
import {IUserDataType} from "../types/userTypes";

export const usersUtils = (): ColumnsType<IUserDataType> => {
  return [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Link style={{color: "white"}} to={`/user/${record.id}`}>
          <Typography.Text
            strong
          >{`${record.firstName}  ${record.lastName}`}</Typography.Text>
        </Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
      render: (_, record) => <>{record.company.name}</>,
    },
  ];
};
