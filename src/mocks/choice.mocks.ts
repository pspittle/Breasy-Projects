import { Choice } from '../models/choice.interface';

const ChoiceList: Choice[] = [
    {
        TopicNum: 0,
        ChoiceText: 'Browse Topics',
        NextTopic: 3
    },
    {
        TopicNum: 3,
        ChoiceText: 'Accounting Advice and Assistance',
        NextTopic: 4
    },
    {
        TopicNum: 3,
        ChoiceText: 'Advisory',
        NextTopic: 23
    },
    {
        TopicNum: 3,
        ChoiceText: 'Tax and Legal',
        NextTopic: 68
    },
    {
        TopicNum: 3,
        ChoiceText: 'Technology',
        NextTopic: 71
    },
    {
        TopicNum: 3,
        ChoiceText: 'Test Topic',
        NextTopic: 71
    },
    {
        TopicNum: 71,
        ChoiceText: 'Test Topic Results',
        NextTopic: 71
    },
{
    TopicNum: 4,
    ChoiceText: 'Management Consulting, Risk Consulting or Deals',
    NextTopic: 5
},
{
    TopicNum: 4,
    ChoiceText: 'Audit or Assurance',
    NextTopic: 14
},
{
    TopicNum: 5,
    ChoiceText: 'Yes',
    NextTopic: 6
},
{
    TopicNum: 5,
    ChoiceText: 'No',
    NextTopic: 8
},
{
    TopicNum: 5,
    ChoiceText: "I don't know",
    NextTopic: 7
},
{
    TopicNum: 8,
    ChoiceText: 'Refer the opportunity to an accredited engagement leader, with whom you may be able to co-sign.',
    NextTopic: 11
},
{
    TopicNum: 8,
    ChoiceText: 'Get accredited for this one engagement',
    NextTopic: 9
},
{
    TopicNum: 8,
    ChoiceText: 'Become accredited ',
    NextTopic: 10
},
{
    TopicNum: 11,
    ChoiceText: 'Yes',
    NextTopic: 12
},
{
    TopicNum: 11,
    ChoiceText: 'No',
    NextTopic: 13
}
];

export const CHOICE_LIST = ChoiceList;
