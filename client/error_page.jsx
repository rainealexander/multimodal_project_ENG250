import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err);

    return (
        <div id="error-page">
            <h1>Oh my!</h1>
            <p>Apologies, an unexpected error as occurred.</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
        </div>
    );
}
