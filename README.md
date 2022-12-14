# Pixiv Bookmark Calculator

![Preview](public/preview.png)
Simple site to calculate the engagement rate for an artwork on Pixiv.

[Japanese site](https://emhng.github.io/pixiv-bkmk-calc/) || [English site](https://emhng.github.io/pixiv-bkmk-calc/en)

## Running Locally

If you'd like to run the calculator locally:

1. Download the repo by clicking Code -> Download Zip
2. Unzip the folder and then using your IDE of choice (i.e. VSCode), open the folder
3. Run the following command

```
npm install
```

4. Replace the code inside of next.config.js with the following:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
```

5. Then run the following command:

```javascript
npm run dev
```

The site should now be accessible from localhost:3000
