---
title: Oops! I'm 5 Paradigms Deep!
weight: -7
---
### Modern development uses frameworks that are built on top of not one but two or more frameworks.

<p align="center">
  <img src="https://theaquariumguide.com/wp-content/uploads/2021/10/image-25.jpeg" />
</p>

__This website is a perfect example.__

It uses __Hextra,__ which is a flavor __Hugo, Tailwind, and NextJS.__ Tailwind and Next are flavors of __CSS__ and __React__ (a flavor of __Javascript__.) Hugo itself is a flavor of __Go.__ The specific file for __this blog post__ is in __Markdown__, which is interpreted by a __Goldmark__ flavor of markdown, read by Go and assembled with many other disparate files to create __this single page__. 

__This framework analyzes the config files and content files__ on a cloud server and then delivers a __translated HTML/CSS/Javascript package__ to the end user. __Each step is converted to machine code, specific to each OS/Processor combo__ in order to __actually run__ the program on the computer you are using. 

It's pretty normal for frontend, but we often forget how many __moving pieces__ there are.

In my personal opinion, this is due to a lot of factors, two big ones being that __computer logic is essentially real time mathematics,__ and that mathematics operates using __discrete transformations,__ which is very similar to what computer software does on every level. The second factor is __the combination of physical entropy and human civilization.__ Realistically it's not possible to get everyone on the planet to __lockstep into best practices,__ needs day to day and city to city are completely different, and __things are constantly falling apart.__ So you end up with a bunch of __differing interests slapped together, using what previous available parts__ they can until the entire system needs to be reinvented. Humbly, I think __this is intractible__ and a good reason to learn to work between paradigms rather than __wishing for a universal one.__

I call this __"The Law of Specificity."__ It just means that everything that is happening is specific, therefore there is no generalizeable solution. It's similar philosophically to [Gödel's Incompleteness Theorems.](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems) 

### It's not that _"you can never know anything."_ It's just that _"your attempt to know one thing will never let you know everything."_

__Frameworks make most development easier,__ but not all. __Well treaded concepts__ and included edge cases are extremely easy to execute. And then __you break the paradigm by__ pushing it forward, __asking for something it wasn't built to do.__

On another site, I tried to use an __SVG as a button__ in NextJS. __Next handles the click__ itself. __Tailwind handles the SVG.__ However Next doesn't consider an SVG a button, so you have to write custom code not in Next, but in __React, ported into Next to send a signal from the child SVG__ to it's parent container to say "I've been clicked." This should be relatively easy. In __Tailwind, which handles the parent and child CSS objects,__ you can have a parent communicate to a child that something has happened. However, because of __limitations in CSS,__ which Tailwind is built on, __you can't__ do the reverse! So because of Next and CSS's limitations __there's no clear and easy way__ to have custom behavior around clicking on an SVG. Luckily, __everyone has run into this problem,__ so there are many workarounds. In fact, __there are multiple libraries/paradigms you can install on top of NextJS to do this exact thing.__

When you __break a paradigm,__ you have to figure out __which layers__ you're working between. You also want a __good sampling of the solutions__ out there. Paradigms are really beautiful __gated communities.__ When you're working inside them, things flow pretty seamlessly. But __once you get into custom functionality__, the complexity can cause a lot of __unintended consequences.__ Almost __everything__ you ever build will __require custom functionality.__ The irony is that the paradigms you use will __never quite include what you need,__ but if you go and build your own, you will just __recreate the same issue.__ Ironically as well, your hacked together __solution ends up being a patch__ to the system that helps other users move through the same issue with more ease. __It's a feature, not a bug.__

It's nice to know __what part of the matrix you're tinkering with, and also why people made this or that _"arbitrary"_ decision.__ In the case of my SVG nightmare, I wanted to _"quickly just do this one thing."_ Which turned into a week of running into walls, and eventually settling for the thing I was avoiding, which was installing and using the SVG library everyone kept recommending

__It is really, really easy to get lost__ reading the wrong documentation because you didn't know it couldn't do something, and there's no obvious place to find it.

__If you want to navigate the learning process,__ it's super helpful to understand __which framework__ you're thinking in at the moment, what are its __limitations,__ and __where you would go next.__ It's also really, really important to understand the __syntax__ of the framework and a bit of what it's doing __under the hood. A single block of Next code can involve Typscript, HTML, Tailwind arguments, and React/Next/JS code.__ Knowing which is which goes lightyears towards helping you figure out which documentation file to open when problem solving.

### Good luck!
