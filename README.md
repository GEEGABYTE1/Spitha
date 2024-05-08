<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GEEGA/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Spitha</h3>

  <p align="center">
    A React Component Booster to Speed Rendering.
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



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About Spitha

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Spitha is React Component natively built in Typescript that does most of its work on the backend. It boosts rendering time of components by over 40% with improved Batching, Memoization, and Latency Update Technqiues. The component renders native data within 0.15 miliseconds and components within 0.12 miliseconds compared to the average React Component rendering times of 0.3 miliseconds. This is especially significant for applications that query and render API data and extensive visuals like graph networks. 

For rendering native data, Spitha works exactly like any React Component. It can accept props, API calls, and etc, but with improved efficiency!

Similarly, for rendering components (i.e., Chakra Styling), just wrap it around a Spitha Component, and your React App will be optimized - it's that simple.

Spitha is available for both native React Frameworks as well as Frameworks using Typescript to allow all types of applications to be optimized. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Efficient Rendering Count

Spitha has improved State Management where it can verify if API data is already fetched or not. It fetches once per render unless stated other wise the `fetchData` prop. This in-turn means that while the user may call the API fetch function multiple times on React, Spitha will run it only once. However, to ensure the data rendered is up-to-date, Spitha runs an Asynchronous Loading protocol that calls APIs when the user is not looking at the component (i.e., scrolled down is not indirectly looking at the component). 

There has also been an improved Memoization technique employed in Spitha. It ensures the same callback instance is reused across renders and prevents unnecessary re-creation of the function. 

Spitha can also be customizable in how it can accept rendering. There is a trigger prop which represents a threshold. This threshold represents the distance the user has to be away from the component for it re-render. Such an Example can be viewed in the <a href="#readme-top">Examples Section</a>.




<!-- GETTING STARTED -->
## Getting Started

To start using Spitha, follow these 3 steps.

### Prerequisites

Setup your React Framework.
  ```sh
  npx create-next-app IloveSpitha --typescript
  ```

### Installation

After you have setup your project, make sure you have installed the `spitha` library.

1. Go to your React Configuration file and ensure you have [webpack](https://webpack.js.org/guides/typescript/) installed. If you're having errors with typescript, I recommend looking at this Stack Overflow [Post](https://stackoverflow.com/questions/64592611/webpack-is-not-failing-on-typescript-error) for guidance.
   ```typescript
   // next.config.mjs
   /** @type {import('next').NextConfig} */
        const nextConfig = {
        reactStrictMode: true,
        transpilePackages: ['spitha']
        };

        export default nextConfig;
   ```
3. Install the Spitha Package
   ```sh
   yarn install spitha
   ```
4. Import Spitha to your Component file
   ```typescript
   //index.tsx 
   //....other modules
   import Spitha from 'spitha'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


type MyComponentProps = {
    fetchData: () => Promise<any>;
    initialData?: any[];
    threshold?: number;
    children?: React.ReactNode; 
    style?: React.CSSProperties;
}
<!-- USAGE EXAMPLES -->
## Usage

Spitha does come with a few props to customize the rendering performance. By default, it is set to maximize the performance, but the user may choose to send in props, apply css-styling, etc.

| Spitha Props | Value| 
| -------- | -------- | 
| `fetchData`  | Callback Function: `Promise<any>`  | 
| `initialData?` | `any[]` (optional) | 
| `threshold?` | `number` (optional) | 
| `children?` | React Object: `React.ReactNode` (optional) | 
| `style?` | React Object: `React.CSSProperties` (optional) | 




Here are a few examples on how to use Spitha. Do note that these are basic implementations, and Spitha may work for most React applications.

### Basic Data Implementation
    ```typescript
    <div>
        <WelcomeComponent> Welcome to Spitha!</WelcomeComponent>
        <Text>React just got Faster!!!</Text>
        <h1>{`Test Component ${i + 1}`}</h1>
        <a href={`https://example.com/${i + 1}`}>Visit Test Component made with{i + 1}</a>
        <img src="image.jpg" alt="Image" />;
    </div>           
    ```

### ChakraUI Component Rendering with Spitha
    ```typescript
    import { Text } from "@chakra-ui/react";
    import { Spitha } from "spitha";

    export default function Home() {
    return (
        <div>
        <Spitha fetchData={() => Promise.resolve()}>
            <div>
            <Text fontSize='6xl'>React just got faster!!!</Text>
            <Text>Yayyyyyyyyyy</Text>
            </div>
        </Spitha>
        </div>
    );
    }
    ```

### Changing Threshold 
```typescript
    <Spitha fetchData={() => Promise.resolve(['initialData'])} threshold={0.4} style={{ color: `#${i}${i}${i}` }}>
      <h1>{`Test Component ${i + 1}`}</h1>
      <a href={`https://example.com/${i + 1}`}>Visit Test Component {i + 1}</a>
      <img src="image.jpg" alt="Image" />;
    </Spitha>

```
Here, the `threshold` property is set to `0.4` which means Spitha will re-render when the user is 40% away from the component. Note that there has also a prop sent in the form of a promise `initialData` as a string.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jaival Patel - [@patjaival](https://twitter.com/patjaival) | 
Spitha: [https://github.com/GEEGABYTE1/Spitha](https://github.com/GEEGABYTE1/Spitha)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/GEEGABYTE1/Spitha.svg?style=for-the-badge
[contributors-url]: https://github.com/GEEGABYTE1/Spitha/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GEEGABYTE1/Spitha.svg?style=for-the-badge
[forks-url]: https://github.com/GEEGABYTE1/Spitha/network/members
[stars-shield]: https://img.shields.io/github/stars/GEEGABYTE1/Spitha.svg?style=for-the-badge
[stars-url]: https://github.com/GEEGABYTE1/Spitha/stargazers
[issues-shield]: https://img.shields.io/github/issues/GEEGABYTE1/Spitha.svg?style=for-the-badge
[issues-url]: https://github.com/GEEGABYTE1/Spitha/issues
[license-shield]: https://img.shields.io/github/license/GEEGABYTE1/Spitha.svg?style=for-the-badge
[license-url]: https://github.com/GEEGABYTE1/Spitha/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jaivalpatel/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 