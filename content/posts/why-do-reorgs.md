---
templateKey: blog-post
type: post
title: Why do Reorgs?
date: 2020-02-12T05:18:11.420Z
metaDescription: >-
  Reorgs can be a good thing. What are good reasons for a reorg? Equally
  important, what are poor reasons for a reorg?
postImage: /img/kovah-oleelxe9ef0-unsplash.jpg
---
Unless you're the founder of a company, you'd be walking into an existing organizational structure. Even a six-person startup has an org structure. Whether it's deliberately planned or not. Therefore, when we talk about organizational design we're really talking about reorganization. So, whether you play a role in a reorg or are affected by a reorg, you should accept the fact that reorgs are inevitable. Under the right circumstances, frequent reorgs are a sign of rapid growth.

> If you are growing fast, you have a different company every 6-12 months.\
> *\- Elad Gil*

The rate of reorgs will track your growth rate pretty closely. The reason is you need to have the right org structure in place for your next growth phase.

But before you embark on a reorg, you need to first ask, "Why?"

You need to understand the reason behind a reorg because you need to be able to:

1. explain the reason behind the reorg to get buy-in
2. measure your performance against the goals of the reorg
3. identify the optimal org structure to achieve your goals

Let's explore the first item in this post. We'll discuss the remaining items in subsequent posts.

### Reasons for a reorg

There are some very good reasons to do a reorg. But you need to be absolutely clear which ones apply to you. Because what you can't afford is some wishy-washy reason. A reorg inflicts pain and stress on people. The lack of clarity in your reasoning to do a reorg is disrespectful and tells your teammates how much thought you really put into this.

**The current seams are not optimal for the new business strategy.**\
Depending on the role you play in your org, sometimes you don't have much say in the reorg. If the reorg is due to a change in business strategy such as a switch to focus on enterprise customers as opposed to consumers, there isn't much you can do about it other than understanding and communicating clearly to your teammates.

