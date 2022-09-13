export const wait500 = async () => {
    return await new Promise((resolve) => setTimeout(resolve, 1000));
};