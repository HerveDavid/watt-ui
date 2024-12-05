export async function load({ params }) {

  // Load component markdown
  const component = await import(`@/components/${params.slug}.md`);

  return {
    component: component.default,
    metadata: component.metadata
  };

}

export const prerender = true;