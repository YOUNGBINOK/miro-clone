"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

// userMemberships : 사용자 멤버십에 대한 정보를 담고 있는 객체나 자료구조
export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  );
};