A good example of such a reorg is when DuPont went from manufacturing gunpowder to manufacturing paint. During World War I, DuPont grew to become one of the largest companies in the world. Their org structure was built around two functions: sales and manufacturing. After the war, DuPont had to diversify to paint because paint and gunpowder shared a common ingredient: nitrocellulose. But losses soared. This was because sales and manufacturing were at odds with each other. Though the products shared the same ingredient, the markets were completely different. So, DuPont created two divisions instead: a gunpowder division and a paint division. And DuPont [returned to profitability](https://stratechery.com/2013/why-microsofts-reorganization-is-a-bad-idea/).

**Communication is inefficient at the seams.**\
Without exception, whenever we talk about reorgs, [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law) is brought up. Rightfully so. Conway's Law states that organizations create products that mirror their communication structure. But most people don't dive deeper to fully understand how the law should be used to their advantage. Unfortunately, there's a rule made popular by Steven Sinofsky that when read without context (which we're all prone to do when we're lazy) could contribute to misinterpretation.

> Don't ship the org chart.\
> *\- Steven Sinofsky*

Often the argument I hear is a reiteration of the rule with no further elaboration offered. So, what do you ship then?

But if you took the time to just read the [accompanying text that Steve wrote](https://medium.learningbyshipping.com/functional-versus-unit-organizations-6b82bfbaa57), you'd start to understand what he's really saying.

> HN captures my view, which is the rule is aspirational in that you always ship the org chart. Therefore, when you create an org chart you are creating your product — the seams in the org get reflected in the product; the depth of feature work gets reflected in resource allocation; the coordination across job functions gets reflected by the leaders you choose, and so on.\
> *\- Steven Sinofsky*

He went on to provide a couple examples:

> When Office wanted to build a suite, we organized the team to build a suite.

> When Windows needed to ship one Windows product on time we removed product units and went functional...

Notice how Microsoft changed the org to reflect the product they wanted to build in both scenarios. The problem with divisions is they divide. They are great when the divisions are meant to run independently. But when the strategy changes to market everything as a single product or a suite of products, divisions do more harm than good. For the products to come together seamlessly working as one, you have to treat them as such.

You can't avoid shipping an org chart. So, pick one that best reflects your product.

**The incentives are misaligned.**\
In a functional organization, no one function can be held entirely accountable for the organization's success or failure. When there's a failure, this often turns into a game of finger-pointing. Engineering blames Sales. Sales blames Product. Product blames Engineering. You get the idea.

Okay, just go with divisions then. Division has strong accountability from the outset because there is a single neck to choke at the top of the division. Apparently, this is also infamously known as BOL, which stands for butt on line. But even within a division, you could have functional sub-orgs.

So, how do we solve the problem of misaligned incentives?

Apple, which is perhaps the only large company organized functionally, came up with [Directly Responsible Individual (DRI)](https://about.gitlab.com/handbook/people-group/directly-responsible-individuals/). Each DRI becomes the single neck to choke for a project. And they don't mess around. From [Ben Thompson's post](https://stratechery.com/2013/why-microsofts-reorganization-is-a-bad-idea/), Rob Schoeben was fired for MobileMe, Mark Papermaster was fired for the iPhone 4 antenna, and Richard Williamson was fired for Maps.

**There isn't a clear tie-breaker.**\
At one extreme is the holacracy org structure. There are no managers. Everyone does whatever's deemed best for the company. This is great because decisions can be made very quickly. But when there's a disagreement, there isn't a default tie-breaker. One way to solve this is to combine the circles of accountabilities such that there's a single individual who can make the final call. In a more hierarchical org structure, the natural tie-breaker is whoever the two contesting individuals report up to. She can make a final decision and everyone else will just disagree and commit.

But the question you ought to ask is whether the person in the tie-breaker role is, in fact, the best person to tie break. If not, is there a more suitable person? When product and engineering disagree, who's the best person to tie break? Identify what needs to be decided frequently. Then figure out an org structure where the [maximum number of decisions can be made by an individual](https://a16z.com/2010/08/02/taking-the-mystery-out-of-scaling-a-company/). After that, you can figure out who should run that group.

**The current org structure doesn't scale any more.**\
If you are projecting to double your team in the next 6 months, this would be a good reason to rethink the current org structure. Perhaps there's a severe imbalance in the current org such that a manager has 16 reports. It's generally recognized that beyond 10 reports, a manager begins to feel overburdened. Not all managers can handle 10 reports. Some top out at 5. But it depends on both the manager and the team members. When a manager has 16 reports, he'll spend half the week just doing 1:1s. We'll dive deeper into sizing of an org in a future post.

It's also possible over time due to people leaving the company for you to end up with what's called the I-formation where managers have one direct report. This team is obviously too small to function effectively. The manager is underutilized and the engineer is worked to death. This would be an extreme case. You shouldn't wait until things get to this point before you consider a reorg.

### The wrong reasons for a reorg

Equally important is to know the wrong reasons to do a reorg. If you reorg for the wrong reasons, you end up with all the pain and none of the gains. If you're lucky to recognize the mistake and course correct, you might survive the mistake.

> All I want to know is where I'm going to die so I'll never go there.\
> *\- Charlie Munger*

**Company X does this. Just look at how successful they are.**\
Emulating the best of breed is often a good idea, if you understand the reasons behind the idea and why it works. Just because Apple is the most valuable company in the world, it doesn't mean you should emulate their org structure. It works for them because they have other components at play that make it work. They are deeply focused on a handful of products at a time.

> We believe in saying no to thousands of projects so that we can really focus on the few that are truly important and meaningful to us.\
> *\- Tim Cook*

So, when you choose to emulate, make sure you understand all the ingredients required to make an idea work. Don't cherry-pick the one that appeals to you the most.

**Chasing after the new shiny object.**\
Zappos is another company highly admired for their innovative culture. In 2013, they began adopting holacracy with hopes to accelerate decision making and eliminate politics. But the experiment didn't go as well as hoped. In 2016, Tony Hsieh decided to accelerate the progress towards eliminating legacy management hierarchy – an organization with no people managers. Employees who didn't buy into the new org structure were offered generous buyout packages to leave. That year, [29% of the staff has turned over](https://fortune.com/longform/zappos-tony-hsieh-holacracy/). The jury is still out on whether holacracy will work at Zappos.

Another company that bought into holacracy was Medium. The experiment at Medium began in 2012. In a post explaining why Medium has decided to move on from holacracy, [Andy Doyle wrote](https://blog.medium.com/management-and-organization-at-medium-2228cc9d93e9#.ukg1xag8n):

> ...the system had begun to exert a small but persistent tax on our both effectiveness and our sense of connection to each other. For us, Holacracy was getting in the way of the work.

Medium still believed holacracy was a positive experience and they would be worse without it.

**Prioritizing individual wants.**\
Will Larson wrote a set of [rules of thumb for org design](https://lethain.com/special-topics-org-design/). And the first one he listed was "Company needs before individual wants". His explanation is so succinct I'm just going to quote him here:

> If you fit heavily on individual asks, you'll end up doing frequent reorganizations as folks' preferences evolve and new folks are added into the organization. Balancing between different folks' wants will create the appearance of politics, and you'll rapidly accumulate organizational debt.
> *\- Will Larson*

When you prioritize individual needs, your reorg is bound to fail. Every time.

> In fact, most every org change I ever saw that didn’t work started off not with a problem statement but with a goal of putting a certain person in charge or a boss-centric perspective of grouping some things together or separating some things.\
> *\- Steven Sinofsky*

**Solving a personnel problem.**\
Along the same veins of prioritizing individual wants, doing a reorg to work around a personnel problem is akin to torturing everyone for the sake of a few. Or perhaps you just lack the courage to do the right thing – fix the personnel instead of fixing the org.

I get it. You have a high performer who was promoted into a position of incompetence. This is also known as [The Peter Principle](https://en.wikipedia.org/wiki/Peter_principle), which is the title of a book written by Dr Laurence Peter and Raymond Hull.

> In a hierarchy every employee tends to rise to his level of incompetence.

On the surface, the principle makes a lot of sense. Except the book was meant to be satire! This makes the principle even more disconcerting because it rings true.

But you can't fix The Peter Principle with a reorg because it's your mistake to own, not the orgs. You recognized Kevin was performing well. So, you assumed he'll do well as a manager. Turns out he's more of a dictator than a manager. But you don't want to lose Kevin because he was so good in his prior role. So, you try to come up with a silly org structure to keep Kevin happy while minimizing the blast radius of the damage he can cause. When you do this, you just became the next personnel problem.

The right approach to a personnel problem is one with [radical candor](/posts/culture-part-2/).

In my next post, we'll explore the types of org structures available.
