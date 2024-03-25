import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const ErrorCard = ({ errorMessage }) => {
    return (
        <Card shadow="lg" radius="md" fullWidth>
            <CardBody>
                <p>{errorMessage}</p>
            </CardBody>
        </Card>
    );
};

export default ErrorCard;
