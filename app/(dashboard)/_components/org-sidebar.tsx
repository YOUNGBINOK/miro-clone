// 하위 구성 요소를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주
"use client";

export const OrgSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 bg-red-500">
      Org Sidebar
    </div>
  );
};
