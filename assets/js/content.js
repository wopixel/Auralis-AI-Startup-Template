window.AURALIS_STORIES = {
  evaluation: {
    category: 'Practice / 8 min read',
    title: 'The evaluation habit that changes how teams ship.',
    intro: 'The most useful evaluation suite starts with the questions your team is already asking.',
    sections: [
      ['Start with ten real examples', 'Collect recent requests that represent the work: a straightforward case, a missing source, a contradictory instruction, and an ambiguous question. Keep the input and the expected behavior together. You are defining what useful means for this particular workflow.'],
      ['Score the decision, not just the language', 'A fluent answer can still take the wrong action. Ask whether the response used an approved source, respected the scope of the task, and handed off when the evidence was weak. A short rubric keeps reviewers aligned.'],
      ['Make review a regular habit', 'Reserve time each week to inspect a small production sample. Add surprising failures to your examples, compare proposed changes against the same set, and record why the team accepted a tradeoff. Your quality standard should become more informed as the workflow matures.']
    ]
  },
  workspace: {
    category: 'Product / 6 min read',
    title: 'What a useful AI workspace needs to remember.',
    intro: 'An answer is easier to evaluate when you can see the decisions that came before it.',
    sections: [
      ['Keep context attached', 'A prompt without its source documents, model settings, and intended audience is an incomplete record. Store these pieces together so another teammate can recreate the conditions behind a result.'],
      ['Record the reason for a change', 'Version numbers show that a change happened. Decision notes explain what the team was trying to improve. A sentence about the motivating example is often enough to keep a future review from starting over.'],
      ['Give feedback a destination', 'Feedback that lives in chat disappears from the system. Connect each review to the workflow version and the example it describes. The next iteration can then start with evidence instead of recollection.']
    ]
  },
  questions: {
    category: 'Company / 4 min read',
    title: 'Building a company around better questions.',
    intro: 'Before we ask which model to use, we ask which part of the work deserves a better tool.',
    sections: [
      ['Meet the people doing the work', 'The details that shape a useful product usually appear in a working session. Watch where a person pauses, checks another source, or asks a colleague for judgment. Those moments tell you where support would matter.'],
      ['Use constraints as design material', 'A source might be incomplete. An approval may take time. A team may have a strong reason to keep a human decision. Treat these constraints as part of the product instead of hiding them behind a successful demonstration.'],
      ['Stay close after launch', 'A launch gives a team new evidence. We keep reviewing examples and asking what changed for the people using the workflow. Useful software earns its place through those ordinary days.']
    ]
  },
  trust: {
    category: 'Practice / 9 min read',
    title: 'Trust is a workflow property.',
    intro: 'People need to understand both what a system can do and where their own judgment is still required.',
    sections: [
      ['Show the evidence', 'Put sources next to the claims they support. When evidence is missing or contradictory, make that visible before the user makes a decision. A clear gap is more useful than unsupported confidence.'],
      ['Design the handoff', 'A human review step needs an owner, a reason, and enough context to act. Include the original request, the proposed action, and the condition that triggered review.'],
      ['Make recovery ordinary', 'Log outcomes, preserve previous versions, and give teams a clear way to pause a workflow. Trust grows when people know how to investigate and recover from a failure.']
    ]
  },
  retrieval: {
    category: 'Product / 7 min read',
    title: 'Retrieval is a product surface.',
    intro: 'The quality of the source shapes the quality of the experience.',
    sections: [
      ['Know what is in the collection', 'Assign ownership to your knowledge sources. Track when content was approved and when it should be reviewed again. Search quality suffers when current and superseded guidance are equally available.'],
      ['Respect the audience', 'Access checks belong in retrieval. A user should only receive context they are allowed to see, even when a broader collection could produce a more complete answer.'],
      ['Inspect the retrieved material', 'When a response fails, inspect the passages that reached the model before adjusting the prompt. The information might have been missing, poorly divided, or ranked behind an irrelevant document.']
    ]
  },
  pace: {
    category: 'Company / 5 min read',
    title: 'A slower way to move faster.',
    intro: 'A clear decision today can save several rounds of confusion tomorrow.',
    sections: [
      ['Leave a useful trail', 'Write down the problem, the constraints, and what you chose. Keep the note short enough that a teammate will actually read it when the topic returns.'],
      ['Reduce the number of moving parts', 'A workflow with a clear owner and a narrow outcome is easier to improve. Add complexity when you have evidence that the current system cannot meet the need.'],
      ['Protect the review', 'Make room to look at the result after the urgency has passed. Review what happened, update the examples, and bring the learning into the next iteration.']
    ]
  },
  loomline: {
    category: 'Customer story / Support',
    title: 'How Loomline gave 140 agents a better first draft.',
    intro: 'A sample customer story about building a support workflow around the people reviewing every response.',
    sections: [
      ['The challenge', 'Agents were switching between documentation, ticket history, and policy notes to answer routine questions. Helpful context existed, but finding and verifying it took time.'],
      ['The workflow', 'The team connected approved product documentation and introduced cited response drafts. Requests with incomplete evidence stayed in a review queue. Agents could inspect the source before accepting or editing a draft.'],
      ['The result', 'The illustrative rollout reduced review time by 42% and improved resolution speed by 2.8x. The team kept ownership of the quality rubric and continued adding difficult cases to its evaluation set.']
    ]
  },
  northstar: {
    category: 'Customer story / Operations',
    title: 'A shared signal for a distributed operations team.',
    intro: 'A sample customer story about making operational exceptions easier to understand.',
    sections: [
      ['The challenge', 'Each shift inherited a collection of messages and spreadsheets. Operators needed a consistent view of what had changed and which exceptions still needed a decision.'],
      ['The workflow', 'Northstar created a daily summary with links to the original records. Rules routed open exceptions to the responsible team and preserved the reason behind every escalation.'],
      ['The result', 'The illustrative workflow reduced escalations by 31% and recovered 11 hours each week. Operators spent more time making decisions and less time reconstructing context.']
    ]
  },
  kindred: {
    category: 'Customer story / Product',
    title: 'From a thousand notes to the next right question.',
    intro: 'A sample customer story about making research easier to revisit without losing its nuance.',
    sections: [
      ['The challenge', 'Useful findings were scattered across studies, interviews, and support notes. Product teams could find a theme but often struggled to locate the evidence behind it.'],
      ['The workflow', 'Kindred linked every synthesized theme to the original excerpts. Researchers reviewed groupings, corrected ambiguous labels, and preserved disagreements rather than merging them away.'],
      ['The result', 'The illustrative process improved synthesis speed by 4.1x and reached 89% source coverage. Product briefs became easier to challenge and easier to update as new research arrived.']
    ]
  }
};
