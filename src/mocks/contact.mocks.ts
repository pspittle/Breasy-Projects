import { Contact } from '../models/contacts.interface';

const ContactList: Contact[] = [
    {
        Name: 'Briana Procter',
        Title: 'Chief Getter of S*** Done',
        Department: 'Risk Team',
        Email: 'breasy@internode.on.net'
    },
    {
        Name: 'Joe Bloggs',
        Title: 'Lowly Worker Bee',
        Department: 'Ionic Development Support',
        Email: 'lowly@it.net'
    },
    {
        Name: 'Roger Risktaker',
        Title: 'Director of Risk',
        Department: 'KPMG Risk Team',
        Email: 'roger@risky.com'
    }
];

export const CONTACT_LIST = ContactList;
