import { Choice } from '../models/choice.interface';

const ChoiceList: Choice[] = [
    {TopicNum: '0',ChoiceText: 'Accounting Advice and Assistance', NextTopic: '1'},
    {TopicNum: '0',ChoiceText: 'Advisory', NextTopic: '2'},
    {TopicNum: '0',ChoiceText: 'Tax and Legal', NextTopic: '3'},
    {TopicNum: '0',ChoiceText: 'Technology', NextTopic: '4'},
    {TopicNum: '2',ChoiceText: 'Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1',ChoiceText: 'Advice on Leading Practices', NextTopic: '2.1.1'},
    {TopicNum: '2.1',ChoiceText: 'Gap Analysis', NextTopic: '2.1.2'},
    {TopicNum: '2.1',ChoiceText: 'Gap Prioritization/Opportunity Matrix', NextTopic: '2.1.3'},
    {TopicNum: '2.1',ChoiceText: 'Activity Prioritization/Sequencing', NextTopic: '2.1.4'},
    {TopicNum: '2.1',ChoiceText: 'Document Current State', NextTopic: '2.1.5'},
    {TopicNum: '2.1',ChoiceText: 'Facilitate Assessment Workshops', NextTopic: '2.1.6'},
    {TopicNum: '2.1',ChoiceText: 'Cost Analysis', NextTopic: '2.1.7'},
    {TopicNum: '2.1',ChoiceText: 'Benchmarking', NextTopic: '2.1.8'},
    {TopicNum: '2',ChoiceText: 'Future State Design and Implementation', NextTopic: '2.2'},
    {TopicNum: '2.2',ChoiceText: 'Attend Design/Implementation Workshops', NextTopic: '2.2.1'},
    {TopicNum: '2.2',ChoiceText: 'Document Future State Design Plans', NextTopic: '2.2.2'},
    {TopicNum: '2.2',ChoiceText: 'Facilitate Design/Implementation workshops', NextTopic: '2.2.3'},
    {TopicNum: '2.2',ChoiceText: 'Financial Related Design Plans', NextTopic: '2.2.4'},
    {TopicNum: '2.2',ChoiceText: 'Generic Design Plans', NextTopic: '2.2.5'},
    {TopicNum: '2.2',ChoiceText: 'Implement Third Party Designed Financial System', NextTopic: '2.2.6'},
    {TopicNum: '2.2',ChoiceText: 'Non-Financial and Non-Risk Management Related Design Plans', NextTopic: '2.2.7'},
    {TopicNum: '2.2',ChoiceText: 'Prospective Financial Information', NextTopic: '2.2.8'},
    {TopicNum: '2.2',ChoiceText: 'Review Client Prepared Design Plans', NextTopic: '2.2.9'},
    {TopicNum: '2.2',ChoiceText: 'Risk Mangement Related Design Plans', NextTopic: '2.2.10'},
    {TopicNum: '2.2',ChoiceText: 'Technical Practice Aids', NextTopic: '2.2.11'},
    {TopicNum: '2',ChoiceText: 'Monitoring', NextTopic: '2.3'},
    {TopicNum: '2.3',ChoiceText: 'Post Design/Implementation Review', NextTopic: '2.3.1'},
    {TopicNum: '2.3',ChoiceText: 'Ongoing monitoring', NextTopic: '2.3.2'},
    {TopicNum: '2.3',ChoiceText: 'Review Planned Monitoring Process', NextTopic: '2.3.3'},
    {TopicNum: '2.3',ChoiceText: 'Facilitate Lessons Learned Workshops', NextTopic: '2.3.4'},
    {TopicNum: '2',ChoiceText: 'Project Management', NextTopic: '2.4'},
    {TopicNum: '2',ChoiceText: 'Resource Skills Assessment', NextTopic: '2.5'},
    {TopicNum: '2.5',ChoiceText: 'General Advice', NextTopic: '2.5.1'},
    {TopicNum: '2.5',ChoiceText: 'Advice on Leading Practices', NextTopic: '2.5.2'},
    {TopicNum: '2',ChoiceText: 'Training and Communications', NextTopic: '2.6'},
    {TopicNum: '2.6',ChoiceText: 'Conduct General/Industry training Sessions', NextTopic: '2.6.1'},
    {TopicNum: '2.6',ChoiceText: 'Provide General Training Materials', NextTopic: '2.6.2'},
    {TopicNum: '2.6',ChoiceText: 'Provide Financial Related Tailored Training', NextTopic: '2.6.3'},
    {TopicNum: '2.6',ChoiceText: 'Provide Risk Management Related Tailored Training', NextTopic: '2.6.4'},
    {TopicNum: '2.6',ChoiceText: 'Provide Non-Financial and Non-Risk Management Related Tailored Training', NextTopic: '2.6.5'},
    {TopicNum: '2.6',ChoiceText: 'Review Client Developed Tailored Training', NextTopic: '2.6.6'},
    {TopicNum: '2.6',ChoiceText: 'Communications Plans Design/ Implementation', NextTopic: '2.6.7'},
    {TopicNum: '2.6',ChoiceText: 'Observations and Recommendations on Communications Plans', NextTopic: '2.6.8'},
    {TopicNum: '2.6',ChoiceText: 'Present Communications on Behalf of Client', NextTopic: '2.6.9'},
    {TopicNum: '2.6',ChoiceText: 'Participate in Client Led Communications', NextTopic: '2.6.10'},
    {TopicNum: '2',ChoiceText: 'Mergers and Acquisitions', NextTopic: '2.7'},
    {TopicNum: '2.7',ChoiceText: 'Acquisition  Advisory', NextTopic: '2.7.1'},
    {TopicNum: '2.7',ChoiceText: 'Divestment Advisory', NextTopic: '2.7.2'},
    {TopicNum: '2.7',ChoiceText: 'Capital Markets', NextTopic: '2.7.3'},
    {TopicNum: '2',ChoiceText: 'Debt Advisory Services', NextTopic: '2.8'},
    {TopicNum: '2',ChoiceText: 'Valuations', NextTopic: '2.9'},
    {TopicNum: '2.9',ChoiceText: 'Private Environment', NextTopic: '2.9.1'},
    {TopicNum: '2.9',ChoiceText: 'Valuation services for accounting purposes', NextTopic: '2.9.2'},
    {TopicNum: '2.9',ChoiceText: 'Audit support role', NextTopic: '2.9.3'},
    {TopicNum: '2.9',ChoiceText: 'Valuations for tax purposes', NextTopic: '2.9.4'},
    {TopicNum: '2.9',ChoiceText: 'Independent Expert Report', NextTopic: '2.9.5'},
    {TopicNum: '2.9',ChoiceText: 'Relying on the work of an audit client', NextTopic: '2.9.6'},
    {TopicNum: '2',ChoiceText: 'Investment Consulting', NextTopic: '2.10'},
    {TopicNum: '2.10',ChoiceText: 'Investment Strategies', NextTopic: '2.10.1'},
    {TopicNum: '2.10',ChoiceText: 'Dispute Advisory', NextTopic: '2.10.2'},
    {TopicNum: '2',ChoiceText: 'Restructuring Services', NextTopic: '2.11'},
    {TopicNum: '2.11',ChoiceText: 'Insolvency – insolvent entity is an audit client', NextTopic: '2.11.1'},
    {TopicNum: '2.11',ChoiceText: 'Insolvency – creditor is an audit client', NextTopic: '2.11.2'},
    {TopicNum: '2.11',ChoiceText: 'Members Voluntary Liquidation (MVL)', NextTopic: '2.11.3'},
    {TopicNum: '2',ChoiceText: 'Actuarial Services', NextTopic: '2.12'},
    {TopicNum: '2.12',ChoiceText: 'Appointed Actuary', NextTopic: '2.12.1'},
    {TopicNum: '2.12',ChoiceText: 'External Peer Review Actuary', NextTopic: '2.12.2'},
    {TopicNum: '2.12',ChoiceText: 'Actuarial Advisory', NextTopic: '2.12.3'},
    {TopicNum: '2.12',ChoiceText: 'Actuarial Financial Statement Support Services', NextTopic: '2.12.4'},
    {TopicNum: '2',ChoiceText: 'Demographic Advisory Services', NextTopic: '2.13'},
    {TopicNum: '2.13',ChoiceText: 'Prepare Market Research Studies', NextTopic: '2.13.1'},
    {TopicNum: '2.13',ChoiceText: 'Provide Conclusions on Market Research Studies', NextTopic: '2.13.2'},
    {TopicNum: '2',ChoiceText: 'Executive Search and Selection', NextTopic: '2.14'},
    {TopicNum: '2',ChoiceText: 'Forensic', NextTopic: '2.15'},
    {TopicNum: '2.15',ChoiceText: 'Identify Executives', NextTopic: '2.15.1'},
    {TopicNum: '2.15',ChoiceText: 'Review Applications/Interview Candidates', NextTopic: '2.15.2'},
    {TopicNum: '2.15',ChoiceText: 'Executive Remuneration', NextTopic: '2.15.3'},
    {TopicNum: '2.1.1',ChoiceText: 'SEC', NextTopic: '2.1.1.1'},
    {TopicNum: '2.1.1',ChoiceText: 'IESBA PIE', NextTopic: '2.1.1.2'},
    {TopicNum: '2.1.1',ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.1.3'},
    {TopicNum: '2.1.1',ChoiceText: 'EU PIE', NextTopic: '99'},
    {TopicNum: '2.1.2',ChoiceText: 'SEC', NextTopic: '2.1.2.1'},
    {TopicNum: '2.1.2',ChoiceText: 'IESBA PIE', NextTopic: '2.1.2.2'},
    {TopicNum: '2.1.2',ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.2.3'},
    {TopicNum: '2.1.2',ChoiceText: 'EU PIE', NextTopic: '99'},
    {TopicNum: '2.1.3',ChoiceText: 'SEC', NextTopic: '2.1.3.1'},
    {TopicNum: '2.1.3',ChoiceText: 'IESBA PIE', NextTopic: '2.1.3.2'},
    {TopicNum: '2.1.3',ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.3.3'},
    {TopicNum: '2.1.3',ChoiceText: 'EU PIE', NextTopic: '99'},
    {TopicNum: '2.1.4',ChoiceText: 'SEC', NextTopic: '2.1.4.1'},
    {TopicNum: '2.1.4',ChoiceText: 'IESBA PIE', NextTopic: '2.1.4.2'},
    {TopicNum: '2.1.4',ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.4.3'},
    {TopicNum: '2.1.4',ChoiceText: 'EU PIE', NextTopic: '99'},
    {TopicNum: '2.1.1.1',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.1.2',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.1.3',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.2.1',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.2.2',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.2.3',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.3.1',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.3.2',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.3.3',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.4.1',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.4.2',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'},
    {TopicNum: '2.1.4.3',ChoiceText: 'Return to Current State Analysis', NextTopic: '2.1'}
        ];

export const CHOICE_LIST = ChoiceList;
