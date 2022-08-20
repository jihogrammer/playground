import { FormEvent } from "react";

interface Props {
    submitTicker: (e: FormEvent<HTMLFormElement>) => void;
}

export const SideBar = ({ submitTicker }: Props) => {
    return <aside>
        <form onSubmit={submitTicker}>
            <input
                type="text"
                name="ticker"
                placeholder="ticker i.e. 005930"
                style={{ display: 'block' }}
            />
            <input
                type="submit"
                value="show"
                style={{ width: '100%' }}
            />
        </form>
    </aside>
};
