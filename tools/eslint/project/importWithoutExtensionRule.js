function escapeForRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
}

function buildInternalAliasImportPattern(extensions) {
    const extensionsPattern = extensions.map(escapeForRegExp).join('|');

    return new RegExp(`^#(?:root|src|test|tools)\\/.+\\.(?:${extensionsPattern})$`, 'u');
}

function reportIfNeeded(context, sourceNode, internalAliasImportPattern, fileExtensionPattern) {
    if (
        sourceNode == null ||
        sourceNode.type !== 'Literal' ||
        typeof sourceNode.value !== 'string'
    ) {
        return;
    }

    if (!internalAliasImportPattern.test(sourceNode.value)) {
        return;
    }

    const fixedSpecifier = sourceNode.value.replace(fileExtensionPattern, '');
    const rawSource =
        typeof sourceNode.raw === 'string' ? sourceNode.raw : JSON.stringify(sourceNode.value);
    const quote = rawSource[0] === '"' ? '"' : "'";

    context.report({
        fix(fixer) {
            return fixer.replaceText(sourceNode, `${quote}${fixedSpecifier}${quote}`);
        },
        message: 'Use internal alias imports without .js or .ts extensions.',
        node: sourceNode,
    });
}

const importWithoutExtensionRule = {
    create(context) {
        const [options = {}] = context.options;
        const extensions = Array.isArray(options.extensions) ? options.extensions : ['js', 'ts'];
        const internalAliasImportPattern = buildInternalAliasImportPattern(extensions);
        const fileExtensionPattern = new RegExp(
            `\\.(?:${extensions.map(escapeForRegExp).join('|')})$`,
            'u'
        );

        return {
            ExportAllDeclaration(node) {
                reportIfNeeded(
                    context,
                    node.source,
                    internalAliasImportPattern,
                    fileExtensionPattern
                );
            },
            ExportNamedDeclaration(node) {
                reportIfNeeded(
                    context,
                    node.source,
                    internalAliasImportPattern,
                    fileExtensionPattern
                );
            },
            ImportDeclaration(node) {
                reportIfNeeded(
                    context,
                    node.source,
                    internalAliasImportPattern,
                    fileExtensionPattern
                );
            },
            ImportExpression(node) {
                reportIfNeeded(
                    context,
                    node.source,
                    internalAliasImportPattern,
                    fileExtensionPattern
                );
            },
        };
    },
    meta: {
        docs: {
            description: 'Enforce extensionless internal alias imports for TS/JS modules',
        },
        fixable: 'code',
        schema: [
            {
                additionalProperties: false,
                properties: {
                    extensions: {
                        items: {
                            minLength: 1,
                            type: 'string',
                        },
                        minItems: 1,
                        type: 'array',
                        uniqueItems: true,
                    },
                },
                type: 'object',
            },
        ],
        type: 'suggestion',
    },
};

export default importWithoutExtensionRule;
