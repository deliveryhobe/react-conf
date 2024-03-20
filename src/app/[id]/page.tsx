export const runtime = "edge";

import ConferencePage from "@/presentation/pages/ConferencePage/ConferencePage";

const page = ({ params }: { params: { id: string } }) => {
  return <ConferencePage id={params?.id} />;
};

export default page;
