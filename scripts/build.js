import fs from "node:fs"
import path from "node:path"
import { marked } from "marked"
import { gfmHeadingId } from "marked-gfm-heading-id"

marked.use(gfmHeadingId())

const titles = {
  index: "Legal",
  tos: "Terms of Service",
  privacy: "Privacy Policy",
  cookies: "Cookies Policy",
}

const template = fs.readFileSync(path.join("src", "templates", "main.html"), {
  encoding: "utf8",
})

const IN_DIR = path.join("src", "docs")
const files = fs.readdirSync(IN_DIR).filter((name) => name.endsWith(".md"))

async function main() {
  for (const file of files) {
    const name = file.split(".")[0]
    console.log(`Creating ${name} page...`)
    const filePath = path.join(IN_DIR, file)
    const content = fs.readFileSync(filePath, { encoding: "utf8" })
    const html = await marked.parse(content)

    const pageTitle = titles[name] ?? name[0].toUpperCase() + name.slice(1)

    const withTemplate = template
      .replace("{{TITLE}}", pageTitle)
      .replace("{{CONTENT}}", html)

    const outDir = name === "index" ? "public" : path.join("public", name)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, "index.html"), withTemplate)
  }

  console.log("Done!")
}

main()
