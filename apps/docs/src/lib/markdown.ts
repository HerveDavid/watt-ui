import type { ComponentMeta } from "@/types/component-meta";
import type { MarkdownModule } from "@/types/markdown-module";

export const getComponentPosts = () => {
    const modules = import.meta.glob<MarkdownModule>('@/components/*.md', { eager: true });
    const components: ComponentMeta[] = Object.entries(modules).map(([path, module]) => {
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        console.log(module)
        return {
            slug,
            ...module.metadata
        };
    });

    return components
}