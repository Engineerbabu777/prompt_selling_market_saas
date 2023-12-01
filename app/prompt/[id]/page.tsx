

import { getUser } from "@/actions/user/getUser";
import PromptDetailsPage from "./_page";
import { stripePublishableKey } from "@/actions/payments/PaymentActions";

const Page = async ({ params }: { params: any }) => {
  const data = await getUser();
  const publishAbleKey = await stripePublishableKey()!;

  return (
    <div>
      <PromptDetailsPage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        publishAbleKey={publishAbleKey}
        promptId={params.id}
      />
    </div>
  );
};

export default Page;