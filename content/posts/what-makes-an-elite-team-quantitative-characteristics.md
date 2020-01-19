---
templateKey: blog-post
type: post
title: What makes an elite team? - Quantitative characteristics
date: 2020-01-14T03:57:12.992Z
metaDescription: >-
  The four key metrics that define an elite software team. To build one, we need
  to first understand what it is.
postImage: /img/manoj-kumar-kasirajan-fazew6xphz8-unsplash.jpg
---
Excel or die. [The carnage Amazon left behind](https://www.businessinsider.com/stores-closing-in-2019-list-2019-3) on its way to become the world’s largest retailer offers a peek into the future of the brutality other industries will endure when a vigorous competitor comes along.

> Every day at Amazon is Day 1... Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.  
> *– Jeff Bezos*

The retailers that managed to survive are those that kept up with the pace of technological change. Target and Walmart succeeded because their engineering teams were able to respond to changes quickly.

An elite performing team delivers value 106x faster than a low performing team according to [Accelerate: State of DevOps 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf) report published by DevOps Research & Assessment (DORA). To put this into perspective, an elite team can ship a change in less than a day, whereas it would take a low performer some where between 1 - 6 months. In other words, Amazon ships thousands of times per day. Sears needed a lifeline to shut another 96 stores. (Regrettably, I owned some stock briefly when I was convinced its underlying real estate was worth more than its market cap. The lesson was **seared** into my brain.)

### What makes an elite team

So, how do we build elite performing teams? To achieve a goal, we first need to define what success looks like. Fortunately, DORA has identified four metrics with thresholds that define an elite performing team.

**Deployment frequency > 1 time/day**

Deployment frequency measures how often you "deploy code to production or release it to end users". There are some nuances here:

- Most features comprise of multiple changes and consequently multiple deployments. For server applications, the common practice is to deploy code behind feature flags and when the feature is ready to be released to end users, you simply flip the flag.
- For client applications, you may not have the luxury of deploying code to end user devices as frequently. But you can still deploy to lab devices multiple times a day. The features may be batched together and released to end users at a later date.

The higher the deployment frequency, the higher the throughput of the team. Elite teams deploy 4 times/day. We want to encourage teams to deploy frequently by breaking up work into smaller chunks. The reason is smaller changes are easier to test, easier to reason with, and less risky. But it's important to keep Goodhart's law in mind:

> When a measure becomes a target, it ceases to be a good measure.  
> *\- Charles Goodhart*

It's easy to game any metric. For most teams, a story is the smallest unit of value to deploy. I think it should be smaller. Obviously, it'd be counterproductive to deploy a single line of code change every time (boctaoe). The overhead to test something that small seems overkill. A function, a class, or a module is the right size. Provides value. Code is easy to review. Easy to spot bugs.

I believe the nirvana development environment is one where the line between development and production is non-existent. That is, as soon as the code is committed, the code is deployed to production. This allows an engineer to focus solely on the code that creates value and let the environment take care of everything else. The closest to this that I've seen is [Dark](https://medium.com/darklang/the-design-of-dark-59f5d38e52d2).

> In Dark, we redesign the deployment process to not require these steps. Instead, deployment is trivial. As soon as you write code in the Dark editor, it’s immediately deployed to production, ready to be enabled with a feature flag. There is no long build process, no tarballs, no containers. It’s a simple diff from your editor to our infrastructure.  
> *\- Paul Biggar*

**Lead time for changes < 1 day**

DORA measures lead time as the time from the first check-in to successful deployment to production. Don't confuse this with the lead time definition in Lean and Kanban. DORA's definition of lead time is closer to cycle time in Lean and Kanban. The DORA lead time excludes the time spent on design activities. Design activities are usually unpredictable and highly variable. You may have to go back and forth on UX until the design is intuitive. You may need engineers to do some prototyping work to see if a solution will work as hypothesized. It’s impossible to predict how much time you need for work you’ve never done before. Because the time spent varies greatly, if you lump design time into lead time, any optimization to your delivery efforts will be muted.

Importantly, the end defined here is the successful deployment to production. That means the code is tested and verified to work in production. What’s left for you to define is how large is the unit of value you’re deploying. Naturally, if your average story size is such that it takes 3 days to complete, and you don’t deploy until you’re done, your lead time will never go below 3 days. The solution is to reduce the size of a story to chunks of functionality that can be shipped in less than a day.

You may be thinking, “Aren’t we gaming the metric here?”

No. Because this is what the metric threshold suggests we do. Deploy small incremental chunks. It’s easier for peers to understand a small pull request (PR). Turnaround for PRs will be faster. Less code, less bugs, less risk. You feel more confident releasing a function than 13 files of changes.

**Time to restore service < 1 hour**

Moving fast means safeguards are paramount for availability. Automated tests ensure changes deployed work. Performance tests (automated) ensure performance meets Service Level Objectives (SLOs). Monitoring and alerting ensure we know when service degrades or is down. But these safeguards are preventative. They won’t help when shit hits the fan. And shit will hit the fan because of unknown-unknowns - things we can't anticipate.

To ensure high availability while moving fast, we need a few more things in place:

**Observability**

The bulk of the time spent restoring a service is usually in identifying root causes. Inadequate tools hamper the ability to troubleshoot issues efficiently, especially when dealing with a microservice architecture. Logging, metrics, and tracing on their own don't cut it anymore. What's critical is event. An event gives you all three within a context. Context is the most important ingredient when it comes to debugging.

> A system is observable if and only if you can determine the behavior of the system based on its outputs.  
> *\- Greg Poirier*, [Monitoring is Dead](https://speakerdeck.com/grepory/monitoring-is-dead?slide=35)

Outputs here refer to the internal state of the system. This is where context comes in. Context [knits together the metrics, logs, and traces for a single request](https://thenewstack.io/observability-a-3-year-retrospective/). With high cardinality data embedded in the context and proper tooling, we can quickly narrow down an issue to a long running query triggered by a specific user_id. Without either, we have to rely on intuitive leaps and recollection of past incidents to guess at what's happening.

**Feature flagging**

Once we have identified root causes, the fastest way to restore a service is to turn off a recently rolled out feature. This doesn't require any deployment. Just a flip of a toggle. And things will be back to normal. A robust feature flagging tool is a prerequisite to increase deployment frequency and reduce lead time too.

**Fast rollbacks and patching**

But sometimes, due to unknown-unknowns, we may not be able to leverage a feature flag to turn off a problematic code path because perhaps the code path wasn't wrapped by a feature flag. If so, we are left with a couple options: rollbacks and forward patches. Of the two, rollbacks are easier and safer because the prior version of the code we're rolling back to was stable in production. And we don't need to code up new changes under time pressure. Though rare, occasionally, forward patches may be the only option we have. This could be due to existing state or dependencies of the system such that rolling back is not feasible or could cause data loss. Either way, the ability to rollback and patch quickly is a prerequisite for continuous delivery.

The ability to restore service quickly provides a ridiculous advantage to the elite team - to the tune of 2,604x faster than its low performing counterpart. What this means is the elite team gets to spend more time building features than restoring services.

**Change failure rate < 15%**

In addition to how quickly we can restore a service, it is equally important to measure how often we introduce a failure with every deployment we make. This is measured by calculating the percentage of changes that resulted in impairment, outage, hot fix, rollback, or patch.

If we have been meeting our lead time target, we should be well on our way to meeting this target as well. This is because smaller changes as a result of low lead time pose lower risk and, thus, less likely to cause degradation or outages. According to the DORA report, elite teams are 7x less likely to fail compared to low performers.

**Availability**

Bonus! There is a fifth metric mentioned in the DORA report: availability. Availability is an operation performance metric, however. Not a delivery performance metric. DORA specifically excluded availability from the four key metrics because availability doesn't apply to teams that deliver packaged software or firmware.

Availability target differs for each service. Measuring availability allows us to track whether we are meeting our SLOs. So long as we are meeting SLOs, we are delivering on our promises of how our services behave.

> Availability reflects how well teams define their availability targets, track their current availability, and learn from any outages, making sure their feedback loops are complete.  
> *\- Accelerate: State of DevOps 2019*

The good news is better software delivery performance leads to higher availability. In essence, if we excel in the first four metrics, we *almost* get availability for free.

It's important to keep in mind, more than half of the engineering teams out there are still behind in terms of performance. But there is a clear shift towards higher performance based on the increased proportion of medium performers. The high performing group is still elusive because software delivery is increasingly more complex. But compared to 2018, there were 3x as many elite teams in 2019!

So, don't be dismayed if you're not yet part of an elite team. Apparently, many teams made significant improvements in the span of just one year.

The metrics above define what an elite team is from a numbers perspective. But there are key [qualitative characteristics that define an elite team](/posts/what-makes-an-elite-team-qualitative-characteristics/) that can make these numbers. In my next post, I'll discuss what these are. Stay tuned!
