const tasks = [
    {
        id: 1,
        text: "some task one",
        date: "January 25th 2021 10:25 AM",
        reminder: true
    },
    {
        id: 2,
        text: "some task two",
        date: "January 29th 2021 4:55 PM",
        reminder: false
    }
];


export default function getTasks() {
    return tasks;
}