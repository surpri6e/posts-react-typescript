import React from 'react'

export const useFetching = (cb: () => Promise<void>) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<string>('');

    const serverRequest = async () => {
        try {
            setIsLoading(true);
            await cb();
        } catch (err: any) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    } 

    return {serverRequest, isLoading, err};
}