import pool from "./client";

const shutdown = async () => {
  try {
    await pool.end();
    console.log("Pool has ended");
  } catch (err) {
    console.error("Error during pool shutdown", err);
  }
};

process.on("SIGINT", () => {
  console.log("SIGINT signal received.");
  shutdown().then(() => process.exit(0));
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  shutdown().then(() => process.exit(0));
});
