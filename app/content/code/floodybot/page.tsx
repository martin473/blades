'use client'
import Image from 'next/image';
const FloodyBot = () => {
  return (
    <div className="whitespace-pre-line text-xl ">
      <p>Goal: </p><br></br>
      <p>Will your house flood due to climate change? Will it be covered under insurance? Put your address into FloodyBot to get a 3D map of flood zones and insurance coverage zones for your home address.
      </p><br></br>
      <p>
        <Image src="/blogimages/climatecentral.png" 
        alt="Climate Central - Small hurricane surge in 2070" 
        width={1000} 
        height={600}
        className="rounded-xl w-full" />
      </p><br></br>
      <p>Why: </p><br></br>
      <p>
        Around 2019, a prominent news org released an article warning that home insurance providers were not planning to increase coverage to match predicted climate crises. Specifically flood and fire. Around the same time, predictive flood maps for climate coverage were starting to get built. It didn&#39;t exist in a robust form then, but{' '}
        <a href="https://coastal.climatecentral.org/">climate central now has a great tool</a>. I wanted to make this more visual, creating a 3d map that people could explore. I&#39;ve always felt visceral tools let people experience more abstract concepts in an approachable way.{' '}
        <a href="https://www.rayshader.com/">Rayshader</a> looked like a good library to work with.
      </p><br></br>
      <p>
        <Image className="rounded-xl w-full"
        priority={true}
        src="/blogimages/smallfeature.png"
        alt="Rayshader" 
        width={1000} 
        height={600} />
      </p><br></br>
      
      <p>
        <a href="https://ecori.org/home-insurance-costs-rise-due-to-demand-costs-of-rebuilding/">This article</a> goes in depth on Rhode Island&#39;s current situation regarding flood insurance.
      </p><br></br>
      <p>Motivation: </p><br></br>
      <p>
        I thought it would be interesting to have a Twitter bot, in 2020, where you could tweet your address and get a shareable picture of the flood situation. This would help not only with looking at a home you own, but also one you plan to buy. This was pre-housing-crisis. It seems like many sensible issues for new home owners are no longer a concern. The concept also needed some work to answer questions like &quot;Would a user want to publicly tweet their home address and in return get a public 3D picture of their home.&quot; Probably not. Either way the first step was to build it.
      </p><br></br>
      <p>Final Tech Stack:</p><br></br>
      <p>This used R, the R rayshader library, and a Windows AWS instance.</p>
      <p>Process:</p><br></br>
      <p>There were a lot of things I was unaware of at the time of making this. </p>
      <p>
        A big early barrier was getting access to the Twitter API. I had used a handful of APIs at that point and the biggest barrier for new devs is always access and rate limiting. As far as APIs are concerned, the world is not your oyster, you need to get into the club, and you need to behave.
      </p><br></br>
      <p>
        I ended up applying for API access multiple times and by the final stages of this project never got it. One of the reasons was that Twitter at the time was constantly improving spam monitoring and there was some data scandal during that time that caused them to tighten up token access. It didn&#39;t prevent me from ever being elligible, it just lengthed the wait for access beyond the scope of the project.
      </p><br></br>
      <p>
        Another early barrier was not understanding gaps in documentation and reality and how to read error codes in a more comprehensive way. I initially tried to run this on linux. The errors I kept getting were that XYZ library couldn&#39;t be installed. So I ended up installing the dependencies manually via cli 1 by 1 until I hit one that wouldn&#39;t work. I went into the documentation and I saw it was Windows only. Now I would just restructure the project in some way, but I kept going down the rabbit hole of trying to get it to work on Linux. Eventually I reached out to the Rayshader dev on Twitter DMs and he said that it was a Windows only R library. I either missed that in the documentation or it wasn&#39;t there. Either way it was quite a lot of time wasted. A big reason for this issue was that my home laptop was running Windows 10, so it worked fine on my local PC, and then encountered &quot;crazy&quot; errors on my cloud machine. Obviously you can&#39;t run an exe on linux, but I wasn&#39;t aware that even Python and R libraries require not just OS specific, but processor specific releases. This was how I learned that.
      </p><br></br>
      <p>
        I then researched cheap AWS instances, spun up a very small and cheap $10/mo AWS Windows instance. Installed and ran the software and presto it spit out this image on the webserver.
      </p><br></br>
      <p>
        <Image className="rounded-xl w-full" src="/blogimages/floodyrender.jpeg" 
        alt="FloodyBot image output" 
        width={500} 
        height={300} 
        />
      </p>
      <p className="text-sm"><em>FloodyBoy image output.</em></p><br></br>
      <p>There was a long way to go and I basically did not find this project fun any more, and the general public did not seem to care too much about it so I dropped it.</p><br></br>
      <p>Unfortunately there&#39;s no repository</p><br></br>
      <p>The code:</p><br></br>
      <p>
        Unfortunately I was still a Git newbie. I was coding on my laptop and then copying and pasting the files from my code editor locally to my code editor in my Digital Ocean/AWS code editor window. Then when I was done with the projects I deleted the instances and a few years later my laptop bit the dust.
      </p><br></br>
      <p>
        Generally speaking, the AWS instance ran some Apache or similar webserver and served from the default webaddress AWS gave it. It had the necessary R libr
      </p><br></br>
    </div>
  );
};

export default FloodyBot;