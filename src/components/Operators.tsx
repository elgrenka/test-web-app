import React from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonsContainer } from '../styles/StyledComponents';

const operators = ['МТС', 'Билайн', 'Мегафон'];

export default function Operators() {
    const router = useRouter();

    return (
        <ButtonsContainer>
            {operators.map((operator, index) => (
                <Button key={index} onClick={() => router.push(`/payment/${operator}`)}>
                    {operator}
                </Button>
            ))}
        </ButtonsContainer>
    );
}
