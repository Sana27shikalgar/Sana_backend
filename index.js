import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config({
    path: "./.env",
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
app.on("error", (err) => {
    console.error("Server error:", err);
});

connectDB().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});