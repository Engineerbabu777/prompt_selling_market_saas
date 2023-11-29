

import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";

const Page = async () => {
  const data = await getUser();
  const promptsData = await getAllPrompts();


  return (
    <div>
      <RoutePage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptsData?.prompts}
      />
    </div>
  );
};

export default Page;