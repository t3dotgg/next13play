import styles from "./page.module.css";

export default async function Home() {
  const githubProfile = await (
    await fetch("https://api.github.com/users/vercel")
  ).json();
  console.log(githubProfile);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {githubProfile.name} has {githubProfile.followers} followers
        </h1>
      </main>
    </div>
  );
}
