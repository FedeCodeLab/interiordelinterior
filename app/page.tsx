import { Card } from "@/components/card";
import posts from "@/data/posts.json";

export default function Home() {
  return (
    <main className="min-h-screen px-6 w-[90%] md:w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto [&>*:nth-child(4n-3)]:md:col-span-3 [&>*:nth-child(4n-2)]:md:col-span-3 [&>*:nth-child(4n-1)]:md:col-span-2 [&>*:nth-child(4n)]:md:col-span-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            portada={post.portada}
            title={post.title}
            description={post.description}
            href={post.href}
          />
        ))}
      </div>
    </main>
  );
}
