const languageData = {
  JavaScript: {
    extension: "js",
    goal: "Build interactive web apps with variables, functions, and async logic.",
    starter: `// JavaScript starter\nfunction greet(name) {\n  return \`Hello, ${name}!\`;\n}\n\nconsole.log(greet("Smooth Coder"));\n`
  },
  Python: {
    extension: "py",
    goal: "Learn clear syntax, data structures, and automation workflows.",
    starter: `# Python starter\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Smooth Coder"))\n`
  },
  Java: {
    extension: "java",
    goal: "Master object-oriented fundamentals and enterprise-style architecture.",
    starter: `// Java starter\nclass Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Smooth Coder!");\n  }\n}\n`
  },
  "C++": {
    extension: "cpp",
    goal: "Practice performance-focused programming and systems concepts.",
    starter: `// C++ starter\n#include <iostream>\n\nint main() {\n  std::cout << "Hello, Smooth Coder!" << std::endl;\n  return 0;\n}\n`
  },
  Rust: {
    extension: "rs",
    goal: "Write fast, memory-safe programs with ownership and borrowing.",
    starter: `// Rust starter\nfn main() {\n  println!("Hello, Smooth Coder!");\n}\n`
  },
  Go: {
    extension: "go",
    goal: "Create reliable back-end services with simple, concurrent code.",
    starter: `// Go starter\npackage main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, Smooth Coder!")\n}\n`
  }
};

const languageSelect = document.querySelector("#languageSelect");
const languageTitle = document.querySelector("#languageTitle");
const languageGoal = document.querySelector("#languageGoal");
const editor = document.querySelector("#editor");
const copyBtn = document.querySelector("#copyBtn");
const downloadBtn = document.querySelector("#downloadBtn");

Object.keys(languageData).forEach((language) => {
  const option = document.createElement("option");
  option.value = language;
  option.textContent = language;
  languageSelect.append(option);
});

const setLanguage = (language) => {
  const data = languageData[language];
  languageTitle.textContent = `${language} Learning Goals`;
  languageGoal.textContent = data.goal;
  editor.value = data.starter;
};

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(editor.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Code";
  }, 1200);
});

downloadBtn.addEventListener("click", () => {
  const chosen = languageSelect.value;
  const blob = new Blob([editor.value], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `smooth-coding-notes.${languageData[chosen].extension}`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
});

setLanguage("JavaScript");
