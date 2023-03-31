import {StarOutlined} from "@ant-design/icons";
import {Col, Image, List, Row, Space, Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {useUserQuery, useUsersQuery} from "../api/userApi";
import {IUserDataType} from "../types/userTypes";

type Props = {};

const User = (props: Props) => {
  const {id} = useParams();
  const {data: userData, isLoading} = useUserQuery(Number(id));
  const {data: usersData} = useUsersQuery();

  //filtering all users data to get single user data using params
  let filterUserData: IUserDataType;
  filterUserData = usersData?.users?.filter(
    (item) => item.id === Number(id)
  )[0] as IUserDataType;
  console.log(filterUserData);

  const IconText = ({icon, text}: {icon: React.FC; text: string}) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <Row
        gutter={{xs: 8, sm: 16, md: 24, lg: 24}}
        justify="center"
        align="middle"
      >
        <Col span={6} xs={24} sm={24} md={24} lg={4}>
          <Image src={filterUserData.image} />
        </Col>
        <Col span={6} xs={24} sm={24} md={24} lg={5}>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Title>{`${filterUserData.firstName} ${filterUserData.lastName}`}</Typography.Title>
          </Row>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Text>Email: {filterUserData.email}</Typography.Text>
          </Row>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Text>
              Company: {filterUserData.company.name}
            </Typography.Text>
          </Row>
        </Col>
      </Row>
      <List
        loading={isLoading}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={userData?.posts}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item.reactions.toString()}
                key="list-vertical-star-o"
              />,
            ]}
          >
            <List.Item.Meta title={<>{item.title}</>} description={item.body} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default User;
