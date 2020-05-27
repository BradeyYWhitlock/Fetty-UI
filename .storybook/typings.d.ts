declare module '*.md' {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

// declare module '*.mdx' {
//   let MDXComponent: (props: any) => JSX.Element
//   export default MDXComponent
// }

declare module '@storybook/addon-docs/blocks';

declare module 'react-autosuggest';
declare module 'autosuggest-highlight/match';
declare module 'autosuggest-highlight/parse';