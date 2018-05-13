import { Choice } from '../models/choice.interface';

const ChoiceList: Choice[] = [
    {
        TopicNum: "0",
        ChoiceText: 'Accounting Advice and Assistance',
        NextTopic: "99"
    },
    {
        TopicNum: "0",
        ChoiceText: 'Advisory',
        NextTopic: "1"
    },
        {
            TopicNum: "1",
            ChoiceText: 'Current State Analysis',
            NextTopic: "2"
        },
            {
                TopicNum: "2",
                ChoiceText: 'Advice on Leading Practices',
                NextTopic: "3"
            },
                {
                    TopicNum: "3",
                    ChoiceText: 'SEC',
                    NextTopic: "4"
                },
                    {
                        TopicNum: "4",
                        ChoiceText: 'End',
                        NextTopic: "2"
                    },
                {
                    TopicNum: "3",
                    ChoiceText: 'IESBA PIE',
                    NextTopic: "5"
                },
                    {
                        TopicNum: "5",
                        ChoiceText: 'End',
                        NextTopic: "2"
                    },
               {
                    TopicNum: "3",
                    ChoiceText: 'IESBA Non-PIE',
                    NextTopic: "6"
                },
                {
                    TopicNum: "6",
                    ChoiceText: 'End',
                    NextTopic: "2"
                },
            {
                    TopicNum: "3",
                    ChoiceText: 'EU PIE',
                    NextTopic: "7"
                },
                {
                    TopicNum: "7",
                    ChoiceText: 'End',
                    NextTopic: "2"
                },
      {
                TopicNum: "2",
                ChoiceText: 'Gap Analysis',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Gap Prioritization/Opportunity Matrix',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Activity Prioritisation/Sequencing',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Document Current State',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Facilitate Assessment Workshops',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Cost Analysis',
                NextTopic: "99"
            },
            {
                TopicNum: "2",
                ChoiceText: 'Benchmarking',
                NextTopic: "99"
            },
      {
            TopicNum: "1",
            ChoiceText: 'Future State Design and Implementation',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Monitoring',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Project Management',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Resource Skills Assessment',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Training and Communications',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Mergers and Acquisitions',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Debt Advisory Services',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Valuations',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Investment Consulting',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Restructuring Services',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Actuarial Services',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Demographic Advisory Services',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Executive Search and Selection',
            NextTopic: "99"
        },
        {
            TopicNum: "1",
            ChoiceText: 'Forensic',
            NextTopic: "99"
        },
    {
        TopicNum: "0",
        ChoiceText: 'Tax and Legal',
        NextTopic: "99"
    },
    {
        TopicNum: "0",
        ChoiceText: 'Technology',
        NextTopic: "99"
    }
];

export const CHOICE_LIST = ChoiceList;
