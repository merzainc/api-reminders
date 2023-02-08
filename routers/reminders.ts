import { Router } from "express";
import Reminder from '../models/reminder';

const router = Router();
const reminders: Reminder[] = [
    { id: 1, title: 'Cooking sadza and beef', completed: true },
    { id: 2, title: 'Doing exercises tomorrow', completed: false },
    { id: 3, title: 'Archive vidly app repository', completed: false },
    { id: 4, title: 'Update reminders-api codebase', completed: true },
];

interface ReminderDTO {
    title: string
};

router.get('/', (req, res) => {
    res.status(200).json(reminders);
});

router.post('/', (req, res) => {
    const reminder = new Reminder(reminders.length + 1, (req.body as ReminderDTO).title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});

router.delete('/:id', (req, res) => {
    const reminder = reminders.find(r => r.id === parseInt(req.params.id));
    if (reminder === undefined) return res.status(400).send('No reminder was found with given ID.');
    reminders.splice(reminders.indexOf(reminder), 1);
    res.status(200).json(reminder);
});
export default router;