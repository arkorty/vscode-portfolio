import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Arkaprabha Chakraborty" />
      <meta
        name="keywords"
        content="arkaprabha chakraborty, arkaprabha, chakraborty, web developer portfolio, arkaprabha web developer, arkaprabha developer, full stack, arkaprabha chakraborty portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Arkaprabha's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta
        property="og:image"
        content="https://vscode.webark.in/og-image.jpg"
      />
      <meta property="og:url" content="https://vscode.webark.in" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Arkaprabha Chakraborty",
};
