module.exports = {
    createPromptDescription(data, key) {
        switch (key) {
            case 'xs':
                return `range: < ${data[key]}px`;
            case 'sm':
                return `range: ${data.xs}px >< ${data[key]}px`;
            case 'md':
                return `range: ${data.sm}px >< ${data[key]}px`;
            case 'lg':
                return `range: ${data.md}px >< ${data[key]}px`;
            case 'xl':
                return `range: > ${data[key]}px`;
            default:
                return `${key} is not handled`;
        }
    },
    createPromptObject(data, key) {
        return {
            name: key,
            type: 'input',
            message: `Define value for ${key}`,
            value: data[key],
            description: this.createPromptDescription(data, key),
            group: 'Breakpoints settings',
        }
    },
    createPrompts(data) {
        let promptsList = [];

        Object.keys(data).map(key => {
            const promptObject = this.createPromptObject(data, key);
            promptsList.push(promptObject);
        });

        return promptsList;
    }
}