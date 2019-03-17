const utils = require('./utils');

module.exports = api => {
    api.describeConfig({
        id: 'vue-cli-plugin-mobile-support-breakpoint-config-id',
        name: 'Window Resize Configuration',
        description: 'This config defines breakpoints for window resize mixin',
        files: {
            breakpointsConfig: {
                js: ['./src/mixins/windowResize/breakpointsConfig.js']
            }
        },
        icon: '/_plugin/vue-cli-plugin-mobile-support/logo.png',
        onRead: ({
            data
        }) => {
            return {
                prompts: utils.createPrompts(data.breakpointsConfig)
            }
        },
        async onWrite({
            api,
            prompts
        }) {
            const result = {}
            for (const prompt of prompts) {
                result[`${prompt.id}`] = await api.getAnswer(prompt.id)
            }
            api.setData('breakpointsConfig', result)
        }
    })
}