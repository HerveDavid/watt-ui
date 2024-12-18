export async function load({ params }) {

  // Load component markdown
  const file = await import(`@/components/${params.slug}.md?.raw`);

  return {
    component: file.default,
  };

}