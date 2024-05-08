

<br />
<div align="center">
  <a href="https://spitha-frontend.vercel.app/">
    <img src="/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Spitha Testing</h3>

  <p align="center">
    Directory of Spitha Component Performance Testing.
    <br />
    <a href="https://github.com/GEEGABYTE1/Spitha"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">Homepage</a>
    ·
    <a href="https://github.com/GEEGABYTE1/Spitha/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/GEEGABYTE1/Spitha/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


# To run a test
```sh
yarn jest
```

This command must be ran in the root directory.

# To create markdown for outputs
```tsx
        // rest of testing code
        const markdown = [
            '# Rendering Times for Native Data of Normal Components vs Spitha',
            '| Component | Time (milliseconds) |',
            '|-----------|---------------------|'
          ];
          renderingData.forEach((data: { component: string; normalRenderingTime: string; myComponentRenderingTime: string; }) => {
            markdown.push(`| ${data.normalRenderingTime} | ${data.myComponentRenderingTime} |`);
          });
          markdown.push(`Average Percentage Increase: ${((componentsTime - myComponentsTime ) / (componentsTime)) * 100}`)
      
          fs.writeFileSync('NEW_FILE_NAME.md', markdown.join('\n'));
          console.log('Markdown file created with rendering times.');
        })
```

The output of will be written in `NEW_FILE_NAME.md` in the root directory and the format of a table.

# Results
The average performance boost as seen in the `testResults` are 40%. The test created sample regular React Components, and wrote the same component in a `Spitha` wrapper. The performance was evaluated based on rendering time.

