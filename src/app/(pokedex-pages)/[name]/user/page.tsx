import styles from "../../page.module.css";

export default async function Home({ params }: { params: { name: string } }) {
  const githubProfile = await (
    await fetch("https://api.github.com/users/" + params.name)
  ).json();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{githubProfile.name}</h1>
        <h3>Company: {githubProfile.company}</h3>
      </main>
    </div>
  );
}
