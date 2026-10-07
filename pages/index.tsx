import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { useRef } from "react";
import { sanityClient } from "@/sanity";
import { PageInfo, Project } from "@/typings";
import Navbar from "@/components/Navbar";
import AboutScreen from "@/components/screens/about/AboutScreen";
import ProjectsScreen from "@/components/screens/projects/ProjectsScreen";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
};

export default function Home({ pageInfo, projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar scrollRef={scrollRef} />
      <main
        ref={scrollRef}
        className="w-full h-screen overflow-x-hidden overflow-y-scroll bg-black select-none scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent snap-y snap-proximity scroll-smooth"
      >
        <div className="flex flex-col items-center justify-center align-middle">
          <AboutScreen pageInfo={pageInfo} />
          <ProjectsScreen projects={projects} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [pageInfo, projects] = await Promise.all([
    sanityClient.fetch<PageInfo | null>(groq`*[_type == "page"][0] { ..., socials[]-> }`),
    sanityClient.fetch<Project[]>(groq`*[_type == "project"] { ..., skills[]-> }`),
  ]);

  // Throwing keeps the last good page during revalidation instead of serving a broken one.
  if (!pageInfo) throw new Error('Missing "page" document in Sanity');

  // Pinned first, then newest. `!!` because an unset Sanity boolean is undefined.
  projects.sort(
    (a, b) =>
      Number(!!b.pinned) - Number(!!a.pinned) ||
      b._createdAt.localeCompare(a._createdAt)
  );

  // ponytail: content changes rarely, regenerate at most once a minute
  return { props: { pageInfo, projects }, revalidate: 60 };
};
