/**
 * Cards objects
 * 
 * questionCard:
 * {
 *   body: {
 *     title: ""
 *     description: ""
 *   },
 *   options: [
 *     {
 *       title: ""
 *       description: ""
 *       nextId: <Number> (pointer to next cards id)
 *       nextType: ""
 *     }
 *  ]
 * }
 * 
 * answer card:
 * {
 *  title: ""
 *  description: ""
 * }
 */

const question = {
     0: {
         body: {
            title: "This flowchart is designed to start conversations, not end them. There are many simplifying assumptions, but we hope it can help you clarify your own reasoning and understand that of others.",
            description: "",
     },
     options: [
         {
             title: "Ok, got it.\nI want to do the most good I can!",
             description: "",
             nextId: 1,
             nextType: "question"
         }
        ]
     },
    1: {
        body: {
            title: "Specific responsibility?",
            description: "Do you have an overriding obligation to help a particular group or cause?",
        },
        options: [
            {
                title: "Yes",
                description: "",
                nextId: 0,
                nextType: "answer"
            },
            {
                title: "No",
                description: "",
                nextId: 2,
                nextType: "question"
            }
        ]
    },
    2: {
        body: {
            title: "Ok with uncertain projects?",
            description: "Is it OK to prioritize risky projects if the potential benefits of success are high enough?\n For example, would you rather do something that you think has a 1% chance of saving 1,000 lives than save one life for sure?",
        },
        options: [
            {
                title: "Yes",
                description: "We should do whatever has the most expected value.",
                nextId: 3,
                nextType: "question"
            },
            {
                title: "No",
                description: "We should make sure we are making a difference.",
                nextId: 4,
                nextType: "question"
            }
        ]
    },
    3: {
        body: {
            title: "When do you want to help?",
            description: "Should we restrict our attention to the nextId few decades, perhaps due to an obligation to our generation, or because we can't reliably affect the future? Or is it worth planning for the very long-term?",
        },
        options: [
            {
                title: "Long Run",
                description: "Future people are just as valuable and we can help them",
                nextId: 10, 
                nextType: "question"
            },
            {
                title: "Lifetime",
                description: "We should focus on the nextId few decades",
                nextId: 4, 
                nextType: "question"
            }
        ]
    },
    4: {
        body: {
            title: "Focus on measurable goals?",
            description: "Should we focus on projects wher eit is feasible to measure our impact and compare it to that of alternative projects?\n This division is not sharp, so we suggest you also take a look at the path you don't choose, just in case.",
        },
        options: [
            {
                title: "Yes",
                description: "Measurable projects allow us to continually improve our impact",
                nextId: 5, 
                nextType: "question"
            },
            {
                title: "No",
                description: "Hard-to-measure projects are more likely to be neglected by others",
                nextId: 13, 
                nextType: "question"
            }
        ]
    }, 
    5: {
        body: {
            title: "How many animals per human?",
            description: "How many years of chicken suffering would we have to prevent, to do better than preventing one year of human suffering?\n We used chickens as a comparison because ~95% of farmed animals are chickens.",
        },
        options: [
            {
                title: "<10",
                description: "Animal pain is just as real as human pain, and just as morally relevant.",
                nextId: 6, nextType: "question"
            },
            {
                title: ">100",
                description: "Helping humans is better, perhaps because their minds are bigger or because it has additional indirect effects.",
                nextId: 7, nextType: "question"
            }
        ]
    },
    6: {
        body: {
            title: "Free-range farm worth living?",
            description: "Is an animal's life on a free-range better than never having been born?",
        },
        options: [
            {
                title: "No",
                description: "",
                nextId: 2, 
                nextType: "answer"
            },
            {
                title: "Yes",
                description: "",
                nextId: 1, 
                nextType: "answer"
            }            
        ]
    },
    7: {
        body: {
            title: "Focus on opportunity or health",
            description: "Generally speaking, is it better for us to focus on reducing poverty and providing opportunities or on preventing death and suffering? Or on something else?",
        },
        options: [
            {
                title: "Other",
                description: "",
                nextId: 5, 
                nextType: "answer"
            },
            {
                title: "Opportunity",
                description: "",
                nextId: 8, 
                nextType: "question"
            },
            {
                title: "Health",
                description: "",
                nextId: 9, 
                nextType: "question"
            }
        ]
    }, 
    8: {
        body: {
            title: "Standard of living, or education?",
            description: "According to currently avaialable statistics there are some charities that can do the following for each $3,500 they receive.",
        },
        options: [
            {
                title: "Fighting Poverty",
                description: "Double the income of three families for a year.",
                nextId: 4, 
                nextType: "answer"
            },
            {
                title: "Providing Education",
                description: "Pay for 10 years of school for 3 children.",
                nextId: 5, 
                nextType: "answer"
            }
        ]
    },
    9: {
        body: {
            title: "Preventing death or suffering?",
            description: "According to currently available statistics, there are charities that can do the following for each $3,500 they receive: [add correct number]",
        },
        options: [
            {
                title: "Death",
                description: "Prevent one child from dying from malaria",
                nextId: 13, 
                nextType: "answer"
            },
            {
                title: "Suffering",
                description: "Provide 10 years of vitamins to 1000 people",
                nextId: 14, 
                nextType: "answer"
            }
        ]
    },
    10: {
        body: {
            title: "More generations better?",
            description: "People probably won't be around forever. All other things being equal, is it significantly worse for extinction to happen sooner rather than later.",
        },
        options: [
            {
                title: "Yes",
                description: "It would be disaster to miss out on a long-lasting future",
                nextId: 14, 
                nextType: "question"
            },
            {
                title: "No",
                description: "Dying is bad, but never being born isn't.",
                nextId: 11, 
                nextType: "question"
            }
        ]
    }, 
    11: {
        body: {
            title: "Can we permanently improve society?",
            description: "Can we make any kind of improvement to society that will make an extremely long-lasting difference?\n(Even if our improvement itself doesn't last, it might help society successffully navigate through a difficult period.)",
        },
        options: [
            {
                title: "No",
                description: "Eventually either the change will be erased with time, or would happen naturally",
                nextId: 12, nextType: "question"
            },
            {
                title: "Yes",
                description: "We can make improvements that will last a very long time.",
                nextId: 15, 
                nextType: "question"
            },
            {
                title: "Yes",
                description: "Our changes could last long enough to improve our long run trajectory.",
                nextId: 15, 
                nextType: "question"
            }
        ]
    },
    12: {
        body: {
            title: "Permanent environmental damage possible?",
            description: "Is there a chance that something (like runaway climate change or nuclear winter) could make life much harder, not just in the nextId century but for thousands of years?",
        },
        options: [
            {
                title: "No",
                description: "No significant chance of damage that lasting",
                nextId: 4, 
                nextType: "question"
            },
            {
                title: "Yes",
                description: "The welfare of hundreds of generations is endangered",
                nextId: 12, 
                nextType: "answer"
            },
        ]
    },
    13: {
        body: {
            title: "This is hard. Which is more important?",
            description: "The ethical and empirical assumptions we have discussed so far do not pick out a single focus, because there are now too many relevant factors to put in flow form. The magnitude of various problems must be weighted against their tractability and neglectedness, with no single question on which the decision clearly pivots. here are some suggestions for causes to look into.",
        },
        options: [
            {
                title: "Other",
                description: "",
                nextId: 3, 
                nextType: "question"
            },
            {
                title: "Human Rights",
                description: "",
                nextId: 6, 
                nextType: "answer"
            },
            {
                title: "Preventing Global Catastrophe",
                description: "",
                nextId: 7, 
                nextType: "answer"
            },
            {
                title: "Expanding Human Knowledge",
                description: "",
                nextId: 8, 
                nextType: "answer"
            }

        ]
    }, 
    14: {
        body: {
            title: "Can we do something about existential risk?",
            description: "Can we reduce our chance of extinction in the future (e.g. by building institutions for the purpose), even a little bit?",
        },
        options: [
            {
                title: "No",
                description: "The risks are so remote that we cannot have a meaninful effect on them.",
                nextId: 11,
                nextType: "question"
            },
            {
                title: "Yes",
                description: "We can do something now to significantly lower the risk in the future.",
                nextId: 11,
                nextType: "answer"
            }
        ]
    },
    15: {
        body: {
            title: "Which is more important?",
            description: "How can we have a greater effect in the long run: by improving institutions, by improving societal morals or values, or by increasing human knowledge?",
        },
        options: [
            {
                title: "Knowledge",
                description: "",
                nextId: 8, 
                nextType: "answer"
            },
            {
                title: "Values",
                description: "",
                nextId: 9, 
                nextType: "answer"
            },
            {
                title: "Institutions",
                description: "",
                nextId: 10, 
                nextType: "answer"
            }
        ]
    },
 }

