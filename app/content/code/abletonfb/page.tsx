'use client'
import Image from 'next/image';
const AbletonFB = () => {
  return (
<>
<p>Code: <a href="https://github.com/martin473/AbletonFileBrowserV2/blob/main/widget.py">https://github.com/martin473/AbletonFileBrowserV2/blob/main/widget.py</a></p><br></br>
<p>Figma design: <a href="https://www.figma.com/design/V37lQMvwPtWmxvOZyUFEef/UI-Design-Ableton-File-Browser?node-id=1-2938">https://www.figma.com/design/V37lQMvwPtWmxvOZyUFEef/UI-Design-Ableton-File-Browser?node-id=1-2938</a></p><br></br>
<p><Image className="rounded-xl w-full" src="/blogimages/afbdesign.png" width={500} 
        height={300} alt="image"/></p><br></br>
<p>Difference from v1:</p><br></br>
<p>Used WYSIWYG Editor QT Creator instead of PyQt6 for GUI Development. QT Creator uses Pyside6 which is functionally similar</p><br></br>
<p>What it uses:</p><br></br>
<p>Abletoolz for parsing ableton files and directory trees. The functionality used in abletoolz currently is code I handwrote in v1, so nothing super special about the directory parsing. But Abletoolz is a robust GPL lisence software that can detect broken plugins, broken files, and potentially do automated repair. My goal to add more functionality and make this more of a ableton file multitool but I solved 99% of the problems this software was built for by changing the way I used Ableton.</p><br></br>
<p>What this software does:</p><br></br>
<p>Select a folder, search for all .als files. Open files directly from this browser. Create a database of every file. Search, sort, favorite, tag and more. Allows for functionality ableton 11 and earlier versions did not have.</p><br></br>
<p><Image className="rounded-xl w-full" src="/blogimages/afbver1.png" width={500} 
        height={300} alt="File browser version 1"/><br></br>
<Image className="rounded-xl w-full" src="/blogimages/afbver1-2.png" width={500} 
        height={300} alt="File browser version 1"/></p><br></br>
<p>Why it was deprecated:</p><br></br>
<p>SDLC for multiplatform consumer software with python and QT Creator is cumbersome. Flutter and a few other modern code paradigms are better suited for this. Ableton Live 12 includes tagging and a few other features. Most of the functionality in this software can be directly replicated or hacked together out of those features. Future development for this type of software would make more sense as a direct plugin or addon to Ableton.</p><br></br>
<p>Bad learning curve:</p><br></br>
<p>Build process with python was also frustrating. There were multiple python libraries to build .exe and .dmg files. Mac also has a gap between M1/M2 (intel) and M4 (arm) processors. Because of that, the binaries in some supporting python libraries, specifically those within pyside6 which is a core part of QT Creator were &quot;thin&quot; binaries, which means they only supported the M1/M2 or M4 architecture, and in order to properly build them you had to find the proper python wheel for the other architectures using a different set of python libraries and terminal commands, and then use a third software tool to wrap them together into a single binary to get a &quot;universal&quot; build which would work on all mac architectures. This is, by all means, reasonable at a larger scale if I were a multiperson organization with an SDLC, a project manager or team meetings, and a customer base, but to just get something off the ground and into users hands, it was overkill. It was not a great way to prototype a crossplatform application.</p><br></br>
<p>Why I probably won&#39;t use Python as a frontend again:</p><br></br>
<p>I&#39;m about to Gold Stake the final Balatro deck and am halfway through Factorio Space Age. I don&#39;t mind learning stuff and getting deep into complexity. But I was not a huge fan of the QT Creator documentation, workflow, and finally the Python build process. Pyside6 is a bridge between python and qt. Qt works with other languages. I would assume languages like C++ have a little more robust cross platform build workflows. I also got the feeling that the qt documentation both for qt creator and qt itself were more robust for other languages. For some reason it was difficult to fully wrap my head around the paradigms the software wanted me to use, and it was often not well laid out (for my learning style) within the documentation. I tried to use QT Creator as a WYSIWYG editor to speed up workflow, hopefully cutting a month down to a week of dev time to get the Figma design shown above. Instead it ended up turning into 2 months of setup and learning new paradigms just to get back to where I started coding it by hand. I also felt the end product was ugly. I am a pro Adobe Suite user, and it was difficult work to slap together a passable UI in QT Creator. I can update and move faster now, but I&#39;ve deprecated to project and decided not to use this software workflow in the future. I&#39;m leaning towards Next.js or similar typescript frontends that can implement material 3 UI Kits (as they also have wysiwyg editors that work in browser, with frontend paradigms built by Google designers) or Flutter which is intended to be similar and cross platform. So potentially JS for web and Flutter for applications.</p><br></br>
<p>For the language python itself, PyQt6 and Pyside6 seem to be the most advanced ui kits out there and they were a serious struggle to use for a very minimal output. My philosophy on code is that it&#39;s supposed to make stuff easier not harder. Python makes AI, Big Data, stats, and other math/logic stuff super fun. Creating GUIs with it is miserable.</p><br></br>
<p>Future suggestions:</p><br></br>
<p>It would be nice if ableton had a plugin environment other than max msp. Parsing ableton through max&#39;s live tree is less than ideal and doesn&#39;t always provide the type of accessibility or overall look you want from a plugin.</p><br></br>
</>
  );
};

export default AbletonFB;