// import { getPosts } from "../db/postAction";
// import MessageForm from "../db/inputField";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";

export default async function Goals() {
  // const { data, errMsg } = await getPosts();

  return (
    <div>
      <Title>Goals</Title>
      <Navbar />
      <main>
        {/* <MessageForm />
        {errMsg ? (
          <h1>{errMsg}</h1>
        ) : (
          data.map((item: { _id: string; msg: string }) => (
            <h1 key={item._id}>{item.msg}</h1>
          ))
        )} */}
      </main>
    </div>
  );
}
