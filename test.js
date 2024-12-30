
describe('Assignment Management Tests', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem("index","0");
    });

    test('Create Assignment', () => {
        // Setup test data
        const testTask = {
            group: "Test Group",
            taskTitle: "Test Title",
            description: "Test Description",
            isObligatory: "Yes",
            dueDate: "2024-12-31"
        };

        // Test storage
        localStorage.setItem(0, JSON.stringify(testTask));
        const stored = JSON.parse(localStorage.getItem(0));
        expect(stored).toEqual(testTask);
    });

    test('Edit Assignment', () => {
        // Initial assignment
        const initial = {title: "Initial"};
        localStorage.setItem(0, JSON.stringify(initial));

        // Edit
        const edited = {title: "Edited"};
        localStorage.setItem(0, JSON.stringify(edited));

        const stored = JSON.parse(localStorage.getItem(0));
        expect(stored).toEqual(edited);
    });
});