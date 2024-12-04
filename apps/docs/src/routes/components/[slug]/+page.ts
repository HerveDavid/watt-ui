export async function load({ params }) {
  const component = await import(`@/components/${params.slug}.md`);

  return {
    component: component.default
  };
}