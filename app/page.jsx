import Feed from "@components/Feed";

function Home() {
  return (
    
    <section className="w-full flex-center flex-col">
      
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores!
        Vitae nihil commodi reiciendis sit totam consequatur culpa dolorem quos!
      </p>
      <Feed />
    </section>
  );
}

export default Home;
