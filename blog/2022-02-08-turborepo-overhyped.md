---
slug: turborepo-overhyped
title: Is Turborepo overhyped?
description: What is Turborepo and why do we need it? Turoberpo is quite minimalistic and simple to use solution how to speed up pipeline in monorepo. 
authors: [sgranat]
image: "/img/blog/turborepo.png"
tags: [react, javascript, typescript, integration]
---


![Turborepo](/img/blog/turborepo.png)

Two months ago, I was looking for a solution how to speed up pipeline in our [monorepo](https://github.com/tolgee/tolgee-js). As an immediate answer I found basically two alternatives [Nx](https://nx.dev/) (from Google) and [Turborepo](https://turborepo.org/) as a new cool project from well known opensource author ([Jared Palmer](https://github.com/jaredpalmer)). I was immediately drawn towards Turborepo as it was really hyped everywhere. Also, it is quite minimalistic, simple to use and it looked like exact fit for our use-case. So I got into it.

<!--truncate-->

## What exactly is Turborepo and why do we need it?

Turborepo is a build system for monorepos (multiple projects in one repository). We use monorepo in Tolgee, because we have multiple SDKs for different frameworks as separate NPM packages and it is very convenient to test and release them together, so monorepo is an ideal fit.

As with every monorepo we struggle to keep our building and testing pipeline fast. Turborepo is designed for this. Simply put, it keeps a cache of previous builds for each individual project (workspace) and if nothing changed in that project, it will just use the cache instead of rebuilding. It also automatically detects dependencies between the projects so it knows that if the dependency of one project changed that project needs to be rebuilt too.

It can be also used for testing as you can only run tests in projects which are affected by changes and it treats standard output as part of a cache so even if some test don't run Turborepo will output cached logs, so you see all the test results every time.

It is also able to run multiple commands in parallel, which is ideal for development when you need to watch code changes and rebuild on the fly.

## Setting up

I was able to understand Turborepo docs quite quickly (as it's really short so far :D). It took me a bit of trial and error to set everything up correctly as I needed to wrap my head around how exactly the caching works. I recommend spending some time experimenting with changes in different projects and checking if it works correctly as it takes some time to wrap around your brain. However, in the end, it is very satisfying, when you see colorful label "FULL TURBO", when everything is taken from cache and no real build is necessary. 

One little caveat was that we are using lerna, which has it's own definition for workspaces, however Turborepo requires the definition to be in `package.json`, which causes issues with `npm install` command as npm now also supports workspaces, but is installing dependencies differently than we need. I didn't find a simple way how to get around this issue so at the end I use custom command for module installation, which first removes workspaces from root package.json, then performs all the installations with lerna and then returns the package.json to original state, not ideal but managable.

## Where the real issues started

During my experiments I've noticed that sometimes not all dependant projects are rebuild as they should be. I found already reported issue about it and amazingly the next day it was fixed. Wow. I wanned to upgrade to next version but wait ... that's weird some error appeared during an installation.

Hmm, I found another reported error - it seems like it's broken when you install it with npm (yarn and pnpm works), that's unfortunate 😔. Luckily it was fixed in about 4 hours, so now everything worked fine and I've prepared and tested everything and submitted it for a review. However, my colleague writes me back in two hours that the process it hitting his CPU running on 100% (one core) and his machine is constantly overheating even when he's in development mode and not making any changes to the code! Another issue (already existing on GitHub), Agh!!

Even when the issue was fixed the next day, I wasn't really that confident about Turborepo as even though it was in version 1.0.xx it seemed more like beta or alpha version. However, now everything worked so PR was merged.

A few hours later I've noticed a weird thing. All our available GitHub runners were busy and I was not able to run a new task. It turned out that when some build failed Turborepo didn't finish the process but it was stuck and ran forewer. I had to manually stop all CI pipelines and roll back the release as this was a major problem.

## Maybe I made a mistake

Hmm, seems like Turborepo is not in production-ready state. I was really pissed as I've already spent about 4 days with this and now I'm back where I was at the beginning. I've tried to switch to Nx, but compared to the Turborepo setup, everything was much more complicated - it has all the functions we need, but it's really blown and not elegant at all.

### Or not?

I've let everything as it was and let the PR open for one month. Now I've returned to it and Turborepo is in version 1.1.xx and everything seems to work as expected. Ok, our pipeline is much faster and we now have much more elegant way how to run dev mode locally. However I still better run our main release pipeline without any caching as I want to be sure that something is not getting cached when it shouldn't be as that really could be a big problem and I know I that Turborepo can't be 100% trusted.

## My conclusion

Turborepo is a really cool project. And it's not just cool, it's really necessary - there clearly was missing some tool like this as monorepos are more and more popular. Everyone was tweeting about using Turborepo is great and that it made his pipeline 10x faster, but nobody was mentioning these issues. I think that the hype around it caused me to use it prematurely and lose valuable time and in the and be bitter about it.

So, you know 🤷🏻‍♂️. Be careful about what is currently trending and don't let the shine blind you, when you are deciding what to use on production.