import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';


export default function NotPermitted() {
    // const error = useRouteError();
    // console.error(error);

    return (
        <Result
            status="403"
            title="Oops!"
            subTitle= "Sorry, you are not autherized to access this page"
            extra={<Button type="primary">
                <Link to="/">
                    <span>Back to homepage</span>
                </Link>
            </Button>}
        />
);
}
