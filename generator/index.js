module.exports = (api, options) => {

    switch (options.breakepointType) {
        case 'bootstrap':
            api.render('./bootstrap', {
                ...options,
            });
            break;
        case 'vuetify':
            api.render('./vuetify', {
                ...options,
            });
            break;
        case 'material':
            api.render('./material', {
                ...options,
            });
            break;
    }

    api.injectImports(api.entryFile, `import TestComponent from '@/components/TestComponent'`)

    api.onCreateComplete(() => {
        const fs = require('fs')
        let contentMain = fs.readFileSync(api.entryFile, {
            encoding: 'utf-8'
        })
        let lines = contentMain.split(/\r?\n/g).reverse();
        // inject import
        const lastImportIndex = lines.findIndex(line => line.match(/^import/));
        lines[lastImportIndex] += `\nVue.component('test-component', TestComponent);`

        contentMain = lines.reverse().join('\n');

        fs.writeFileSync(api.entryFile, contentMain, {
            encoding: 'utf-8'
        });
    });

};