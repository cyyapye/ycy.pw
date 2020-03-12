---
templateKey: blog-post
type: post
title: Planning and Executing a Reorg
date: 2020-03-12T05:57:57.707Z
metaDescription: >-
  How to beat the odds and succeed with your reorg. Explore step-by-step to a
  successful reorg from assigning areas of responsibility to broadcasting the
  new org structure.
postImage: /img/kelly-sikkema-jrvxgakzism-unsplash.jpg
---
85% of orgs experienced a reorg in the past 3+ years according to a [McKinsey survey in 2015](https://www.mckinsey.com/business-functions/organization/our-insights/getting-organizational-redesign-right). Yet less than 25% of reorgs succeed. 44% just ran out of steam and the remaining 33% never met their objectives.

To increase the chances of success of your reorg, you need a solid plan and solid execution against the plan.

### Know why you are doing a reorg

As discussed in [Why do Reorgs](https://www.cyyapye.com/posts/why-do-reorgs/), you need to first identify the reasons you want to do a reorg. This is critical to get buy-in from not just the executives but also your team. If you can’t articulate your reasons well, you’re unlikely to rally the team to get behind the new org structure. It’s a surefire way to be another statistic.

As important, understand the wrong reasons for a reorg. Knowing them helps you sidestep disasters.

> If you reorg for the wrong reasons, you end up with all the pain and none of the gains.

### Write down the objectives

Once you have your reasons, write down your objectives so you can share them transparently with the whole org later. These are the objectives you set out to achieve with the reorg. They will hold you accountable to the reorg you’re undertaking. For each objective, identify key results you can use to measure the objectives. The key results should satisfy the characteristics of a typical SMART goal and have both [trend and baseline](https://www.cyyapye.com/posts/choosing-an-org-structure/).

There’s an added benefit of establishing key results with trends and baselines: measuring the baseline in your metrics forces you to survey and understand the current state and its trajectory before embarking on the reorg. Performing a reorg without a baseline and trend is akin to operating on a patient before getting an X-ray.

### Choose the right mix of org structures

Purity of an org structure almost never exists in reality. Depending on your objectives, you’ll have to choose the right mix of org structures to optimize the paths to achieve your objectives.

> It’s tempting to carve up the product in ways that line up cleanly with engineering. For example, one PM owns the front-end and the other owns the back-end. Or an iOS PM, an Android PM, and a desktop PM. The benefits here are obvious: each PM takes over a discrete chunk of the architecture, and they probably link up well to tech leads and individual engineers. Perfect, right?\
> *\- Ken Norton*

I find [Ken Norton’s guideline](https://www.kennorton.com/newsletter/2016-02-24-bringing-the-donuts.html) most instructive.

> Organize your product managers around customers, not code repositories.\
> *\- Ken Norton*

This allows a product manager (PM) to own the experience of a customer end-to-end. The end result is a seamless experience for the customer. This does not automatically imply engineering will be organized the same way. But it’s hard to argue why it shouldn’t. Imagine a todo app engineering organized by layers – web, backend and mobile. Each layer has its respective PM. If you want to build a todo reminder feature that cuts across all three layers, who will make the final decision when there’s a conflict?

Ken went on to propose a test:

> ... how many PMs need to be in the room?\
> *\- Ken Norton*

If you find the answer to the question above is more than one, you may want to reconsider if the org structure is indeed the optimized path.

Turns out I’m not alone in thinking that engineering should be structured the same way as product management. That is, the structure should be aligned for maximum efficiency in decision making and minimal dependency across teams.

Noah Weiss, Sr Director of Product, Expansion at Slack explains [his rationale](https://www.kennorton.com/newsletter/2016-03-23-bringing-the-donuts.html) :

> Just like it’s ideal to organize your PM team around customers and use cases, the same goes for engineering. Otherwise, you risk having a PM responsible for a use case having to work with half a dozen engineering teams to ship a feature: server, web, iOS, Android, infra, etc. Aligning engineering with use cases has a number of other benefits, like increased autonomy for taking a feature from idea to launch and fostering engineers developing deeper product intuition for a specific problem.\
> *\- Noah Weiss*

But I have to add a disclaimer lest I convince you there's only one right way to structure your teams.

> There’s no perfect answer otherwise there would be only one org structure.\
> *\- Steven Sinofsky*

### Choose the right team sizes and make-up

In hindsight, I should’ve combined the topic of team make-up with choosing the right mix of org structures because they seem to go hand-in-hand. Regardless, once you have decided on the right mix of org structures, you need to consider the size of your teams. I delved into the science behind the right size of a team in my [last post](https://www.cyyapye.com/posts/team-size-and-make-up/). So, I won’t go in-depth here. But suffice to say the ideal size of a team is 8 people. This is after taking into consideration:

- the cost of coordination among team members
- manager capacity
- redundancy and burnout risks

Ultimately, the number of teams you have is constrained by the number of engineers and the size of each team.

    teams = (engineers / team_size).floor()

Each team will need one manager. And once you exceed the team size, you’ll need a second layer of managers or manager of managers, sometimes called directors. Will Larson distilled this down to a [simple mathematical formula](https://lethain.com//running-an-engineering-reorg/):

    directors = Math.log(engineers, team_size)

Ideally, when you plan this out, you’re projecting the org size you’ll have in a year. This is important so you don’t have to do another reorg as you hire new folks.

### Assign areas of responsibility and design roles

Ownership is what motivates people to excel. Ownerships gives us a sense of purpose. But ownership has to come with both risk and reward. It is the fear of failure and its repercussion and the exhilaration from the potential for success and its reward that drives us. The victory. The defeat. Ultimately, it is the credit that we're all after. That is why we're willing to step into the arena.

> The credit belongs to the man who is actually in the arena...\
> *\- Theodore Roosevelt*

Just like how you would carve up areas of responsibility for executives, you need to do the same for each team. I don't think you'd be able to do this down to the individuals within each team at the time the new org is revealed. But once each team has its designated areas of responsibility, the team can go off and further divvy up ownership amongst its members.

Along with the areas of responsibility, you should design key roles that will help lead your new org to success. When designing roles, tempting as it may be to take existing talent into consideration, don't. Set aside the individuals who already possess the domain knowledge, experience, and skills to fill a role. This avoids the mistake of designing an org centered around specific individuals. Instead, think about the roles you'll need to own all areas of responsibility and divvy up those areas. Group them into relevant clusters to optimize decision making and minimize cross-team dependencies. The roles leading these groups will be the heads.

Once you have defined the roles, you can now identify or draft talents into the roles. You may find some talent could hold multiple roles. Resist the urge to combine the roles. Not only will it overburden the talent, but it will also place undue stress on your new org structure. At some point, something has to give. For roles that you don't have an existing talent for, you'll need to look externally.

### Identify plans to mitigate deprioritized paths

Because there is no perfect org structure, with every org structure you choose you’re making a trade off. What’s important is acknowledging the shortcomings of each org structure and devise a plan to mitigate each shortcoming.

Merely knowing what the shortcomings are help instill confidence throughout the org. It shows you did your homework and thought things through. Couple that with a plan to address the shortcomings and relentless execution and you’d drastically improve your chances of beating the odds.

### Preparing for broadcast

You’ve done most of the hard work to design the new org. But the most critical step is to communicate the new org structure. Because all the steps leading up to this is not visible to the audience. So this is when your empathy is on display and your trustworthiness is at risk. It is especially difficult because you are going to find yourself repeating the same message over and over. You’d start wondering if you’re boring people to death. You’re not. Remember, most of the folks are hearing this from you for the first time even if you have repeated the same message 50 times. But you have to be just as empathetic as if this is the first time you’re breaking the news.

Typically, by the time you arrive at the final version of your new org, you’d have consulted your peers to get buy-in. At least the communication with most of your peers would have already taken place. But there may be peers who were not involved in the org design process who may still be impacted. These are usually shared functions that work closely with product and engineering such as sales, customer success, and partnerships. Hold a meeting with the heads of these functions to share the new org structure ahead of the general broadcast. This gives them a chance to digest the impact to their functions and share any concerns you may not have thought of. At the very least, this minimizes the awkward situation of dealing with unpleasant surprises in a Q&A session.

Next, schedule 1:1s with key individuals and those that are highly impacted. These are most likely your existing top talent who may be taking on new roles heading up different initiatives. And some may unexpectedly find themselves in new roles more suited for their strengths as opposed to their current ill-suited roles. Presumably they will be able to flourish in their new roles. But that depends on how effective you are in getting them excited about their new areas of responsibility. What you see in them that make them the best person for their respective roles.

Before broadcasting your new org, gather your managers and prepare them on how to handle the tough situations following the broadcast. Coach them on how to communicate, listen to their teams’ concerns, and show empathy. Changing managers is often stressful. It makes folks question whether they have done something wrong when, in fact, it has nothing to do with it. A good way to calm the nerves is to have a three-way conversation with the employee, the former and the new manager. Prepare talking points so managers can readily refer to them when needed. It’s important to present a single voice and reason from top to bottom. If the managers are bought in, it’s easier for their teams to buy in due to the relationship proximity.

### Broadcast the new org structure

There are a couple of ways to broadcast the new org structure:

1. Hold an org all-hands
2. Send out an email to the entire org

You can choose one or the other. But personally, I find doing both in the order listed above to be the most effective. There are a few advantages an all-hands offer:

1. Yes, broadcasting in an all-hands won't yield any personal questions. If you're lucky, you may get an active audience who will ask some tough questions. Most of the tough questions are asked anonymously. If the responses are satisfactory, they help build confidence among the crowd as people look at each others' expressions to decide how they should react. So, this is one thing that a live broadcast can offer that an email cannot: a visual expression gauge.
2. The tone of your voice, your body language, and your facial expression are what informs the audience about your thoroughness when designing the new org, your confidence in the new org, your empathy for others, and your optimism for the future of the new org. No email, no matter how well written, can substitute these.
3. In sales (especially the large deals), the [person who shows up in person tends to win the sale](https://www.saastr.com/should-you-visit-more-of-your-prospects-in-person-almost-certainly/). This is why a sales person who's willing to fly half way across the continent to meet with you will almost always win the deal. When you're sharing your new org structure, guess what you're doing? You're selling a vision. A vision of a better org, a better future. Who's your customer? Your entire org! So, show up.

> I remember the first customer I lost due to not showing up in person. They were a Fortune 50 customer. We did a CSAT survey, and every user loved us. The implementation was flawless. There were zero issues. And … we lost them at renewal. Our buyer was kind enough to call us and explain why. "Well, your competitor was in the office last week, and just convinced us that ..."\
> *\- Jason Lemkin*

After broadcasting your new org in an all-hands, send out the email to everyone. This provides the details and a single source of truth for what's changing. The last thing you want in a reorg is confusion. People can't remember all the details covered in the all-hands. An email will capture the details accurately so everyone can refer to it as needed. Include a short FAQ in the email if necessary. If there were great questions that came out of the all-hands capture them in the FAQ as well. This is also why I recommend doing both in this order. The FAQ should also include a suggestion to schedule a 1:1 with managers to address any personal concerns. Offer to hold skip-level 1:1s.

In your email, also provide the next steps with a timeline. Provide a link to your objectives and key results so everyone can hold you accountable to the outcome of the reorg. Transparency and trust are paramount to the success of a reorg.

### Rest

This last step I couldn't have worded better. So, here's [Will Larson](https://lethain.com/how-to-evolve-eng-org/):

> At this point you've finished your organizational design, and there is only one commandment left to master: **stop making organizational changes**. Although these changes feel useful, productivity always occurs between organizational change, not during it.\
> *\- Will Larson*

Let the dust settle. Allow time for the teams to soak it in. Once they do, they'll begin to adjust to the new org structure. They'll relearn how things can work better. They'll fight with their new team members. But they'll come to know their new team members better. Then, they start gelling. And magic happens.

Don't forget to periodically take a pulse of the org. Send out surveys. Collect the feedback and share the results openly with everyone. At least on a quarterly basis, share the progress against the objectives and key results you outlined for the new org. Hold yourself accountable publicly. The follow-through is critical. It shows you didn't take this lightly. You didn't forget about the pain the teams went through because they believed in you. And if your new org is indeed making great progress towards your objectives, that's something to celebrate. It tells everyone we're headed in the right direction.

But reorg is complex. The odds are stacked against you. You're going to have some missteps. Fortunately, decisions made in reorgs are usually not a Type 1 decision that's not reversible unless you're talking about divesting a division. (But that's a capital allocation decision.) When you learn about them after the reorg, the first step is to acknowledge your mistakes. Share them with the teams and how you plan on addressing them. Again, follow through.

Just don't assume a decision is a mistake until you have given it time. Frequent changes post reorg erode confidence in the new org structure.
