// import SellersBanner from "@/components/Shop/SellersBanner";
import { styles } from "@/utils/styles";
// import PromptDetailsCard from "./PromptDetailsCard";
import PromptInformation from "./PromptInformation";
// import PromptCard from "../PromptCard";
// import { useEffect, useState } from "react";
// import { propmt } from "@/@types/promptTypes";
// import PromptCardLoader from "@/utils/PromptCardLoader";

import SellersBanner from "@/components/Shop/SellersBanner";
import PromptDetailsCard from "./PromptDetailsCard";
import { useEffect, useState } from "react";
import PromptCard from "../PromptCard";

const PromptDetails = ({
  promptData,
  stripePromise,
  clientSecret,
}:
{
    promptData: any | undefined;
    stripePromise: any;
    clientSecret: string;
}) => {
    console.log({promptData})

    const [prompts, setPrompts] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchPromptData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/get-related-prompts?promptCategory=${promptData?.category}`
        );
        const data = await response.json();
        setPrompts(data);
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchPromptData();
    }, []);

  return (
    <div>
      <PromptDetailsCard
              promptData={promptData}
              clientSecret={clientSecret}
              stripePromise={stripePromise}
      />
           <br />
       <br />
      <PromptInformation promptData={promptData} />
        <br />
       <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
       <div className="flex flex-wrap">
         {loading ? (<>loading...</>
        //    [...new Array(4)].map((i) => (
        //      <>
        //        <PromptCardLoader />
        //      </>)
           ) : (
          <>
            {prompts &&
              prompts.map((item: any) => (
                <PromptCard prompts={item} key={item.id} />
              ))}
          </>
         )}
      </div>
      {prompts?.length === 0 && (
        <p className={`${styles.label} text-center block my-5`}>
          No prompt found with this category!
        </p>
      )}
      <br />
       <br />
      <SellersBanner />
      <br />
    </div>
  );
};

export default PromptDetails;
