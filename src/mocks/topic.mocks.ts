import { Topic} from '../models/topic.interface';

const TopicList: Topic[] = [
        {
        TopicNum: 0,
        TopicTitle: 'Services',
        TopicType: '',
        TopicText: '',
        TopicText2: '',

        TopicLink: ''
        },
        {
        TopicNum: 1,
        TopicTitle: 'Advisory',
        TopicType: '',
        TopicText: '',
        TopicText2: '',
        TopicLink: '',
        },
        {
            TopicNum: 2,
            TopicTitle: 'Current State Analysis',
            TopicType: '',
            TopicText: '',
            TopicText2: '',
            TopicLink: '',
        },
        {
            TopicNum: 3,
            TopicTitle: 'Advice on Leading Practices',
            TopicType: 'Question',
            TopicText: 'identify leading practices and provide KPMG’s interpretation of such practice, including market standard examples (e.g. accounting research, IFRS and industry leading practices)?',
            TopicText2: '',
            TopicLink: '',
        },
        {
            TopicNum: 4,
            TopicTitle: 'Advice on Leading Practices',
            TopicType: 'Answer',
            TopicText: 'You can provide this service to an SEC audit client',
            TopicText2: '',
            TopicLink: '',
        },
    {
        TopicNum: 9999,
        TopicType: '',
        TopicText: 'That topic has not yet been entered into iCan. Please contact the system administrator.',
        TopicText2: '',
        TopicTitle: 'Error - Topic Not Found',
        TopicLink: ''
    }
];

export const TOPIC_LIST = TopicList;
