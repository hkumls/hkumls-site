import React, { FunctionComponent } from "react";

interface MemberData {
  name: string;
}

interface MemberComponentProps {
  data: MemberData;
}

export const Member: FunctionComponent<MemberComponentProps> = ({
  data: { name },
}) => {
  return <div>{name}</div>;
};
