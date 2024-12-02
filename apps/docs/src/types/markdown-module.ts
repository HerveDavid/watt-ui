import type { ComponentMeta } from "./component-meta";

export interface MarkdownModule {
    metadata: Omit<ComponentMeta, 'slug'>;
    default: unknown;
}