const answer = {
    0: {
        title: "Your specific responsibility",
        description: "If you have an overriding obligation towards a particular group or cause, then you should follow that. If you have multiple obligations, or are considering exploring additional cause areas, you might find the reaminder of this flow helpful.",
    },
    1: {
        title: "Reducing Animal Suffering",
        description: "Although raising animals for food can be done in a humane way, factory farming causes a great deal of unnecessary suffering.<ul><li>We can boycott or regulate factory farms.</li><li>We can boycott or regulate fish farms.</li></ul>",
    },
    2: {
        title: "Preventing Animal Death",
        description: "The sheer number of animals being born into lives of great suffering is staggering.<ul><li>We can promote vegetarianism or veganism to reduce meat consumption.</li><li>We can develop better artificial meat to reduce demand for farmed animals.</li></ul>",
    },
    3: {
        title: "Other",
        description: "We probably missed a few.",
    },
    4: {
        title: "Living Standards",
        description: "About one billion people live on less than $1.25 a day. Given systematic inequalities and current government policies, legislative changes or direct interventions could dramatically improve their quality of life for relatively little cost.<ul><li>Governments can be lobbied to provide basic services and infrastructure to the people who need it most.</li><li>Services and infrastructure can in some cases be provided directly by NGO's supported by private donations.</li><li>Even giving money directly to disadvantaged communities, when properly implemented, can result in significant returns on investment.",
    },
    5: {
        title: "Education",
        description: "In many countries education is scarce, particularly for girls. Schools are often poorly equipped and understaffed. As a result hundreds of millions are illeterate and find it extremely difficult to escape poverty.<ul><li>Low-cost private schools in Lagos cost an average of $35 per pupil per term.</li><li>The annual salary of a teacher in Niger is about $1,500</li><li>Deworming children allows them to attend school more and leads to better life outcomes ater on.</li></ul>",
    },
    6: {
        title: "Human Rights",
        description: "For many people, the world is an unfriendly and unsafe place due to the violent nad oppressive behavior of others. For some people, such as slaves, things are even worse. Moreover, solving these problems will likely have beneficial indirect effect for years to come.<ul><li>We can fund and advise citizens in totalitarian regimes, giving them the tools to resist and/or escape.</li><li>We can work with non-totalitarian governments to legislate against criminal abuses they have thus far ignored.</li><li>We can advocate for many kinds of structural change in political and economic systems</li></ul>",
    },
    7: {
        title: "Preventing Catastrophe",
        description: "Global catastrophes are likely to be neglected, because many are unprecedented and because their effects are spread thinly across many countries.<ul><li>Climate change will probably cause massive casualties due to famine, flooding, and refugees.</li><li>Epidemologicsts predict that a natural pandemic will happen eventually and kill a hundred million people. An artifical one might be worse.</li><li>Some consider aging a catastrophe: it kills millions every year, and far more money goes towards fighting the symptoms than researching a cure.</li><li>Some consider wild animal suffering a catastrophe; many millions of animals are eaten alive or die of starvation daily.</li>",
    },
    8: {
        title: "Expanding Human Knowledge",
        description: "Research is usally the sort of thing that would be done eventually by someone else, son in that sense it isn't a long-lasting improvement. However, sometimes having improved knowledge just a few years or decades sooner makes all the difference.<ul><li>Inventing alternative energy sources before oil scarcity escalates international conflict</li><li>Inventing better agricultural methods to counteract the effects of climate change on food production.</li></ul>",
    },
    9: {
        title: "Better Values and Morals",
        description: `The values people live by could have a significant impact on our long-run trajectory. For exmpale, perhaps "value lock-in" will happen in the nextId century or two: new technology or institutions will prevent values from drifting or changing further. If so, we should make societal values as good as possible before then.<ul><li>Racism and other forms of discrimination might persist indefinitely due to people not having enough empathy, and there may be something we can do to prevent that.</li><li>If people are more altruistic, they may be more willing to collaborate and solve global problems</li><li>Nonhuman beings might end up being given too few rights or too much power unless a moral consensus is reached early.</li>`
    },
    10: {
        title: "Better Institutions",
        description: "Institutions have been crucial in guiding the development of society so far; they will probably continue to do so.<ul><li>We might imporve international cooperation to make it easier to regulate dangerous technologies and avoid arms races</li><li>We ight improve government transparency and media standards to prevent the creation of a permanent totalitarian regime enabled by new technologies</li><li>We might try to found long-lasting institutions that we think are good, that for whatever reaosn might never be created in the future.</li>",
    },
    11: {
        title: "Reducing Existential Risk",
        description: "Since more generations would be better and since civilization s could last for thousands or millions of years, the value fof the future is very large. Even a tiny decrease in the porbabiliy of extincition has tremendous value.<ul><li>Improving international cooperation and raising awareness about risk in general to prepare for unforeseen new technologies.</li><li>Guarding against threats that might undo this cooperation.</li><li>Working to understand and prevent extreme runaway climate change.</li><li>Raising awareness about AI risk and researching safety methods</li></ul>",
    },
    12: {
        title: "Preventing Permanent Environmental Damage",
        description: "Though civilization can probably recover from anything in ten thousand years that's still thousands of years to multiply the badness by. Even if there is only a small chance that we can prevent damage like this, it is worth it.<ul><li>Feedback effects like melting permafrost releasing methane might turn most of the planet into desert.</li><li>Depleted natural resources could make rebuilding society after a catastrophe more difficult</li></ul>",
    },
    13: {
        title: "Saving Lives",
        description: "In developing nations, thousands of people die every day from easily preventable diseases. <ul><li>Anti-mosquito bednets can be bought and distributed: every $3000 donated is estimated to prevent one child from dying of malaria.</li><li>Research can be conducted on neglected diseases, either for treatment, prevention, or cure</li></ul>"
    },
    14: {
        title: "Golbal Health",
        description: "Millions of people suffer from diseases or vitamin deficiencies that can be easily prevented. Millions more lack access to clean water and proper nutrition.<ul><li>Essential vitamins and nutrients can be distributed in poor areas, costing #0.30 per person per year, and helping recipients to grow up smarter and healthier.</li><li>Governments can be lobbied to raise awareness about the economic payoff of healthcare investments.</li><li>Research can be conducted to prevent, treat, and cure neglected diseases</li>"
    }
}

export default {
    question,
    answer
}