import React from "react";

const Oops = () => {
  return (
    <div className="whitespace-pre-line text-xl ">
      <h3 id="modern-development-uses-frameworks-that-are-built-on-top-of-not-one-but-two-or-more-frameworks-">
        Modern development uses frameworks that are built on top of not one but two or more frameworks.
      </h3><br></br>
        <img className="rounded-xl w-full" src="https://theaquariumguide.com/wp-content/uploads/2021/10/image-25.jpeg" alt="Stacked Turtles" />
      <br></br>
      <p><strong>This website is a perfect example </strong><em>(this post is from an older site).</em></p>
      <p><br></br>
        It uses <strong>Hextra,</strong> which is a flavor <strong>Hugo, Tailwind, and NextJS.</strong> Tailwind and Next are flavors of <strong>CSS</strong> and <strong>React</strong> (a flavor of <strong>Javascript</strong>.) Hugo itself is a flavor of <strong>Go.</strong> The specific file for <strong>this blog post</strong> is in <strong>Markdown</strong>, which is interpreted by a <strong>Goldmark</strong> flavor of markdown, read by Go and assembled with many other disparate files to create <strong>this single page</strong>.
      </p><br></br>
      <p>
        <strong>This framework analyzes the config files and content files</strong> on a cloud server and then delivers a <strong>translated HTML/CSS/Javascript package</strong> to the end user. <strong>Each step is converted to machine code, specific to each OS/Processor combo</strong> in order to <strong>actually run</strong> the program on the computer you are using.
      </p><br></br>
      <p>It&#39;s pretty normal for frontend, but we often forget how many <strong>moving pieces</strong> there are.
      </p><br></br>
      <p>
        In my personal opinion, this is due to a lot of factors, two big ones being that <strong>computer logic is essentially real time mathematics,</strong> and that mathematics operates using <strong>discrete transformations,</strong> which is very similar to what computer software does on every level. The second factor is <strong>the combination of physical entropy and human civilization.</strong> Realistically it&#39;s not possible to get everyone on the planet to <strong>lockstep into best practices,</strong> needs day to day and city to city are completely different, and <strong>things are constantly falling apart.</strong> So you end up with a bunch of <strong>differing interests slapped together, using what previous available parts</strong> they can until the entire system needs to be reinvented. Humbly, I think <strong>this is intractible</strong> and a good reason to learn to work between paradigms rather than <strong>wishing for a universal one.</strong>
      </p><br></br>
      <p>
        I call this <strong>&quot;The Law of Specificity.&quot;</strong> It just means that everything that is happening is specific, therefore there is no generalizeable solution. It&#39;s similar philosophically to <a href="https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems">Gödel&#39;s Incompleteness Theorems.</a>
      </p><br></br>
      <h3 id="it-s-not-that-_-you-can-never-know-anything-_-it-s-just-that-_-your-attempt-to-know-one-thing-will-never-let-you-know-everything-_">
        It&#39;s not that <em>&quot;you can never know anything.&quot;</em> It&#39;s just that <em>&quot;your attempt to know one thing will never let you know everything.&quot;</em>
      </h3><br></br>
      <p>
        <strong>Frameworks make most development easier,</strong> but not all. <strong>Well treaded concepts</strong> and included edge cases are extremely easy to execute. And then <strong>you break the paradigm by</strong> pushing it forward, <strong>asking for something it wasn&#39;t built to do.</strong>
      </p><br></br>
      <p>
        On another site, I tried to use an <strong>SVG as a button</strong> in NextJS. <strong>Next handles the click</strong> itself. <strong>Tailwind handles the SVG.</strong> However Next doesn&#39;t consider an SVG a button, so you have to write custom code not in Next, but in <strong>React, ported into Next to send a signal from the child SVG</strong> to it&#39;s parent container to say &quot;I&#39;ve been clicked.&quot; This should be relatively easy. In <strong>Tailwind, which handles the parent and child CSS objects,</strong> you can have a parent communicate to a child that something has happened. However, because of <strong>limitations in CSS,</strong> which Tailwind is built on, <strong>you can&#39;t</strong> do the reverse! So because of Next and CSS&#39;s limitations <strong>there&#39;s no clear and easy way</strong> to have custom behavior around clicking on an SVG. Luckily, <strong>everyone has run into this problem,</strong> so there are many workarounds. In fact, <strong>there are multiple libraries/paradigms you can install on top of NextJS to do this exact thing.</strong>
      </p><br></br>
      <p>
        When you <strong>break a paradigm,</strong> you have to figure out <strong>which layers</strong> you’re working between. You also want a <strong>good sampling of the solutions</strong> out there. Paradigms are really beautiful gated communities. When you’re working inside them, things flow pretty seamlessly. But once you get into custom functionality, the complexity can cause a lot of unintended consequences. Almost everything you ever build will require custom functionality. The irony is that the paradigms you use will never quite include what you need, but if you go and build your own, you will just recreate the same issue. Ironically as well, your hacked together solution ends up being a patch to the system that helps other users move through the same issue with more ease. <strong>It’s a feature, not a bug.</strong>
      </p><br></br>
      <p>It’s nice to know <strong>what part of the matrix you’re tinkering with,</strong> and also why people made this or that “arbitrary” decision. In the case of my SVG nightmare, I wanted to “quickly just do this one thing.” Which turned into a week of running into walls, and eventually settling for the thing I was avoiding, which was installing and using the SVG library everyone kept recommending.
      </p><br></br>
      <p><strong>It is really, really easy to get lost</strong> reading the wrong documentation because you didn’t know it couldn’t do something, and there’s no obvious place to find it.
      </p><br></br>
      <p><strong>If you want to navigate the learning process,</strong> it’s super helpful to understand <strong>which framework</strong> you’re thinking in at the moment, what are its limitations, and where you would go next. It’s also really, really important to understand the syntax of the framework and a bit of what it’s doing under the hood. <strong>A single block of Next code can involve Typscript, HTML, Tailwind arguments, and React/Next/JS code.</strong>   Knowing which is which goes lightyears towards helping you figure out which documentation file to open when problem solving.
      </p><br></br>
      <p><strong>Good luck!</strong></p>
    </div>
  );
};

export default Oops;
