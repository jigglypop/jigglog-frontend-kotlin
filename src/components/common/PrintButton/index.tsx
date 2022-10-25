import React, { useCallback } from "react";
import { BiPrinter } from "react-icons/bi";
import { Button } from "./styled";

const PrintButton = () => {
    const printPage = useCallback(() => {
        global.print();
    }, []);
    return (
        <Button type="button" onClick={printPage}>
            <BiPrinter className="link-inner" />
        </Button>
    );
};

export default PrintButton;
