import {createClient} from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type skills = {
    logoname: string;
    logo: MicroCMSImage;
    skilldescription: string;
} & MicroCMSListContent;
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export const getskillsList = async (queries?: MicroCMSQueries) => {
    const ListData = await client
     .getList<skills>({
        endpoint:"skills",
        queries,
});
     return ListData;
};