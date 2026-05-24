import { valueSuffixer } from '#src/utils/valueSuffixer/index';

export interface AsyncValueReader {
    readValue(key: string): Promise<null | string>;
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
