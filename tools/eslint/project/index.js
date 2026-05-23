import importWithoutExtensionRule from '#tools/eslint/project/importWithoutExtensionRule';
import jsonImportAttributeRule from '#tools/eslint/project/jsonImportAttributeRule';

export default {
    rules: {
        'import-without-extension': importWithoutExtensionRule,
        'json-import-attribute': jsonImportAttributeRule,
    },
};
