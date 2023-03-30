import {Card, Typography} from "antd";
import React from "react";

type Props = {title: string};

const HeaderTitle = ({title}: Props) => {
  return (
    <Card>
      <Typography.Title underline>{title}</Typography.Title>
    </Card>
  );
};

export default HeaderTitle;
