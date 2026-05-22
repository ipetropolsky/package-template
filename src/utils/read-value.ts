import { valueSuffixer } from '#src/utils/value-suffixer';

export interface AsyncValueReader {
    readValue(key: string): Promise<string | null>;
}

// Тестовый модуль для проверки импортов и тестов
export const readValue = async (
    reader: AsyncValueReader,
    key: string,
    fallback: string,
    suffix = ''
): Promise<string> => {
    const value = await reader.readValue(key);

    return valueSuffixer.append(value ?? fallback, suffix);
};
