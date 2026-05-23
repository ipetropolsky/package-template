const internalJsonImportPattern = /^#(?:src|test|tools)\/.+\.json$/;

function hasJsonAttribute(node) {
    return (
        Array.isArray(node.attributes) &&
        node.attributes.some(
            (attribute) =>
                attribute.type === 'ImportAttribute' &&
                attribute.key != null &&
                attribute.key.type === 'Identifier' &&
                attribute.key.name === 'type' &&
                attribute.value != null &&
                attribute.value.type === 'Literal' &&
                attribute.value.value === 'json'
        )
    );
}

function reportIfNeeded(context, node) {
    const sourceNode = node.source;

    if (
        sourceNode == null ||
        sourceNode.type !== 'Literal' ||
        typeof sourceNode.value !== 'string'
    ) {
        return;
    }

    if (!internalJsonImportPattern.test(sourceNode.value) || hasJsonAttribute(node)) {
        return;
    }

    context.report({
        fix(fixer) {
            return fixer.insertTextAfter(sourceNode, " with { type: 'json' }");
        },
        message: "JSON imports must include `with { type: 'json' }`.",
        node,
    });
}

const jsonImportAttributeRule = {
    create(context) {
        return {
            ImportDeclaration(node) {
                reportIfNeeded(context, node);
            },
        };
    },
    meta: {
        docs: {
            description: 'Require import attributes for internal JSON imports',
        },
        fixable: 'code',
        schema: [],
        type: 'suggestion',
    },
};

export default jsonImportAttributeRule;
