import { appendFile, readFile, writeFile, mkdir } from "fs/promises";

// Read file
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};
// read_file('sample.txt')

// Create file
const create_file = async (fileName, content) => {
  await writeFile(fileName, content);
  console.log("file create successfully ");
};

// create_file("App.jsx ", "this is a react file");

// add content to the file
const append_file = async (fileName, content) => {
  await appendFile(fileName, content);
  console.log("extra content added successfully");
};

// append_file(
//   "App.jsx",
//   "this is the extra shit that im adding at the end of the file",
// );

// create folder or directory

const create_dir = async (dir) => {
  await mkdir(dir, { recursive: true });
};
// create_dir("components");
create_dir("src/py");
