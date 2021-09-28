import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/use-inicio';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

    return (
        <Layout>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p
                        css={css`
                            text-align: center;
                        `}>{contenido}</p>
                </div>
            </main>
            
        </Layout>
    );
}
 
export default Index;