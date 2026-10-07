import { Project } from "@/typings";
import useSWR from "swr";

// "owner/name" from any github.com repo link (trailing slash, .git, /tree/... and #hash are ignored).
const GITHUB_REPO = /github\.com\/([\w.-]+\/[\w.-]+?)(?:\.git)?(?:[/?#]|$)/;

const fetchReadme = async (url: string) => {
    const res = await fetch(url);
    if (res.status === 404) return null; // repo has no README
    if (!res.ok) throw new Error(`README request failed with ${res.status}`);
    return res.text();
};

const useProjectMarkdown = (project: Project | null) => {
    const repo = project?.repo?.match(GITHUB_REPO)?.[1];
    // HEAD resolves to the repo's default branch, whether it is main or master.
    const readmeUrl = repo ? `https://raw.githubusercontent.com/${repo}/HEAD/README.md` : null;

    return useSWR(readmeUrl, fetchReadme);
};

export default useProjectMarkdown;
