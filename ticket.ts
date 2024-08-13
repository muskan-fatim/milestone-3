#!/usr/bin/env node
import inquirer from 'inquirer';

interface Event {
    title: string;
    date: string;
    time: string;
    city: string;
    ticketStock: number;
    price: number;
}

let events: Event[] = [];

// Admin Functions
const adminLogin = async () => {
    const q = await inquirer.prompt([
        { name: 'email', message: 'Enter your email', type: 'input' },
        { name: 'password', message: 'Enter your password', type: 'password' }
    ]);

    const adminEmail = 'admin@example.com';
    const adminPassword = '12345';

    if (q.email === adminEmail && q.password === adminPassword) {
        console.log('Welcome, Admin!');
        await adminMenu();
    } else {
        console.log('Invalid credentials!');
    }
};

const adminMenu = async () => {
    const choice = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            choices: ['Create Event', 'Delete Event', 'List Events', 'Exit']
        }
    ]);

    if (choice.action === 'Create Event') {
        await createEvent();
    } else if (choice.action === 'Delete Event') {
        await deleteEvent();
    } else if (choice.action === 'List Events') {
        await listEvents();
    } else if (choice.action === 'Exit') {
        console.log('Goodbye, Admin!');
        return;
    }

    await adminMenu();
};

const createEvent = async () => {
    const event = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter event title:' },
        { type: 'input', name: 'date', message: 'Enter event date (YYYY-MM-DD):' },
        { type: 'input', name: 'time', message: 'Enter event time (HH:MM):' },
        { type: 'input', name: 'city', message: 'Enter event city:' },
        { type: 'number', name: 'ticketStock', message: 'Enter number of tickets available:' },
        { type: 'number', name: 'price', message: 'Enter ticket price:' }
    ]);

    const currentDate = new Date();
    const eventDate = new Date(event.date);
    if (eventDate <= currentDate) {
        console.log('Event date must be in the future.');
        return;
    }

    events.push(event);
    console.log('Event created successfully!');
};

const deleteEvent = async () => {
    const choices = events.map((event, index) => ({
        name: `${event.title} in ${event.city} on ${event.date} at ${event.time}`,
        value: index
    }));

    const answer = await inquirer.prompt([{
        name: 'eventIndex',
        type: 'list',
        choices
    }]);

    events.splice(answer.eventIndex, 1);
    console.log('Event deleted successfully!');
};

const listEvents = async () => {
    console.log('Available Events:');
    events.forEach((event, index) => {
        console.log(`${index + 1}. ${event.title} in ${event.city} on ${event.date} at ${event.time} - Tickets: ${event.ticketStock} - Price: $${event.price}`);
    });
};

// User Functions
const userSignup = async () => {
    const q = await inquirer.prompt([
        { name: 'name', message: 'Enter your name', type: 'input' },
        { name: 'email', message: 'Enter your email', type: 'input' },
        { name: 'password', message: 'Enter your password', type: 'password' }
    ]);

    console.log(`Welcome ${q.name}, you have successfully signed up!`);
    await userMenu();
};

const userLogin = async () => {
    const q = await inquirer.prompt([
        { name: 'email', message: 'Enter your email', type: 'input' },
        { name: 'password', message: 'Enter your password', type: 'password' }
    ]);

    // Here you would check the credentials against a database or a stored user list
    console.log('Login successful!');
    await userMenu();
};

const userMenu = async () => {
    const choice = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            choices: ['View Events', 'Purchase Tickets', 'Exit']
        }
    ]);

    if (choice.action === 'View Events') {
        await listEvents();
    } else if (choice.action === 'Purchase Tickets') {
        await purchaseTickets();
    } else if (choice.action === 'Exit') {
        console.log('Goodbye!');
        return;
    }

    await userMenu();
};

const purchaseTickets = async () => {
    const availableEvents = events.filter(event => event.ticketStock > 0);
    if (availableEvents.length === 0) {
        console.log('No available events to purchase tickets.');
        return;
    }

    const choices = availableEvents.map((event, index) => ({
        name: `${event.title} in ${event.city} on ${event.date} at ${event.time} - Tickets: ${event.ticketStock} - Price: $${event.price}`,
        value: index
    }));

    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'eventIndex',
            message: 'Select an event to purchase tickets for:',
            choices
        },
        {
            type: 'number',
            name: 'numTickets',
            message: 'How many tickets would you like to purchase?',
        }
    ]);

    if (answer.numTickets <= 0) {
        console.log("Number of tickets must be greater than 0");
        return;
    }

    const event = availableEvents[answer.eventIndex];
    if (answer.numTickets > event.ticketStock) {
        console.log('Not enough tickets available.');
        return;
    }

    event.ticketStock -= answer.numTickets;
    console.log(`Successfully purchased ${answer.numTickets} tickets for ${event.title}.`);
};

// Guest Functions
const guestMenu = async () => {
    const choice = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            choices: ['View Events', 'Exit']
        }
    ]);

    if (choice.action === 'View Events') {
        await listEvents();
    } else if (choice.action === 'Exit') {
        console.log('Goodbye!');
        return;
    }

    await guestMenu();
};

// Main Menu
const mainMenu = async () => {
    const choice = await inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            message: 'Select your role:',
            choices: ['Admin', 'User', 'Guest', 'Exit']
        }
    ]);

    if (choice.role === 'Admin') {
        await adminLogin();
    } else if (choice.role === 'User') {
        const userChoice = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                choices: ['Sign Up', 'Log In']
            }
        ]);

        if (userChoice.action === 'Sign Up') {
            await userSignup();
        } else if (userChoice.action === 'Log In') {
            await userLogin();
        }
    } else if (choice.role === 'Guest') {
        await guestMenu();
    } else if (choice.role === 'Exit') {
        console.log('Goodbye!');
        return;
    }

    await mainMenu();
};

mainMenu();
