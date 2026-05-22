import valueSuffixerConfig from '#src/utils/value-suffixer-config.json' with { type: 'json' };

export const defaultValueSuffix = valueSuffixerConfig.defaultSuffix;

// Тестовый модуль для проверки импортов, JSON-модулей и тестов
export const valueSuffixer = {
    append(value: string, suffix = defaultValueSuffix): string {
        return `${value}${suffix}`;
    },
};
