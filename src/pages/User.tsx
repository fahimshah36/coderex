import {StarOutlined} from "@ant-design/icons";
import {Col, Image, List, Row, Space, Table, Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {useUserQuery} from "../api/userApi";
import HeaderTitle from "../components/HeaderTitle";
import {usersUtils} from "../utils/usersUtils";

type Props = {};

const User = (props: Props) => {
  const {id} = useParams();
  const {data: userData, isLoading} = useUserQuery(Number(id));

  console.log(userData?.posts);

  const IconText = ({icon, text}: {icon: React.FC; text: string}) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}} justify="center">
        <Col span={6} xs={24} sm={24} md={24} lg={4}>
          <Image />
        </Col>
        <Col span={6} xs={24} sm={24} md={24} lg={4}>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Title>name</Typography.Title>
          </Row>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Text>Lorem</Typography.Text>
          </Row>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 24}}>
            <Typography.Text>Lorem2</Typography.Text>
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
