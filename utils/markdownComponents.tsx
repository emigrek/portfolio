import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";

const markdownComponents: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
    h1: ({ node, ...props }) => <h1 className="py-10 text-3xl font-bold lg:text-4xl" {...props} />,
    h2: ({ node, ...props }) => <h2 className="py-2 font-medium text-md lg:text-xl xl:py-5" {...props} />,
    table: ({ node, ...props }) => <table className="w-full px-2 overflow-hidden text-center border-separate rounded-lg xl:p-2" {...props} />,
    thead: ({ node, ...props }) => <thead className="border-b-2 bg-white/20 border-white/20 text-neutral-50" {...props} />,
    tbody: ({ node, ...props }) => <tbody className="bg-white/10" {...props} />,
    tr: ({ node, ...props }) => <tr className="p-1 text-neutral-200" {...props} />,
    td: ({ node, ...props }) => <td className="p-1" {...props} />,
    th: ({ node, ...props }) => <th className="p-1 py-3" {...props} />,
    pre: ({ node, ...props }) => <pre className="p-2 text-sm whitespace-pre-wrap rounded-lg bg-white/10 text-neutral-200"  {...props} />
};

export default markdownComponents;
