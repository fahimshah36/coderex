import {ColumnsType} from "antd/lib/table";
import {IUserDataType} from "../types/userTypes";

export const usersUtils = (): ColumnsType<IUserDataType> => {
  return [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <>{`${record.firstName}  ${record.lastName}}`}</>,
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
    // {
    //   title: "Assigned",
    //   key: "id",
    //   render: (_, record) => (
    //     <>
    //       {record.lead_assignees.map((item, index) =>
    //         record.lead_assignees.length > 1 &&
    //         index !== record.lead_assignees.length - 1
    //           ? `${item.name} , `
    //           : item.name
    //       )}
    //     </>
    //   ),
    // },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },
    // {
    //   title: "Preferred Countries",
    //   key: "id",
    //   render: (_, record) => (
    //     <>
    //       {record.lead_preferred_countries.map((item) =>
    //         record.lead_preferred_countries.length > 1
    //           ? `${item.name} , `
    //           : item.name
    //       )}
    //     </>
    //   ),
    // },
    // {
    //   title: "Status",
    //   key: "id",
    //   render: (_, record) => (
    //     <h1 style={{color: `${record.lead_status.color}`}}>
    //       {record.lead_status.name}
    //     </h1>
    //   ),
    // },
    // {
    //   title: "Source",
    //   key: "id",
    //   render: (_, record) => <>{record.source.name}</>,
    // },
    // {
    //   title: "Action",
    //   key: "operation",
    //   render: (_, record) => (
    //     <Space size="small">
    //       <Button size="small" type="primary" icon={<EditOutlined />}></Button>
    //       <Popconfirm title="Sure to delete?">
    //         <Button
    //           size="small"
    //           type="primary"
    //           danger
    //           icon={<DeleteOutlined />}
    //         ></Button>
    //       </Popconfirm>
    //     </Space>
    //   ),
    // },
  ];
};
