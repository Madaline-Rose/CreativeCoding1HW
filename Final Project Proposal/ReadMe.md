Proposal: 
    I love movies and knew I wanted my prokect based arround it. I wanted to challenge myself though. I have already done a movie trivia and short interactive stories (simplistic yes, but still). While searching around for inspiration I came across AR movie posters. ALthough not huge yet I could find some examples. Which lead me to my idea, a digital interactive movie poster! When you click on certain objects it might spin, or make a sound. 

Inspiration:
- I saw on Instagram these people specialize in AR/VR/IRl
    - https://www.instagram.com/thesunkenblimp/reel/DHqhBrPudQ5/?api=%E5%87%AF%E6%97%B6.%E5%B0%8A%E9%BE%99%E4%BA%BA%E7%94%9F%E5%B0%B1%E6%98%AF%E5%8D%9A%E3%80%90%E9%97%AE%EF%BC%9AWS99.ORG%E3%80%91.kfpq&hl=zh-cn 
    - This doesn't have any relation to the design I want to to do but I still wanted to include it because it was the start of the idea

- A website mentioning AR movie poster
    - https://www.nxtinteractive.sg/blog/ar-movie-posters-in-cinemas 
    - Same as the point above, not what I will be doing but the start of my inspo

- Interactive posters/books
    - I don't have specific sources besides what I see when i put the prompt in Pintrest

- Cube Escape video game
    - I want the concept to be similar to a point and click game using 2D elements
    - Cube escape is just one example

Challenges I Expect
- Making sure only the area/object that is clicked does an action
- Cursor tracker (like when hoovering over an object it enlarges a little to show it is interactable)
- I would also like to use sound but I will need to learn how
- Inserting oustide sources of images/stickers
- getting the images to match the position same as the one I created in Canvas

Work Plan
- April 29th-30th
    - In p5.js create poster elements (background, colors, text)
    - add images or placholders (what I want to be interactive)
    - nothing is interactable just visual

- May 1st-2nd
    - Work on adding interactivity (sounds, hover, etc)

- May 3rd-4th
    - Polish visual design and add finishing effects
    - possibly continue to add interactive parts

- May 5th
    - Double check everything works
    - Make sure my read me is up to date

What I have done so far:
- I have done research into the type of project 
- Chose movie (Treasure Planet)
- Made concept poster in Canvas (not set but main idea)
- Took some notes of what I wanted to make interactable 
- I UPLOADED SEPERATE FILE FROM CANVAS REFERENCE I CREATED

--------------------------------------------------------------
I tried doumenting everything but there was of course certain things I didn't mention that were a part of the process of fixing the overall issue (and sometimes I issues with those small things to fix the bigger thing). For example, learning how to download a song file, using photoshop, or the program not working becuase of not putting a line of code within the right brakets, and so on.. 

*All that is listed below was documented in how things occured. So at somepoints I write about something being easy or I am going to be doing it a certain way and then later it changes. 

Placeholders
- When starting this project, I created the base first. I used placeholders before actually putting in the content. Of course, I didn’t do this perfectly, and after starting to insert content, I had to make changes (either forgot something or discovered a better way to do so)

Let vs Var
- Had to learn the difference and understand which works best for me
- Var uses function scope
    - Hosting ability, meaning the var determined at the start is used as a whole for the setup (it calls upon/hosts the var)
- Let uses block scope
    - Less prone to error
    - Let's you determine a variable more specifically (within a block aka {})
- Final decision: Try out, let in hopes I can avoid accidental bugs or other issues with declaring variables

Visbility
- I needed the quote not to show until it was hovered over
- I discovered I could create a let function to set its visibility to false, telling the function to start by making the quote invisible until hovered on 

Inserting external files
- I am using external files, but wasn’t sure how to add them 
- At first, I thought I would call upon them in setup, but while researching adding external files, I came across preload {}. This would ensure my external files would load properly before loading in the setup {}
- Quickly realized I did not want to insert each assey individually, especially since some elements I didn’t have files for and I thought it would take too much time at the moment to create them -instead decided to create just the background in Canva, download it, and create it as an insert for my background and put the interactable elements over top of it. (which i ended up changining later on)


Stars
- I almost didn’t add the twinkling stars because I thought it would be too difficult to figure out, on my own, probably, but the p5.js web editor had sections specifically on this!
- Still wasn’t easy, as it was using things I didn’t understand (push and arrays, for example)
- I also looked up videos and saw that I could change brightness and something called delta
- Actually, now that I look back at this, there were many tutorials, yes, but filled with many different variations and terminology I didn’t know, which made it confusing haha

Mouse pressing
- This was an unexpected challenge
- Mostly, it was trying to figure out the dimensions

Major Problem #1
- The program would run on p5 web editor, but not when I tried to pull it up through the file explorer
- Thought my sound file was the issue, tried different solutions, no change
- Turns out, with the preload function, I will only be able to see my creation by going to the live site (which did work)

Major Problem #2
- Placing my extra images on top of my background and positioning them. 
- Although I cut out images for Jim, the ship, and morph, they were still on a transparent background, which was the same size as my official background
- Meaning changing the image's size was doing nothing, or extremely time-consuming
- Decided it would be easier to make Morph the only unattached image asset because I want him to move around
- To create the sort of hit boxes, I went to p5 web editor and just inserted the background PNG and used a code to track the location of the mouse
- Found the coordinates and inserted them into my GitHub program

Major Problem #3
- Sound was not playing
- I made sure all file paths were correct, even deleted, reuploaded, and renamed some files
- Turns out I needed to add a sound library from p5 in my HTML index

Minor Problem
- My stars were not twinkly enough
- There were many different numbers I could edit to change the effect, so it took a while to get the desired effect
- I thought mostly I just had to change the delta, but what helped most was changing the numbers in this line of code (the lowest and brightest the star would switch from)/: star.brightness = constrain(star.brightness, 20, 255);