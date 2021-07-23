# Index
1. [Purpose](#purpose)
2. [Functionality](#functionality)
3. [Target audience](#target-audience)
4. [Tech stack](#tech-stack)
5. [Dataflow Diagram](#dataflow-diagram)
6. [Application Architecture Diagram](#application-architecture-diagram)
7. [User Stories](#user-stories)
8. [Wireframes](#wireframes)
9. [Trello Progress](#trello-progress)

# Xplory
The final assessment for Brisbane Coder Academy, working in a team of 3 

# Purpose
- The purpose of our application is to showcase all the parks and parklands around an area of choice, in Australia.
We will be adding functions like whether or not it has restrooms, dog fence, shelter, lighting, and much more. It would include information about Accessibility, restroom, entry for dogs, location of the nearest cafes, exercise equipment and other facilities, Parking etc. The visitor will have all information regarding the park to make a decision before their visit. We aim to provide as much as information which would eventually help people to visit the Park stress-free. 

# Functionality
- The functionality of the application is to let users add pictures of the various parklands of the city. They will be able to rate other posts and locations  based on features, facilities, and conveniences in and around the park
- Google API will be the main key point for providing information on the location of the park which would enable users to locate parkland via postcode.
- Further, the user will be able to filter --
  - Search through postcode
  - Play equipment
  - Water park
  - Cafe which would be further filtered by their menu availability
  - Availability of exercise equipment,
  - Facility of car/scooter parking
  - Permission for pet entry/no entry
  - Availability of restrooms
  - Availability of parents room/ nappy change room
  - Shade or No shade
  - Accessibility for people with disabilities
  - Restroom
  - Showers
  - Availability of barbecue/cooking facility
  - Safety equipment
  - Fence around the park
  - Ease of public transport
  - Power/Electricity supply
  - Lighting
  - Phone charging facility
  - Internet access
  - Events by the council at the park   
- Users will have individual profiles which let them interact with other users. It would also enable them to add comments or further review what other users have posted to the app.
- Users can create their friend list, add/ remove friends which further permits them to see what their friends have posted or replied to other users.
- Users can toggle on or off being notified about their friends' activity on the app in regards to posting, commenting, and liking.
- Users can directly message other users whom they have added as a friend.
- User side functionality breakdown 
  - Login/Logout
  - Profile with picture
  - Create/Add information
  - Rate or evaluate Park facility
  - Upload a picture of the park
  - Add/Remove friends
  - Notification of friends post
  - Direct message to friends
- Application has an admin feature. The admin profiles will enable Admins to delete/filter comments Add/Remove users. It will also authenticate data provided by users. Admin roles will be able to scan the profiles and photos of users to confirm that the user is not breaching the code of conduct. Further, admins will have access to the post/reply of users they have made under the profiles.
- Admin side functionality breakdown
  - Login/Logout
  - Profile with picture
  - Create/Remove information
  - Add/remove users
  - Add/remove comments/posts
  - Direct message to all users
  - Notification or announcement
  - Add/remove/Authenticate data uploaded by the user


# Target audience

- Parents
- Young adults 
- Teens
- Dog Owners/Walkers
- Health enthusiasts 
- Caffeine enthusiast 
- Park Visitors
- Tourists 


# Tech stack

- MongoDB, Express, React, Node
- Google API
- Heroku 
- Cloudinary 

# Dataflow Diagram
![DFD](https://user-images.githubusercontent.com/72952429/126571742-85109679-c060-4200-a355-b83b09896c2b.JPG)

# Application Architecture Diagram
![application-architecture-diagram](https://user-images.githubusercontent.com/72952429/126722994-55c62725-4c8e-4efe-a140-b45cdd981939.JPG)


# User Stories

![userstory-asmaa](https://user-images.githubusercontent.com/72952429/126575566-6c4d946b-c9a8-406e-9c96-6f76fdcc6c6f.png)


I love to take my family out on picks, I want an easy way to find new places to take them so we can enjoy the fresh and new scenery together. 

As a young sporty teenager, I want to find convenient places to kick a footy with my mates. I need it to be big enough that we won't send the ball across the road or into someone's window.

I have four big huskies and need to find new parks to take them where I can let them off the leash and have them safely run around an enclosed environment. It would be great if the park was popular with other dogs so they can play together.

As A Football player,
I want to have enough room to kick a football and run around, I would also know if there is an exercise equipment so I can do a quick cardio session,
So I need to know there is a big oval with goals, water nearby if im running around and getting thirsty, and if im home late from school there will be lighting in the area.

As a dog owner,
I want to know if theres a facility around me to bring my dogs for a run, I would like a dog park. I work late some nights as well,
So I would like a good amount of room for my dog to run around and be in a fenced area with a few  ramps and jumps to practice. Also some lighting if its late and water for myself and my dog would be great. My dog runs and I take my bike, so some bike parking locally would be a major plus.

As a parent of 3 kids,
We are new to the area, and I need to know where a good parkland is nearby for my children, they are young and require them to have a fence around. They are kids that love water, so a water-park would be preferred. I have one kid with a disability and he has a wheel chair, so I require disabled parking and access with a wheel chair to the park area. As they are running around we would require water fountains and bathroom facilities with a shower.


# Wireframes
*Provide UX/UI design documentation(wireframes) that adequately show Agile methodology implementation.*

- For our wireframes, we used an application called Miro.
  It is a great app and users can work on the same project at the same time, and be able to download it later on in low quality mode for free for 3 instances. We found a lot of other applications not to be as easy to use and adequate for our needs.

## WireFrames Over View

![PlayPal_wireframes](https://user-images.githubusercontent.com/72953372/126585828-7f6e1790-28d6-40cb-a311-a55013ce90c8.png)



## Mobile

![mobile_wf1](https://user-images.githubusercontent.com/72953372/126584893-52787a21-309c-44d4-a90c-605439b506bb.png)
![mobile_wf2](https://user-images.githubusercontent.com/72953372/126584914-a135a29e-4a66-47bc-88b8-fe84197e57fa.png)


## Tablet

![desktop_wf1](https://user-images.githubusercontent.com/72953372/126584937-b418f8f5-ccb0-440b-85a0-f27feee24d8a.png)
![desktop_wf2](https://user-images.githubusercontent.com/72953372/126584949-d192e36d-872c-4c2e-8cd3-f116c87fbe72.png)
![desktop_wf3](https://user-images.githubusercontent.com/72953372/126584968-55ba182c-a720-448f-9d18-deb2918d3811.png)



## Desktop

![desktop_wf1](https://user-images.githubusercontent.com/72953372/126584758-4c9b9db5-d356-4cfd-9a15-a7922bd7c375.png)
![desktop_wf2](https://user-images.githubusercontent.com/72953372/126584815-6103b42f-df0a-4008-80e4-f3c1263734e8.png)
![desktop_wf3](https://user-images.githubusercontent.com/72953372/126584830-9db7c974-f0a3-47b3-abc7-a037ab37b077.png)


# Trello Progress
![trello-image-1](https://user-images.githubusercontent.com/72952429/126571883-d3a7ce6f-db4c-4e1e-88d2-3461b12fe622.png)

![trello-image-2](https://user-images.githubusercontent.com/72952429/126571884-f1c15b64-a09c-4ff0-8c43-78caa0137304.png)

![trello-image-3](https://user-images.githubusercontent.com/72952429/126571886-ab337482-6651-4e48-9acf-12beac1aed05.png)

![trello-image-4](https://user-images.githubusercontent.com/72952429/126571891-baa81972-5e36-45e4-a4f6-4b39ba3efbc4.png)

![trello-image-5](https://user-images.githubusercontent.com/72952429/126578179-8f89b2a5-3b5a-481c-b915-319d77666769.png)

![trello-image-6](https://user-images.githubusercontent.com/72952429/126578181-05e8d412-619d-4186-8838-9f383c8828a4.png)
