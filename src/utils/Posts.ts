import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export const sortByMyself = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort((a, b) => {
    if (
      a.frontmatter.order !== undefined &&
      b.frontmatter.order !== undefined
    ) {
      return a.frontmatter.order - b.frontmatter.order;
    }
    if (a.frontmatter.order !== undefined) {
      return -1;
    }
    if (b.frontmatter.order !== undefined) {
      return 1;
    }
    return (
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
    );
  });
};
