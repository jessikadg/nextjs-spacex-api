# SpaceX Launches Next.js + API

This is an assignment project built in June 2024, in React.js + Next.js 14 + Typescript. Deployed with AWS Amplify.
You can check out the project live at https://main.d1a38j5q5k3f3d.amplifyapp.com/launches/5eb87cdaffd86e000604b32b

## Assignment Requirements
Here were the requirements for the project:

1. 🛬 A landing page that displays a list of all the launches available in the API. Each
launch should be displayed with its patch, mission name, launch date, and details.
You can search by “rocket name” and you can also filter on the launches by “launch
date”, “launch success” and “upcoming”
2. 🗣 When a user clicks on a launch, a page should open displaying the main
information about that launch that is available with the API, such as the mission
name, launch date, details, and the rocket used for the launch. Also it mentions
who was the crew with additional information of the crew.
3. 🚀 On the launch detail page, the user should also be able to browse through the
payloads of the launch and view their details.
4. 🧠 The application should remember the state of the user after refreshing the page.
In other words, if the user is on a specific launch detail page, that page should be
saved so that the user is taken back to the same page after refreshing the page.
5. Add some tests


## Decisions and Development

For the sake of time some features were prioritised over others. Here is what this code base does cover:
<br/>
✅ All requirements 💯 <br/>
✅ Uses Server-Side Rendering for data fetching <br/>
✅ Uses Static Side Generation for client features such as React State<br/>
✅ Handles data with several data-nesting dimensions dynamically<br/>
✅ Reactive filtering upon typing/selecting<br/>
✅ Deployed on AWS Amplify<br/>
✅ Components structured in a re-usable way<br/>
✅ Some Design + Styling<br/>
<br/>
Some points that were de-prioritised for now / improvement points:
<br/>
❌ Not responsive - but you can check my responsiveness skills in my portfolio: https://jessthedev.netlify.app<br/>
❌ No Atomic Design Principles - but uses Reactive Components<br/>
❌ Limited tests<br/>
❌ No Search Engine Optimization<br/>
❌ Date parsing for display such as monment.js<br/>


## How to run it locally

Clone this repository and run

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
