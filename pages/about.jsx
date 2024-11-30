const AboutPage = () => {
  return (
    <>
      <h3>
        I'm a developer interested in current web and backend technologies. I'm
        working with React and Next.js to create scalable apps and learning
        Golang for backend programming. On the systems programming side, I'm
        learning Rust and delving into how things function behind the scenes.
        I'm a strong supporter of open-source and Unix-like systems, which moved
        me to work with Docker—creating stable, containerized environments is
        incredibly rewarding. I'm always intrigued by the latest technological
        advancements and enjoy learning, exploring, and contributing to the
        community as I progress.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
